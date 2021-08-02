const URL_GET = 'http://enplus.petyaogurkin.keenetic.pro/api/users/'
const URL_ADD = 'http://enplus.petyaogurkin.keenetic.pro/api/users/add/'
const URL_EDIT = 'http://enplus.petyaogurkin.keenetic.pro/api/users/edit/'
const URL_DELETE = 'http://enplus.petyaogurkin.keenetic.pro/api/users/remove/'


async function Add(user, token) {
    const body = JSON.stringify(user);
    const res = await fetch(URL_ADD, { body: body, headers: { 'Authorization': `Bearer ${token}` } })
    console.log(res);
}


async function Edit(user, token) {
    const res = await fetch(URL_EDIT + `${user._id}`, { headers: { 'Authorization': `Bearer ${token}` } })
    console.log(res)
}

async function Delete(user, token) {
    const res = await fetch(URL_DELETE + `${user._id}`, { headers: { 'Authorization': `Bearer ${token}` } })
    console.log(res)
}

export default {
    state: {
        error: "",
        users: [],
        delUsers: [],
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
            if (user.role == 3) {
                const res = await fetch(URL_GET, { headers: { 'Authorization': `Bearer ${user.accessToken}` } })
                const receivedUsers = await res.json()
                receivedUsers.forEach(user => {
                    user.password = null;
                    user.changePassword = false;
                });
                ctx.commit('updateUsers', receivedUsers)
            }
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