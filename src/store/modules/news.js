import { getBase64 } from "./base64/code"
import { SaveObjects, FetchObjects } from "./serverProcedure/general"
import Vue from 'vue'
export default {
    state: {
        originalNews: '[]',
        news: [],
        delNews: [],
        newsLoaded: false,
        selectedNews: null,
    },
    actions: {
        async FetchNews(ctx) {
            const settings = {
                loaded: ctx.state.newsLoaded,
                type: 'news',
                funcClearDel: 'clearDelNews',
                funcLoaded: 'updateNewsLoaded',
                funcUpdate: 'updateNews',
            }
            FetchObjects(ctx, settings);
        },

        async SaveNews(ctx) {
            const settings = {
                type: "news",
                forSave: ctx.state.news,
                forDelete: ctx.state.delNews,
                updateSelected: 'updateSelectedNews',
                updateLoaded: 'updateNewsLoaded',
                fetch: 'FetchNews',
                save: 'SaveNews',
                nonFilled: 'Заполните все поля у новости!'
            }
            SaveObjects(ctx, settings)
        },

        async TestImgNews(ctx, e) {
            const files = e.target.files
            files.forEach(file => {
                const promise = getBase64(file);
                promise.then((result) => {
                    ctx.commit("addImageNews", result);
                })
            });
        },

        DeleteImageFromNews(ctx, object) {
            ctx.commit("deleteImageFromNews", object);
        },

        AddNews(ctx) {
            const news = {
                title: null,
                body: null,
                date: '00.00.00',
                imgBase: [],
                action: 'add',
            }
            const length = ctx.getters.newsLength;
            ctx.commit('addNews', news);
            ctx.commit('updateSelectedNews', length);
        },

        DeleteNews(ctx, index) {
            ctx.commit('updateSelectedNews', null);
            ctx.commit('deleteNews', index);
        },

        Cancel(ctx) {
            ctx.commit('updateSelectedNews', null);
            ctx.commit('cancel')
        },


        SelectNews(ctx, index) {
            ctx.commit('updateSelectedNews', index);
        }
    },
    mutations: {
        deleteImageFromNews(state, object) {
            const selectedNews = state.selectedNews;
            const index = object.index;
            const array = object.array;
            if (!state.news[selectedNews].imgOld)
                state.news[selectedNews].imgOld = [];
            if (state.news[selectedNews].img && array != "base") {
                state.news[selectedNews].imgOld.push(state.news[selectedNews].img[index]);
                state.news[selectedNews].img.splice(index, 1);
            }
            if (array == "base") {
                state.news[selectedNews].imgBase.splice(index, 1);
            }
        },

        addImageNews(state, image) {
            if (!state.news[state.selectedNews].imgBase) {
                Vue.set(state.news[state.selectedNews], 'imgBase', [])
            }
            state.news[state.selectedNews].imgBase.push(image);
        },

        addNews(state, news) {
            state.news.push(news)
        },

        deleteNews(state, index) {

            if (state.news[index].action == "add") {
                state.news.splice(index, 1);
            } else {
                state.delNews.push(state.news[index]);
                state.news.splice(index, 1);
            }
        },

        updateNews(state, news) {
            state.originalNews = JSON.stringify(news)
            state.news = news
        },

        clearDelNews(state) {
            state.delNews = []
        },

        cancel(state) {
            state.delNews = [];
            state.news = JSON.parse(state.originalNews)
        },

        updateSelectedNews(state, index) {
            if (index != null && state.news[index].action != "add") {
                state.news[index].action = "edit";
            }
            state.selectedNews = index
        },

        updateNewsLoaded(state, loaded) {
            state.newsLoaded = loaded;
        }
    },

    getters: {
        news(state) {
            return state.news
        },
        newsLength(state) {
            /*    news.sort((a, b) => {
                   const aSplit = a.date.split('.')
                   const bSplit = b.date.split('.')
                   const aDate = new Date(aSplit[2], aSplit[1], aSplit[0])
                   const bDate = new Date(bSplit[2], bSplit[1], bSplit[0])
                   if (aDate > bDate) {
                       return 1;
                   }
                   if (aDate < bDate) {
                       return -1;
                   }
                   return 0
               }); */
            return state.news.length
        },
        selectedNews(state) {
            return state.selectedNews
        },
        newsLoaded(state) {
            return state.newsLoaded
        }
    },
}