import { Get, Add, Edit, Delete } from "./serverProcedure/news"
import { FilledArray } from './valid/valid';
/* import { GetStatusText } from "./message/answers" */
export default {
    state: {
        originalNews: '[]',
        news: [],
        delNews: [],
        newsLoaded: false,
        selectedNews: null,
    },
    actions: {
        fileChange(ctx, e) {
            const files = e.target.files
            console.log(files)
            ctx.commit('updateFiles', files)
        },

        AddNews(ctx) {
            const news = {
                title: '',
                body: '',
                date: '',
                img: [],
                action: 'add'
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

        async FetchNews(ctx) {
            if (!ctx.state.newsLoaded) {
                Get().then((receivedNews) => {
                    ctx.commit('updateNewsLoaded', true);
                    ctx.commit('updateNews', receivedNews);
                })
            }

        },

        async SaveNews(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const news = ctx.state.news
            const delNews = ctx.state.delNews
            const filled = FilledArray(news);
            const promises = [];
            if (filled) {
                ctx.commit('updateSelectedNews', null);
                ctx.commit("updateNewsLoaded", false);
                this.dispatch('DisplayMessage', "Сохранение новостей...");
                news.forEach(n => {
                    if (n.action == "add") {
                        n.action = "loading"
                        promises.push(
                            Add(n, user.accessToken).then(res => {
                                n.action = "done";
                                return res
                            })
                        );
                    }
                    if (n.action == "edit") {
                        n.action = "loading"
                        promises.push(
                            Edit(n, user.accessToken).then(res => {
                                n.action = "done";
                                return res;
                            })
                        );
                    }
                })

                if (delNews.length != 0) {
                    delNews.forEach(n => {
                        promises.push(Delete(n, user.accessToken))
                    })
                }

                Promise.all(promises).then(() => {
                    this.dispatch('DisplayMessage', "Готово!");
                    setTimeout(() => this.dispatch('FetchNews'), 1000);
                })

            }
            else {
                this.dispatch('DisplayMessage', "Заполните новости перед отправкой");
            }
        },

        SelectNews(ctx, index) {
            ctx.commit('updateSelectedNews', index);
        }
    },
    mutations: {
        addNews(state, news) {
            state.news.push(news)
        },
        deleteNews(state, index) {
            if (state.news[index].action == "add") {
                state.news.splice(index, 1);
            }
            else {
                state.delNews.push(state.news[index]);
                state.news.splice(index, 1);
            }
        },
        updateNews(state, news) {
            state.originalNews = JSON.stringify(news)
            state.news = news
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
        updateFiles(state, files) {
            const index = state.selectedNews;
            files.forEach(f => {
                state.news[index].img.push(f)
            })
            console.log(state.news)
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