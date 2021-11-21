import { transform } from 'ol/proj';
export default {
    state: {
        show: false,
        information: null,
        currentPanel: "Catalogs",
        baseMaps: [
            { name: 'OSM', url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png' },
            { name: "Стандарт", url: "https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=NynhVPfsQFS9p8fzpF0c" },
            { name: "Рельеф", url: "https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=NynhVPfsQFS9p8fzpF0c" },
            { name: "Спутник", url: "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=NynhVPfsQFS9p8fzpF0c" },
        ],
        currentBaseMap: 0,
        zoom: 7,
        center: [10382902.767976305, 7403254.003900477],
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
                ctx.commit("changeInformation", object);
            }
        },

        UpdateCenter(ctx, coordinates) {
            const center = transform([
                Number(coordinates[0]),
                Number(coordinates[1]),
            ], "EPSG:4326", "EPSG:3857")
            ctx.commit('updateCenter', center);
        }
    },
    mutations: {
        updateCenter(state, center) {
            state.center = center
        },
        updateZoom(state, zoom) {
            state.zoom = zoom
        },
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