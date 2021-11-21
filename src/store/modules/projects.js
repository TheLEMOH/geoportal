import WMSCapabilities from 'ol/format/WMSCapabilities';
import { SaveObjects, FetchObjects } from "./serverProcedure/general"
import Vue from 'vue'
const PARAMS_LEGEND = {
    SERVICE: 'WMS',
    VERSION: '1.3.0',
    REQUEST: 'GetLegendGraphic',
    FORMAT: 'image/png',
    SYMBOLWIDTH: 10,
    SYMBOLHEIGHT: 5,
    LAYERSPACE: 1,
    LAYERTITLESPACE: 1,
    ICONLABELSPACE: 1,
    LAYERTITLE: false,
    RULELABEL: true,
    TRANSPARENT: true,
    ITEMFONTCOLOR: 'white',
    ITEMFONTSIZE: '12'
}

async function RequestCapabilities(map) {
    const parser = new WMSCapabilities();
    const URL_CAPABILITIES = `https://yenisey.sfu-kras.ru/qgisserver/${map}?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS`
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

function GetBox(data) {
    return data.Capability.Layer.EX_GeographicBoundingBox
}

function CalculateCenter(data) {
    const x = (data[0] + data[2]) / 2
    const y = (data[1] + data[3]) / 2
    return [x, y]
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
        openedProject: null,
        capabilities: {},
        legend: [],
    },

    actions: {
        async FetchProjects(ctx) {
            const setting = {
                loaded: ctx.state.projectsLoaded,
                type: 'projects',
                funcClearDel: 'clearDelProjects',
                funcLoaded: 'updateProjectsLoaded',
                funcUpdate: 'updateProjects',
            }
            FetchObjects(ctx, setting)
        },

        async SaveProjects(ctx) {
            const settings = {
                forSave: ctx.state.projects,
                forDelete: ctx.state.delProjects,
                updateSelected: 'updateSelectedProject',
                updateLoaded: 'updateProjectsLoaded',
                type: 'projects',
                fetch: 'FetchProjects',
                save: 'SaveProjects',
                nonFilled: 'Заполните все поля у проекта!'
            }
            SaveObjects(ctx, settings)
        },

        async Capabilities(ctx, project) {
            const legend = project.legend
            if (!legend) {
                RequestCapabilities(project.map).then(data => {
                    const layers = GetLayers(data);
                    const box = GetBox(data);
                    const center = CalculateCenter(box);
                    let params = '';
                    for (let key in PARAMS_LEGEND) {
                        params += `${key}=${PARAMS_LEGEND[key]}&`
                    }
                    const URL_LEGEND = `https://yenisey.sfu-kras.ru/qgisserver/${project.map}?${params}LAYERS=${layers}`
                    ctx.commit("updateCapabilities", { id: project._id, legend: URL_LEGEND, layers: layers, center })
                }).catch((e) => {
                    this.dispatch('DisplayMessage', `Ошибка загрузки карты ${e}`);
                })
            }
        },

        async FetchMaps(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const setting = {
                loaded: ctx.state.mapsLoaded,
                type: 'maps',
                token: user.accessToken,
                funcClearDel: null,
                funcLoaded: 'updateMapsLoaded',
                funcUpdate: 'updateExistingMaps',
            }
            FetchObjects(ctx, setting);
        },

        UpdateProjectsToDisplay(ctx, project) {
            ctx.commit("updateProjectsToDisplay", project._id)
            if (project.visible)
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

        CancelProjects(ctx) {
            ctx.commit('updateSelectedProject', null);
            ctx.commit('cancelProjects')
        },

        OpenProject(ctx) {
            const openedProject = ctx.state.openedProject;
            if (openedProject) {
                const collapse = document.getElementById("collapseCatalog" + openedProject.parent);
                const input = document.getElementById("input-project" + openedProject.id)
                if (collapse) {
                    collapse.classList.add("show");
                    if (!input.checked)
                        input.dispatchEvent(new Event("change"));
                    ctx.commit('updateOpenedProject', null);
                }
            }
        },

        UpdateOpenedProject(ctx, object) {
            ctx.commit('updateOpenedProject', object);
        }
    },

    mutations: {
        updateOpenedProject(state, object) {
            state.openedProject = object
        },

        clearDelProjects(state) {
            state.delProjects = [];
        },

        updateProjectsLoaded(state, loaded) {
            state.projectsLoaded = loaded;
        },

        updateLegend(state, url) {
            state.legend.push(url);
        },

        updateCapabilities(state, data) {
            const el = state.projectsToDisplay.findIndex(p => p._id == data.id)
            Vue.set(state.projectsToDisplay[el], 'legend', data.legend);
            Vue.set(state.projectsToDisplay[el], 'layers', data.layers);
            Vue.set(state.projectsToDisplay[el], 'center', data.center);
        },

        cancelProjects(state) {
            state.delProjects = [];
            state.projects = JSON.parse(state.originalProjects)
        },

        updateProjectsToDisplay(state, id) {
            const el = state.projectsToDisplay.findIndex(p => p._id == id)
            Vue.set(state.projectsToDisplay[el], 'visible', !state.projectsToDisplay[el].visible);
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
            state.projects = projects;
            state.projectsToDisplay = [];
            projects.forEach(p => {
                const project = {
                    title: p.title,
                    _id: p._id,
                    map: p.map,
                    visible: false,
                    loaded: true,
                    section: p.section
                }

                state.projectsToDisplay.push(project)
            })
        },

        deleteProject(state, index) {
            if (state.projects[index].action == "add") {
                state.projects.splice(index, 1);
            } else {
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