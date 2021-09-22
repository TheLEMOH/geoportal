import { InputValidation, Filled } from "./valid/valid"
import { Add, Edit, Delete, Get } from "./serverProcedure//users"

export default {
    state: {
        users: [],
        delUsers: [],
        originalUsers: '[]',
        user: null,
        firstname: null,
        lastname: null,
        newLogin: null,
        newPassword: null,
        role: null,
    },
    actions: {
        async AddUser(ctx) {
            const user = {
                firstname: ctx.state.firstname,
                lastname: ctx.state.lastname,
                password: ctx.state.newPassword,
                login: ctx.state.newLogin,
                role: ctx.state.role,
            }
            const filled = Filled(user);
            if (filled) {
                ctx.commit('addUser', user)

                ctx.commit('updateFirstname', 'Макс');
                ctx.commit('updateLastname', 'Макс');
                ctx.commit('updateNewLogin', 'Max');
                ctx.commit('updateNewPassword', 'max');
                ctx.commit('updateRole', '1');
            }
            else {
                this.dispatch('DisplayMessage', 'Заполните все поля у пользователя!')
            }
        },

        async DeleteUser(ctx, index) {
            ctx.commit('deleteUser', index)
        },

        async FetchUsers(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            Get(user).then((receivedUsers) => {
                ctx.commit('updateUsers', receivedUsers)
            });
        },

        async SaveUsers(ctx) {
            const client = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            if (client.role == 3) {
                const users = ctx.state.users;
                const delUsers = ctx.state.delUsers;
                users.forEach(user => {
                    if (user.action == "add") {
                        Add(user, client.accessToken)
                    }
                    if (user.action == "edit") {
                        Edit(user, client.accessToken)
                    }

                });
                delUsers.forEach(user => {
                    Delete(user, client.accessToken)
                })
            }
        },

        async CancelUsers(ctx) {
            ctx.commit('cancelUsers');
        }
    },
    mutations: {
        addUser(state, user) {
            state.users.push(user)
        },
        deleteUser(state, index) {
            state.users.splice(index, 1)
        },
        updateUsers(state, users) {
            state.originalUsers = JSON.stringify(users)
            state.users = users
        },
        cancelUsers(state) {
            state.users = JSON.parse(state.originalUsers)
        },
        updateFirstname(state, e) {
            state.firstname = InputValidation(e, "cyr");
        },
        updateLastname(state, e) {
            state.lastname = InputValidation(e, "cyr");
        },
        updateNewLogin(state, e) {
            state.newLogin = InputValidation(e, "latin");
        },
        updateNewPassword(state, e) {
            state.newPassword = InputValidation(e, "pass");
        },
        updateRole(state, e) {
            state.role = e.target.value
        },
    },
    getters: {
        users(state) {
            return state.users
        },
        firstname(state) {
            return state.firstname
        },
        lastname(state) {
            return state.lastname
        },
        newPassword(state) {
            return state.newPassword
        },
        newLogin(state) {
            return state.newLogin
        },
        role(state) {
            return state.role
        }
    },
}