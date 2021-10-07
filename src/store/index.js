import Vue from 'vue'
import Vuex from 'vuex'
import map from './modules/map'
import news from './modules/news'
import users from './modules/users'
import login from './modules/login'
import about from './modules/about'
import projects from './modules/projects'
import message from './modules/message'
import catalogs from './modules/catalogs'
import gallery from './modules/gallery'
import articles from './modules/articles'
Vue.use(Vuex);

export default new Vuex.Store({
    actions: {},
    mutations: {},
    state: {},
    getters: {},
    modules: {
        map,
        news,
        users,
        login,
        about,
        projects,
        message,
        catalogs,
        gallery,
        articles
    }
})