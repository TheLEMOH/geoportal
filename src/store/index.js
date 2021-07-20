import Vue from 'vue'
import Vuex from 'vuex'
import map from './modules/map'
import news from './modules/news'
Vue.use(Vuex);

export default new Vuex.Store({
    actions: {},
    mutations: {},
    state: {},
    getters: {},
    modules: {
        map,
        news
    }
})