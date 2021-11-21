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
import carousel from './modules/carousel'
Vue.use(Vuex);

export default new Vuex.Store({
    actions: {},
    mutations: {},
    state: {
        defaultToolbar: [
            [{ header: [false, 1, 2, 3, 4, 5, 6] }],
            ["bold", "italic", "underline", "strike"],
            [
                { align: "" },
                { align: "center" },
                { align: "right" },
                { align: "justify" },
            ],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ color: [] }, { background: [] }],
            ["link"],
            ["clean"],
        ],
    },
    getters: {
        defaultToolbar(state) {
            return state.defaultToolbar
        }
    },
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
        articles,
        carousel
    }
})