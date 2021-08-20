import jwt_decode from "jwt-decode";
import { InputValidation } from "./valid/valid"

const URL_LOGIN = 'http://enplus.petyaogurkin.keenetic.pro/api/auth/login/'
const URL_LOGOUT = 'http://enplus.petyaogurkin.keenetic.pro/api/auth/logout/'
const URL_REFRESH = 'http://enplus.petyaogurkin.keenetic.pro/api/auth/refresh/'

export default {
    state: {
        users: [],
        originalUsers: '[]',
        user: null,
        login: null,
        password: null,
    },
    actions: {
        async Login(ctx) {
            const login = ctx.state.login
            const password = ctx.state.password

            if (login && password) {
                const body = { login, password }
                const res = await fetch(URL_LOGIN, {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify(body)
                })

                if (res.status == 403) {
                    alert('Неверный логин или пароль')
                }

                if (res.status == 200) {
                    const tokens = await res.json()
                    const decoded = jwt_decode(
                        tokens.accessToken
                    );
                    const user = {
                        id: decoded.id,
                        role: decoded.role,
                        name: login,
                        accessToken: tokens.accessToken,
                        refreshToken: tokens.refreshToken
                    }

                    localStorage.setItem("YENISEI_AUTH", JSON.stringify(user));
                    ctx.commit('updateUser', user)
                }
            }
        },

        async Logout() {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            fetch(URL_LOGOUT, {
                method: 'POST', headers: {
                    'Authorization': `Bearer ${user.accessToken}`
                }, body: JSON.stringify(user.refreshToken)
            })
            localStorage.removeItem("YENISEI_AUTH")
        },

        async CheckUser(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            ctx.commit('updateUser', user)
        },

        async RefreshUser(ctx) {
            const tokens = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const res = await fetch(URL_REFRESH, { body: tokens.refreshToken })
            const receivedTokens = await res.json()
            const decoded = jwt_decode(
                receivedTokens.accessToken
            );
            const user = {
                id: decoded.id,
                role: decoded.role,
                accessToken: receivedTokens.accessToken,
                refreshToken: receivedTokens.refreshToken
            }
            localStorage.setItem("YENISEI_AUTH", JSON.stringify(user));
            ctx.commit('updateUser', user)
        },
    },
    mutations: {
        updateLogin(state, e) {
            state.login = InputValidation(e, "latin")
        },
        updatePassword(state, e) {
            state.password = InputValidation(e, "pass")
        },
        updateUser(state, user) {
            state.user = user
        },
    },
    getters: {
        user(state) {
            return state.user
        },
        login(state) {
            return state.login
        },
        password(state) {
            return state.password
        }
    },
}
