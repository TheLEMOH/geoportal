import { Encode } from "./base64/code"
import { FilledArray } from './valid/valid';
import { Add, Get, Delete, Edit } from "./serverProcedure/catalogs"
/* import { GetStatusText } from "./message/answers" */

export default {
    state: {
        originalCatalogs: '[]',
        catalogs: [],
        openedCatalogs: [],
        delCatalogs: [],
        selectedCatalog: null,
        сatalogsLoaded: false,
    },
    actions: {
        async FetchCatalogs(ctx) {
            if (!ctx.state.сatalogsLoaded)
                Get().then((receivedCatalogs => {
                    ctx.commit('updateCatalogsLoaded', true);
                    ctx.commit('updateCatalogs', receivedCatalogs);
                })).then(() => {
                    this.dispatch('OpenCatalogs')
                });
        },

        async SaveCatalogs(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const catalogs = ctx.state.catalogs
            const delCatalogs = ctx.state.delCatalogs
            const filled = FilledArray(catalogs);
            const promises = [];
            if (filled) {
                ctx.commit("updateSelectedCatalog", null);
                ctx.commit("updateCatalogsLoaded", false);
                this.dispatch('DisplayMessage', 'Сохранение...')
                catalogs.forEach(c => {
                    if (c.action == "add") {
                        c.action = "loading"
                        promises.push(
                            Add(c, user.accessToken).then((res) => {
                                c.action = "done";
                                return res;
                            })
                        );
                    }
                    if (c.action == "edit") {
                        promises.push(
                            Edit(c, user.accessToken).then((res) => {
                                c.action = "done";
                                return res;
                            })
                        );
                    }
                })
                ctx.commit('updateSelectedCatalog', null);

                if (delCatalogs.length != 0) {
                    delCatalogs.forEach(с => {
                        Delete(с, user.accessToken).then((res) => {
                            return res;
                        })
                    })
                    ctx.commit('clearDelCatalogs');
                }

                Promise.all(promises).then(() => {
                    this.dispatch('DisplayMessage', "Готово!");
                }).then(() => {
                    setTimeout(() => this.dispatch('FetchCatalogs'), 500);
                })
            }
            else {
                this.dispatch('DisplayMessage', 'Заполните все поля у каталога!')
            }
        },

        async FecthProjectsFromCatalogs(ctx, id) {
            console.log(id);
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

        UpdateOpenedCatalogs(ctx, text) {
            if (text) {
                const catalogs = text.split(',');
                ctx.commit("updateOpenedCatalogs", catalogs);
            }
        },

        OpenCatalogs(ctx) {
            ctx.state.openedCatalogs.forEach((catalog) => {
                const collapse = document.getElementById("collapseCatalog" + catalog);
                if (collapse) {
                    const inputs = collapse.getElementsByClassName('form-check-input');
                    inputs.forEach((input) => {
                        input.checked = true;
                        input.dispatchEvent(new Event('change'));

                    })
                    collapse.classList.add("show");
                }
            });
        },

    },
    mutations: {

        updateCatalogsLoaded(state, loaded) {
            state.сatalogsLoaded = loaded;
        },

        updateOpenedCatalogs(state, catalogs) {
            state.openedCatalogs = catalogs
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
        }
    },
}