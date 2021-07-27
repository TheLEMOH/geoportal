
const URL_GET = 'http://enplus.petyaogurkin.keenetic.pro/api/users/'
/* const URL_ADD = 'http://enplus.petyaogurkin.keenetic.pro/api/users/add/'
const URL_EDIT = 'http://enplus.petyaogurkin.keenetic.pro/api/users/edit/'
const URL_DELETE = 'http://enplus.petyaogurkin.keenetic.pro/api/users/remove/' */


export default {
    state: {
        error: "",
        users: [],
        originalUsers: '[]',
        user: null
    },
    actions: {
        async AddUser(ctx, user) {
            if (!user.firstName || !user.lastName || !user.password || !user.role) {
                ctx.commit('updateErrors', "Заполните все поля у пользователя")
                setTimeout(() => { ctx.commit('updateErrors', "") }, 3000);
            }
            else {
                ctx.commit('addUser', user)
            }
        },

        async DeleteUser(ctx, index) {
            ctx.commit('deleteUser', index)
        },

        async FetchUsers(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const res = await fetch(URL_GET, { headers: { 'Authorization': `Bearer ${user.accessToken}` } })
            const receivedUsers = await res.json()
            ctx.commit('updateUsers', receivedUsers)
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
        updateErrors(state, error) {
            state.error = error
        },
        cancelUsers(state) {
            state.users = JSON.parse(state.originalUsers)
        }
    },
    getters: {
        users(state) {
            return state.users
        },
        error(state) {
            return state.error
        },
    },
}

/* AddUser() {
    if (
      !this.name ||
      !this.surname ||
      !this.login ||
      !this.password ||
      !this.role
    ) {
      this.errors = "Заполните все поля формы";
      setTimeout(() => {
        this.errors = "";
      }, 3000);
    }
  }, */