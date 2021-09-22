export default {
    state: {
        show: false,
        information: null,
        currentPanel: "Catalogs",
        sidebarMapButtons: [{ name: "Каталоги", id: "Catalogs" }, { name: "Подложки", id: "BaseMap" }, { name: "Легенда", id: "Legend" }],
        baseMaps: [{ name: "Стандарт", url: "https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=NynhVPfsQFS9p8fzpF0c" },
        { name: "Рельеф", url: "https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=NynhVPfsQFS9p8fzpF0c" },
        { name: "Спутник", url: "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=NynhVPfsQFS9p8fzpF0c" }, {
            name: "Черно-белая", url: "https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=NynhVPfsQFS9p8fzpF0c"
        }],
        currentBaseMap: 0,
        zoom: 3,
        center: [0, 0],
        currentPosition: undefined

    },
    actions: {
        ChangeShow(ctx) {
            ctx.commit('changeShow');
        },

        ChangeTextPopup(ctx, text) {
            ctx.commit('changeTextPopup', text);
        },

        ChangeInformation(ctx, object) {
            if (object.features) {
                console.log(object)
                ctx.commit("changeInformation", object);
            }
        }
    },
    mutations: {
        changeShow(state, show) {
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
        },
        changeCurrentPosition(state, coordinate) {
            state.currentPosition = coordinate;
        },
        changeInformation(state, information) {
            state.information = information;
        }
    },
    getters: {
        zoom(state) {
            return state.zoom
        },
        center(state) {
            return state.center
        },
        currentPosition(state) {
            return state.currentPosition
        },
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