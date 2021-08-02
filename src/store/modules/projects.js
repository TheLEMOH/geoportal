
export default {
    state: {
        projects: [{ title: "Новый проект", objects: [{ title: "Новый объект" }] }],
        selectedProject: null,
        selectedObject: null
    },
    actions: {
        AddProject(ctx) {
            const project = {
                title: '',
                body: '',
                action: 'add'
            }
            ctx.commit('addProject', project);
        },

        AddObject(ctx) {
            const object = {
                title: '',
            }
            ctx.commit('addProject', object);
        },
    },
    mutations: {
        addProject(state, project) {
            state.projects.push(project)
        },

        addObject(state, object) {
            state.projects[state.selectedProject].push(object)
        },
    },
    getters: {
        projects(state) {
            return state.projects
        },
    },
}