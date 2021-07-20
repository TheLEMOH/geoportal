export default {
    actions: {
        addNews(ctx, news) {
            ctx.commit('addNews', news);

        }
    },
    mutations: {
        addNews(state, news) {
            state.news.push(news)
        }
    },
    state: {
        news: [{ date: "12.07.2021", title: "Обновление 2.0", body: "Всей швали моих критиков Моих завистников: Вы думаете, что с человеком Который вот до такой степени Точно исследует тему, можно спорить Вы думаете, что я вас не переиграю? Что я вас не уничтожу? Я вас уничтожу!" }]
    },
    getters: {
        getNews(state) {
            return state.news
        }
    },
}