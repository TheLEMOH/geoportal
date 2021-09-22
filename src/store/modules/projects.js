import WMSCapabilities from 'ol/format/WMSCapabilities';
import { FilledArray } from './valid/valid';
/* import { GetStatusText } from "./message/answers" */
import { GetMaps, Add, Get, Delete, Edit } from "./serverProcedure/projects"
import Vue from 'vue'

async function RequestCapabilities(map) {
    const parser = new WMSCapabilities();
    const URL_CAPABILITIES = `http://enplus.petyaogurkin.keenetic.pro/qgisserver/${map}?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS`
    const res = await fetch(URL_CAPABILITIES)
    const text = await res.text();
    const result = parser.read(text);
    return result
}

function GetLayers(data) {
    let layers = "";
    for (let i = 0; i < data.Capability.Layer.Layer.length; i++) {
        layers += data.Capability.Layer.Layer[i].Name + ','
    }
    return layers
}

export default {
    state: {
        originalProjects: '[]',
        projects: [],
        delProjects: [],
        existingMaps: [],
        selectedProject: null,
        projectsLoaded: false,
        mapsLoaded: false,
        projectsToDisplay: [],
        capabilities: {},
        legend: [],
    },

    actions: {
        async Capabilities(ctx, project) {
            const exists = ctx.state.capabilities[project._id];
            if (!exists) {
                RequestCapabilities(project.map).then(data => {
                    const layers = GetLayers(data);
                    const PARAMS_LEGEND = 'legend_options=fontName:Times%20New%20Roman;fontAntiAliasing:true;fontColor:0x000033;fontSize:14;bgColor:0xFFFFEE;dpi:180'
                    const URL_LEGEND = `http://enplus.petyaogurkin.keenetic.pro/qgisserver/${project.map}?&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetLegendGraphic&LAYERS=${layers}&FORMAT=image/png&${PARAMS_LEGEND}`
                    ctx.commit("updateCapabilities", { id: project._id, legend: URL_LEGEND, layers: layers })
                })
            }
        },

        async FetchProjects(ctx) {
            if (!ctx.state.projectsLoaded) {
                ctx.commit("updateProjectsLoaded", true);
                Get().then((receivedProjects) => {
                    ctx.commit('updateProjects', receivedProjects);
                });
            }

        },

        async FetchMaps(ctx) {
            if (!ctx.state.mapsLoaded) {
                const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
                GetMaps(user.accessToken).then(maps => {
                    ctx.commit('updateMapsLoaded', true)
                    ctx.commit('updateExistingMaps', maps);
                });

            }
        },

        UpdateProjectsToDisplay(ctx, project) {
            ctx.commit("updateProjectsToDisplay", project._id)
            this.dispatch("Capabilities", project);
        },

        AddProject(ctx) {
            const project = {
                title: null,
                description: null,
                section: null,
                map: null,
                action: 'add'
            }
            const length = ctx.getters.projectsLength;
            ctx.commit('addProject', project);
            ctx.commit('updateSelectedProject', length);
        },

        DeleteProject(ctx, index) {
            ctx.commit('updateSelectedProject', null);
            ctx.commit('deleteProject', index);
        },

        SelectProject(ctx, index) {
            ctx.commit('updateSelectedProject', index);
        },

        async SaveProjects(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const projects = ctx.state.projects
            const delProjects = ctx.state.delProjects
            const filled = FilledArray(projects)
            const promises = [];
            if (filled) {
                ctx.commit('updateSelectedProject', null);
                ctx.commit("updateProjectsLoaded", false);
                this.dispatch('DisplayMessage', 'Сохранение...')
                projects.forEach(p => {
                    console.log(p)
                    if (p.action == "add") {
                        promises.push(
                            Add(p, user.accessToken).then(res => {
                                p.action = "done";
                                return res;
                            })
                        );

                    }
                    if (p.action == "edit") {
                        promises.push(
                            Edit(p, user.accessToken).then(res => {
                                p.action = "done";
                                return res;
                            })
                        );
                    }
                })

                if (delProjects.length != 0) {
                    promises.push(
                        delProjects.forEach(n => {
                            Delete(n, user.accessToken)
                        })
                    );
                }

                Promise.all(promises).then(() => {
                    this.dispatch('DisplayMessage', "Готово!");
                    setTimeout(() => this.dispatch('FetchProjects'), 1000);

                })
            }
            else {
                this.dispatch('DisplayMessage', 'Заполните все поля у проекта!')
            }
        },
    },

    mutations: {
        updateProjectsLoaded(state, loaded) {
            state.projectsLoaded = loaded;
        },

        updateLegend(state, url) {
            state.legend.push(url);
        },

        updateCapabilities(state, data) {
            Vue.set(state.capabilities, data.id, { layers: data.layers, legend: data.legend });
        },

        updateProjectsToDisplay(state, id) {
            const project = state.projects.find(p => p._id == id)
            const el = state.projectsToDisplay.findIndex(p => p._id == id)
            if (el == -1) {
                Vue.set(project, 'visible', true);
                state.projectsToDisplay.push(project)
            }
            else {
                Vue.set(state.projectsToDisplay[el], 'visible', !state.projectsToDisplay[el].visible);
            }
        },

        clearProjectsToDisplay(state) {
            state.projectsToDisplay = [];
        },

        updateExistingMaps(state, maps) {
            state.existingMaps = maps
        },

        addProject(state, project) {
            state.projects.push(project)
        },

        updateSelectedProject(state, index) {
            if (index != null && state.projects[index].action != "add") {
                state.projects[index].action = "edit";
            }
            state.selectedProject = index
        },

        updateProjects(state, projects) {
            state.originalProjects = JSON.stringify(projects)
            state.projects = projects
        },

        deleteProject(state, index) {
            if (state.projects[index].action == "add") {
                state.projects.splice(index, 1);
            }
            else {
                state.delProjects.push(state.projects[index]);
                state.projects.splice(index, 1);
            }
        },

        updateMapsLoaded(state, loaded) {
            state.mapsLoaded = loaded;
        }

    },

    getters: {
        legend(state) {
            return state.legend
        },
        capabilities(state) {
            return state.capabilities
        },
        projectsToDisplay(state) {
            return state.projectsToDisplay
        },
        existingMaps(state) {
            return state.existingMaps
        },
        projectsLength(state) {
            return state.projects.length
        },
        projects(state) {
            return state.projects
        },
        selectedProject(state) {
            return state.selectedProject
        },
        projectsLoaded(state) {
            return state.projectsLoaded
        }
    },
}