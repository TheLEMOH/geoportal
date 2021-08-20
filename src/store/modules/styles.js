const URL_GET = 'http://enplus.petyaogurkin.keenetic.pro/api/styles/'
const URL_ADD = 'http://enplus.petyaogurkin.keenetic.pro/api/styles/add/'
const URL_DELETE = 'http://enplus.petyaogurkin.keenetic.pro/api/styles/remove/'

async function Get() {
    const res = await fetch(URL_GET);
    const receivedStyles = await res.json();
    return receivedStyles
}

async function Add(style, token) {

    const body = JSON.stringify(style)
    const send = await fetch(URL_ADD, { method: 'POST', body: body, headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    console.log(send)
}

async function Delete(style, token) {
    const send = fetch(URL_DELETE + `${style._id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    console.log(send)
}

export default {
    state: {
        originalStyles: '[]',
        styles: [],
        delStyles: [],
        selectedStyle: null
    },
    actions: {

        async SaveStyles(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const styles = ctx.state.styles
            const delStyles = ctx.state.delStyles
            styles.forEach(s => {
                console.log(s)
                if (s.action == "add") {
                    Add(s, user.accessToken);
                    s.action = "done";
                }
                if (s.action == "edit") {
                    /*    Edit(s, user.accessToken);
                       s.action = "done" */
                }
            })
            delStyles.forEach(s => {
                console.log(s);
                Delete(s, user.accessToken)
            })
        },

        SelectStyle(ctx, index) {
            ctx.commit('updateSelectedStyle', index);
        },

        async FetchStyles(ctx) {
            const receivedStyles = await Get();
            ctx.commit('updateStyles', receivedStyles);
        },

        AddStyle(ctx) {
            const style = {
                title: "Новый стиль",
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeType: "solid",
                strokeWidth: 1,
                strokeOpacity: 1,
                action: "add"
            }
            ctx.commit("addStyle", style)
        },

        CancelStyles(ctx) {
            ctx.commit('updateSelectedStyle', null);
            ctx.commit('cancelStyles')
        },

        DeleteStyle(ctx, index) {
            ctx.commit('updateSelectedStyle', null);
            ctx.commit('deleteStyle', index)
        }
    },
    mutations: {
        updateStyles(state, styles) {
            console.log(styles)
            state.styles = styles;
        },

        updateSelectedStyle(state, index) {
            state.selectedStyle = index
        },

        addStyle(state, style) {
            state.styles.push(style)
        },

        deleteStyle(state, index) {
            if (state.styles[index].action == "add") {
                state.styles.splice(index, 1);
            }
            else {
                state.delStyles.push(state.styles[index]);
                state.styles.splice(index, 1);
            }
        },

        cancelStyles(state) {
            state.delStyles = [];
            state.styles = JSON.parse(state.originalStyles)
        }
    },
    getters: {
        selectedStyle(state) {
            return state.selectedStyle
        },

        styles(state) {
            return state.styles
        },
    },
}