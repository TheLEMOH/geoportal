import { InputValidation, Filled } from "./valid/valid"
import { SaveObjects, FetchObjects, } from "./serverProcedure/general"
import Vue from "vue"
export default {
    state: {
        users: [],
        delUsers: [],
        originalUsers: '[]',
        user: null,
        firstName: null,
        lastName: null,
        newLogin: null,
        newPassword: null,
        role: null,
        usersLoaded: false
    },
    actions: {
        async AddUser(ctx) {
            const user = {
                firstName: ctx.state.firstName,
                lastName: ctx.state.lastName,
                password: ctx.state.newPassword,
                login: ctx.state.newLogin,
                role: ctx.state.role,
                changePassword: false,
                action: "add"
            }
            const filled = Filled(user);
            if (filled) {
                ctx.commit('addUser', user)
            }
            else {
                this.dispatch('DisplayMessage', 'Заполните все поля у пользователя!')
            }
        },

        async DeleteUser(ctx, index) {
            const id = JSON.parse(localStorage.getItem("YENISEI_AUTH")).id;
            const res = ctx.state.users[index]._id == id
            if (res) {
                this.dispatch('DisplayMessage', "Нельзя удалить себя")
            }
            else {
                ctx.commit('deleteUser', index)
            }
        },

        async FetchUsers(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const setting = {
                loaded: ctx.state.usersLoaded,
                type: 'users',
                token: user.accessToken,
                funcClearDel: 'clearDelUsers',
                funcLoaded: 'updateUsersLoaded',
                funcUpdate: 'updateUsers',
            }
            FetchObjects(ctx, setting);
        },

        async SaveUsers(ctx) {
            const settings = {
                forSave: ctx.state.users,
                forDelete: ctx.state.delUsers,
                updateSelected: null,
                updateLoaded: 'updateUsersLoaded',
                type: 'users',
                fetch: 'FetchUsers',
                save: 'SaveUsers',
                nonFilled: 'Заполните все поля у пользователя!'
            }
            SaveObjects(ctx, settings)
        },

        async CancelUsers(ctx) {
            ctx.commit('cancelUsers');
        },

        UpdateField(ctx, e) {
            ctx.commit('updateField', e)
        }
    },
    mutations: {
        addUser(state, user) {
            state.users.push(user)
        },
        deleteUser(state, index) {
            if (state.users[index].action == "add") {
                state.users.splice(index, 1);
            }
            else {
                state.delUsers.push(state.users[index]);
                state.users.splice(index, 1);
            }
        },
        updateUsers(state, users) {
            users.forEach(u => {
                u.changePassword = false
                u.password = null;
            })

            state.originalUsers = JSON.stringify(users)
            state.users = users
        },
        cancelUsers(state) {
            state.delUsers = [];
            state.users = JSON.parse(state.originalUsers)
        },
        updateFirstname(state, e) {
            state.firstName = InputValidation(e, "cyr");
        },
        updateLastname(state, e) {
            state.lastName = InputValidation(e, "cyr");
        },
        updateNewLogin(state, e) {
            state.newLogin = InputValidation(e, "latin");
        },
        updateNewPassword(state, e) {
            state.newPassword = InputValidation(e, "pass");
        },
        updateField(state, e) {
            if (state.users[e.index].action != "add")
                state.users[e.index].action = "edit"
            if (e.field == 'firstName') {
                state.users[e.index][e.field] = InputValidation(e.event, "cyr");
            }
            if (e.field == 'lastName') {
                state.users[e.index][e.field] = InputValidation(e.event, "cyr");
            }
            if (e.field == 'login') {
                state.users[e.index][e.field] = InputValidation(e.event, "latin");
            }
            if (e.field == 'password') {
                state.users[e.index][e.field] = InputValidation(e.event, "pass");
            }
            if (e.field == 'role') {
                Vue.set(state.users[e.index], e.field, e.event.target.value)
            }
            if (e.field == 'changePassword') {
                Vue.set(state.users[e.index], e.field, e.event.target.checked)
                state.users[e.index].password = null;
            }

        },
        updateRole(state, e) {
            state.role = e.target.value
        },
        updateUsersLoaded(state, loaded) {
            state.usersLoaded = loaded
        },
        clearDelUsers(state) {
            state.delUsers = [];
        },
    },
    getters: {
        users(state) {
            return state.users
        },
        firstname(state) {
            return state.firstName
        },
        lastname(state) {
            return state.lastName
        },
        newPassword(state) {
            return state.newPassword
        },
        newLogin(state) {
            return state.newLogin
        },
        role(state) {
            return state.role
        },
        usersLoaded(state) {
            return state.usersLoaded
        },
    },
}