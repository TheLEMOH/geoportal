import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/map',
        name: 'Map',
        component: () =>
            import ('../views/Map.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/Dashboard.vue'),
        beforeEnter: (to, from, next) => {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            if (!user) {
                next({ name: 'Home' })
            } else {
                const role = Number(user.role)
                if (role == 2 || role == 3) {
                    next()
                } else {
                    next({ name: 'Home' })
                }
            }
        }
    },
    {
        path: '/news',
        name: 'News',
        component: () =>
            import ('../views/News.vue')
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: () =>
            import ('../views/Gallery.vue')
    },
    {
        path: '/catalogs',
        name: 'Catalogs',
        component: () =>
            import ('../views/Catalogs.vue')
    },
    {
        path: '/catalogs/:id',
        name: 'CatalogsChildren',
        component: () =>
            import ('../views/CatalogsChildren.vue')
    },
    {
        path: '*',
        name: "404",
        component: () =>
            import ('../views/404.vue'),
    },
    {
        path: '/article/:id',
        name: "Article",
        component: () =>
            import ('../views/Article.vue')
    },
    {
        path: '/login',
        name: "Login",
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/test',
        name: "Test",
        component: () =>
            import ('../views/Test.vue')
    }

]

const router = new VueRouter({
    mode: "history",
    routes
})

/* router.beforeEach((to, from, next) => {
    next()
})
 */
export default router