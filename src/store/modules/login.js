import jwt_decode from "jwt-decode";
import { InputValidation } from "./valid/valid"
import { RefreshToken, Login } from "./serverProcedure/jwt"
import { Filled } from "./valid/valid"


const URL_LOGOUT = 'http://enplus.petyaogurkin.keenetic.pro/api/auth/logout/'


export default {
    state: {
        user: null,
        login: null,
        password: null,
        showLoginModal: false
    },
    actions: {

        async Login(ctx) {
            const pair = {
                login: ctx.state.login,
                password: ctx.state.password
            }
            const filled = Filled(pair)
            if (filled) {
                Login(pair).then((res) => {
                    if (res.error != true) {
                        const decoded = jwt_decode(
                            res.accessToken
                        );
                        const user = {
                            id: decoded.id,
                            role: decoded.role,
                            name: pair.login,
                            accessToken: res.accessToken,
                            refreshToken: res.refreshToken
                        }
                        this.dispatch("DisplayMessage", "Успешно!")
                        this.dispatch('UpdateShowLoginModal', false)
                        localStorage.setItem("YENISEI_AUTH", JSON.stringify(user));
                        ctx.commit('updateUser', user)
                    }
                    else {
                        this.dispatch("DisplayMessage", res.text)
                    }
                })
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
            RefreshToken(ctx)
        },

        async RefreshUser(ctx) {
            RefreshToken(ctx);
        },

        UpdateShowLoginModal(ctx, show) {
            ctx.commit('updateShowLoginModal', show)
        }

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
        updateShowLoginModal(state, show) {
            state.showLoginModal = show;
        }
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
        },
        showLoginModal(state) {
            return state.showLoginModal
        }
    },
}
