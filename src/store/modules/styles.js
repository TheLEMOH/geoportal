const URL_GET = 'http://enplus.petyaogurkin.keenetic.pro/api/styles/'
const URL_ADD = 'http://enplus.petyaogurkin.keenetic.pro/api/styles/add/'


async function Get() {
    const res = await fetch(URL_GET);
    const receivedStyles = await res.json();
    return receivedStyles
}


async function Add(style, token) {

    const formData = new FormData();

    formData.append("title", style.title);
    formData.append("svg", style.svg);
    formData.append("stroke", style.stroke);
    formData.append("strokeType", style.strokeType);
    formData.append("strokeWidth", style.strokeWidth);
    formData.append("strokeOpacity", style.strokeOpacity);
    formData.append("fill", style.fill);
    formData.append("fillOpacity", style.fillOpacity);


    const send = await fetch(URL_ADD, { method: 'POST', body: formData, headers: { 'Authorization': `Bearer ${token}` } })
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
                /*   Delete(n, user.accessToken) */
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
                name: null,
                fill: "#000000",
                fillOpacity: null,
                stroke: "#000000",
                strokeType: "solid",
                strokeWidth: null,
                strokeOpacity: null,
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
            state.styles.splice(index, 1);
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