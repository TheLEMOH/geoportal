export default {
    state: {
        message: null,
    },
    actions: {
        async DisplayMessage(ctx, message) {
            ctx.commit('updateMessage', message);
            setTimeout(() => { ctx.commit('updateMessage', "") }, 5000);
        },

        async DisplayMessageEver(ctx, message) {
            ctx.commit('updateMessage', message);
        }
    },
    mutations: {
        updateMessage(state, message) {
            state.message = message
        }
    },
    getters: {
        message(state) {
            return state.message
        }
    },
}