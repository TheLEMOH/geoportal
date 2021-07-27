import { Get, Add, Edit, Delete } from "./news/server-procedure"
export default {
    state: {
        originalNews: '[]',
        news: [],
        delNews: [],
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
            const receivedNews = await Get();
            ctx.commit('updateNews', receivedNews);
        },
        async SaveNews(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const news = ctx.state.news
            const delNews = ctx.state.delNews
            let wrongNews = false;
            news.forEach((n) => {
                if ((!n.title || !n.body) && n.action != "delete") {
                    wrongNews = true;
                }
            });

            if (wrongNews) {
                alert("Заполните название и текст новостей перед отправкой");
            }

            if (!wrongNews) {
                news.forEach(n => {
                    if (n.action == "add") {
                        Add(n, user.accessToken);
                        n.action = "done";
                    }
                    if (n.action == "edit") {
                        Edit(n, user.accessToken);
                        n.action = "done"
                    }
                })
                delNews.forEach(n => {
                    Delete(n, user.accessToken)
                })
                this.dispatch('FetchNews');
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
            console.log(state.news)
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
    },
}