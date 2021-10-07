import { URL } from "./serverProcedure/URL"
export default {
    state: {
        about: null,
    },
    actions: {
        async FetchAbout(ctx) {
            fetch(URL.about.get).then(res => {
                res.json().then(about => {
                    ctx.commit('updateAbout', about);
                });
            }).catch(e => {
                ctx.commit("DisplayMessage", `about ${e}`)
            });

        },

        async EditAbout(ctx) {
            const text = ctx.state.about[0].body;
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const res = await fetch(URL.about.edit, { method: "PUT", body: JSON.stringify({ body: text }), headers: { 'Authorization': `Bearer ${user.accessToken}`, 'Content-Type': 'application/json' } });
            const about = await res.json();
            console.log(about)
        }
    },
    mutations: {
        updateAbout(state, about) {
            state.about = about;
        }
    },
    getters: {
        about(state) {
            return state.about
        },
    },
}