const URL_ABOUT = "http://enplus.petyaogurkin.keenetic.pro/api/about/"
const URL_EDIT = "http://enplus.petyaogurkin.keenetic.pro/api/about/edit/"
export default {
    state: {
        about: null,
    },
    actions: {
        async FetchAbout(ctx) {
            const res = await fetch(URL_ABOUT);
            const about = await res.json();
            ctx.commit('updateAbout', about);
        },

        async EditAbout(ctx) {
            const text = ctx.state.about[0].body;
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const res = await fetch(URL_EDIT, { method: "PUT", body: JSON.stringify({ body: text }), headers: { 'Authorization': `Bearer ${user.accessToken}`, 'Content-Type': 'application/json' } });
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