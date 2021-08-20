export default {
    state: {
        show: false,
        information: "",
        currentPanel: null,
        sidebarMapButtons: [{ name: "Каталоги", id: "Catalogs" }, { name: "Подложки", id: "BaseMap" }, { name: "Легенда", id: "Legend" }],
        baseMaps: [{ name: "Стандарт", url: "https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=NynhVPfsQFS9p8fzpF0c" }, { name: "Рельеф", url: "https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=NynhVPfsQFS9p8fzpF0c" }, { name: "Спутник", url: "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=NynhVPfsQFS9p8fzpF0c" }],
        currentBaseMap: 0,
    },
    actions: {
        ChangeShow(ctx) {
            ctx.commit('changeShow');
        },

        Open(ctx) { ctx.commit('changeShow', true); },

        Close(ctx) { ctx.commit('changeShow', false); },

        ChangeExpand(ctx) {
            ctx.commit('changeExpand', false);
        },

        ChangeTextPopup(ctx, text) {
            ctx.commit('changeTextPopup', text);
        }

    },
    mutations: {
        changeShow(state, show) {
            console.log(show)
            state.show = show
        },
        changeTextPopup(state, text) {
            state.information = text
        },
        changeCurrentPanel(state, id) {
            state.currentPanel = id;
        },
        changeBaseMap(state, index) {
            state.currentBaseMap = index;
        }
    },
    getters: {
        show(state) {
            return state.show
        },
        information(state) {
            return state.information
        },
        currentPanel(state) {
            return state.currentPanel
        },
        sidebarMapButtons(state) {
            return state.sidebarMapButtons
        },
        baseMaps(state) {
            return state.baseMaps
        },
        currentBaseMap(state) {
            return state.currentBaseMap
        }
    },
}