import { SaveObjects, FetchObjects, FetchObjectById } from "./serverProcedure/general"
import { getBase64 } from "./base64/code"
import Vue from 'vue'

export default {
    state: {
        originalArticles: '[]',
        articles: [],
        articleById: null,
        articlesLoaded: false,
        selectedArticle: null,
        delArticles: []
    },
    actions: {
        async FetchArticles(ctx) {
            const setting = {
                loaded: ctx.state.articlesLoaded,
                type: 'articles',
                funcClearDel: 'clearDelArticles',
                funcLoaded: 'updateArticlesLoaded',
                funcUpdate: 'updateArticles',
            }
            FetchObjects(ctx, setting);
        },

        async SaveArticles(ctx) {
            const settings = {
                forSave: ctx.state.articles,
                forDelete: ctx.state.delArticles,
                updateSelected: 'updateSelectedArticle',
                updateLoaded: 'updateArticlesLoaded',
                type: 'articles',
                fetch: 'FetchArticles',
                save: 'SaveArticles',
                nonFilled: 'Заполните все поля у статьи!'
            }
            SaveObjects(ctx, settings)
        },

        async FetchArticleById(ctx, id) {
            const setting = {
                id,
                type: 'articles',
                funcUpdate: 'updateArticleByid',
            }
            FetchObjectById(ctx, setting)
        },

        async AddImageArticle(ctx, e) {
            const files = e.target.files
            files.forEach(file => {
                const promise = getBase64(file);
                promise.then((result) => {
                    ctx.commit("addImageArticle", result);
                })
            });
        },

        AddArticle(ctx) {
            const article = {
                title: null,
                body: null,
                imgBase: [],
                action: 'add'
            }
            const length = ctx.getters.articlesLength;
            ctx.commit('addArticle', article);
            ctx.commit('updateSelectedArticle', length);
        },

        CancelArticles(ctx) {
            ctx.commit('updateSelectedArticle', null);
            ctx.commit('cancelArticles')
        },

        SelectArticle(ctx, index) {
            ctx.commit('updateSelectedArticle', index);
        },

        DeleteArticle(ctx, index) {
            ctx.commit('updateSelectedArticle', null);
            ctx.commit('deleteArticle', index);
        },

        CopyUrlArticle(ctx, e) {
            this.dispatch('DisplayMessage', "Ссылка скопирована!");
            const url = `https://yenisey.sfu-kras.ru/article/${e}`
            navigator.clipboard.writeText(url);
        },

        DeleteImageFromArticle(ctx, object) {
            ctx.commit("deleteImageFromArticle", object);
        },

    },
    mutations: {
        clearDelArticles(state) {
            state.delArticles = [];
        },

        deleteImageFromArticle(state, object) {
            const selectedArticle = state.selectedArticle;
            const index = object.index;
            const array = object.array;
            if (!state.articles[selectedArticle].imgOld)
                state.articles[selectedArticle].imgOld = [];
            if (state.articles[selectedArticle].img && array != "base") {
                state.articles[selectedArticle].imgOld.push(state.articles[selectedArticle].img[index]);
                state.articles[selectedArticle].img.splice(index, 1);
            }
            if (array == "base") {
                state.articles[selectedArticle].imgBase.splice(index, 1);
            }
        },

        addImageArticle(state, image) {
            const selectedArticle = state.selectedArticle;
            if (!state.articles[selectedArticle].imgBase) {
                Vue.set(state.articles[selectedArticle], 'imgBase', [])
            }
            state.articles[selectedArticle].imgBase.push(image);
        },

        addArticle(state, article) {
            state.articles.push(article)
        },

        updateArticlesLoaded(state, loaded) {
            state.articlesLoaded = loaded;
        },

        updateArticles(state, articles) {
            state.originalArticles = JSON.stringify(articles)
            state.articles = articles
        },

        updateSelectedArticle(state, index) {
            if (index != null && state.articles[index].action != "add") {
                state.articles[index].action = "edit";
            }
            state.selectedArticle = index
        },

        deleteArticle(state, index) {
            if (state.articles[index].action == "add") {
                state.articles.splice(index, 1);
            } else {
                state.delArticles.push(state.articles[index]);
                state.articles.splice(index, 1);
            }
        },

        cancelArticles(state) {
            state.delArticles = [];
            state.articles = JSON.parse(state.originalArticles)
        },

        updateArticleByid(state, article) {
            state.articleById = article
        },

    },
    getters: {
        articlesLength(state) {
            return state.articles.length
        },

        articles(state) {
            return state.articles
        },

        selectedArticle(state) {
            return state.selectedArticle
        },

        articlesLoaded(state) {
            return state.articlesLoaded
        },

        articleById(state) {
            return state.articleById
        }

    },
}