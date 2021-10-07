export default {
    state: {
        messages: [],
        showMessage: [],
        displayTime: 2500,
    },
    actions: {
        async DisplayMessage(ctx, message) {
            const id = new Date().getTime();
            ctx.commit('updateMessage', { text: message, id: id });
            setTimeout(() => { ctx.commit('closeMessage', id); }, ctx.state.displayTime);
        },

        async DisplayMessageEver(ctx, message) {
            ctx.commit('updateMessage', message);
        }
    },
    mutations: {
        updateMessage(state, message) {
            state.messages.push(message)
        },

        closeMessage(state, id) {
            const exists = state.messages.findIndex(m => m.id == id)
            if (exists != -1) {
                state.messages.splice(exists, 1);
            }
        }
    },
    getters: {
        lengthMessages(state) {
            return state.messages.length
        },
        messages(state) {
            return state.messages
        },
        showMessage(state) {
            return state.showMessage
        }
    },
}