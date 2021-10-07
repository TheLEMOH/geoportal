import { Encode } from "./base64/code"
import { SaveObjects, FetchObjects, FetchObjectById } from "./serverProcedure/general"

export default {
    state: {
        originalCatalogs: '[]',
        catalogs: [],
        catalogById: null,
        openedCatalog: null,
        delCatalogs: [],
        selectedCatalog: null,
        сatalogsLoaded: false,
        сatalogByIdLoaded: false
    },
    actions: {
        async FetchCatalogs(ctx) {
            const setting = {
                loaded: ctx.state.сatalogsLoaded,
                type: 'catalogs',
                funcClearDel: 'clearDelCatalogs',
                funcLoaded: 'updateCatalogsLoaded',
                funcUpdate: 'updateCatalogs',
            }
            FetchObjects(ctx, setting);
        },

        async FetchCatalogById(ctx, id) {
            const setting = {
                id,
                type: 'catalogs',
                funcUpdate: 'updateCatalogByid',
                funcLoaded: 'updateCatalogByIdLoaded'
            }
            ctx.commit('updateCatalogByIdLoaded', false);
            FetchObjectById(ctx, setting)
        },

        async SaveCatalogs(ctx) {
            const settings = {
                forSave: ctx.state.catalogs,
                forDelete: ctx.state.delCatalogs,
                updateSelected: 'updateSelectedCatalog',
                updateLoaded: 'updateCatalogsLoaded',
                type: 'catalogs',
                fetch: 'FetchCatalogs',
                save: 'SaveCatalogs',
                nonFilled: 'Заполните все поля у каталога!'
            }
            SaveObjects(ctx, settings)
        },

        async FecthProjectsFromCatalogs(ctx, id) {
            const URL = `http://enplus.petyaogurkin.keenetic.pro/api/sections/${id}`;
            const res = await fetch(URL)
            const text = await res.json()
            console.log(text);
        },

        TestIMG(ctx, e) {
            const file = e.target.files
            const catalog = ctx.state.catalogs[ctx.state.selectedCatalog];
            Encode(file, catalog);
        },

        AddCatalog(ctx) {
            const catalog = {
                title: null,
                description: null,
                img: null,
                action: 'add'
            }
            const length = ctx.getters.catalogsLength;
            ctx.commit('addCatalog', catalog);
            ctx.commit('updateSelectedCatalog', length);
        },

        DeleteCatalog(ctx, index) {
            ctx.commit('updateSelectedCatalog', null);
            ctx.commit('deleteCatalog', index);
        },

        SelectCatalog(ctx, index) {
            ctx.commit('updateSelectedCatalog', index);
        },

        CancelCatalogs(ctx) {
            ctx.commit('updateSelectedCatalog', null);
            ctx.commit('cancelCatalogs')
        },

        UpdateOpenedCatalogs(ctx, id) {
            ctx.commit('updateOpenedCatalog', id)
        },

        OpenCatalog(ctx) {
            const openedCatalog = ctx.state.openedCatalog;
            const collapse = document.getElementById("collapseCatalog" + openedCatalog);
            if (collapse) {
                collapse.classList.add("show");
                ctx.commit('updateOpenedCatalog', null)
            }
        },

    },
    mutations: {

        updateCatalogsLoaded(state, loaded) {
            state.сatalogsLoaded = loaded;
        },

        updateCatalogByIdLoaded(state, loaded) {
            state.сatalogByIdLoaded = loaded;
        },

        updateOpenedCatalog(state, id) {
            state.openedCatalog = id
        },

        cancelCatalogs(state) {
            state.delCatalogs = [];
            state.catalogs = JSON.parse(state.originalCatalogs)
        },

        addCatalog(state, catalog) {
            state.catalogs.push(catalog)
        },

        updateSelectedCatalog(state, index) {
            if (index != null && state.catalogs[index].action != "add") {
                state.catalogs[index].action = "edit";
            }
            state.selectedCatalog = index
        },

        updateCatalogs(state, catalogs) {
            state.originalCatalogs = JSON.stringify(catalogs)
            state.catalogs = catalogs
        },

        updateCatalogByid(state, catalog) {
            state.catalogById = catalog;
        },

        clearDelCatalogs(state) {
            state.delCatalogs = [];
        },

        deleteCatalog(state, index) {
            if (state.catalogs[index].action == "add") {
                state.catalogs.splice(index, 1);
            }
            else {
                state.delCatalogs.push(state.catalogs[index]);
                state.catalogs.splice(index, 1);
            }
        }

    },
    getters: {
        catalogsLength(state) {
            return state.catalogs.length
        },
        catalogs(state) {
            return state.catalogs
        },
        selectedCatalog(state) {
            return state.selectedCatalog
        },
        openedCatalogs(state) {
            return state.openedCatalogs
        },
        сatalogsLoaded(state) {
            return state.сatalogsLoaded
        },
        сatalogByIdLoaded(state) {
            return state.сatalogByIdLoaded
        },
        catalogById(state) {
            return state.catalogById
        }
    },
}