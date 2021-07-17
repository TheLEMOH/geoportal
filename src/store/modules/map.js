export default {
    actions: {
        changeShow(ctx) {
            ctx.commit('updateShow');
        }
    },
    mutations: {
        updateShow(state) {
            state.show = !state.show
        }
    },
    state: {
        show: false
    },
    getters: {
        getShow(state) {
            return state.show
        }
    },
}