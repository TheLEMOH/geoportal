import { URL } from "./serverProcedure/URL"
export default {
    state: {
        about: null,
        aboutLoaded: false
    },
    actions: {
        async FetchAbout(ctx) {
            fetch(URL.about.get).then(res => {
                res.json().then(about => {
                    ctx.commit('updateAboutLoaded', true);
                    ctx.commit('updateAbout', about);
                });
            }).catch(e => {
                this.dispatch("DisplayMessage", `about ${e}`)
            });

        },

        async EditAbout(ctx) {
            ctx.commit('updateAboutLoaded', false);
            this.dispatch('DisplayMessage', "Сохранение...");
            const text = ctx.state.about[0].body;
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const res = await fetch(URL.about.edit, { method: "PUT", body: JSON.stringify({ body: text }), headers: { 'Authorization': `Bearer ${user.accessToken}`, 'Content-Type': 'application/json' } });
            res.json().then(j => {
                ctx.commit('updateAboutLoaded', true);
                this.dispatch("DisplayMessage", `Успешно! ${j.message}`);
            });

        }
    },
    mutations: {
        updateAbout(state, about) {
            state.about = about;
        },

        updateAboutLoaded(state, loaded) {
            state.aboutLoaded = loaded
        }
    },
    getters: {
        about(state) {
            return state.about
        },
        aboutLoaded(state) {
            return state.aboutLoaded
        },
    },
}