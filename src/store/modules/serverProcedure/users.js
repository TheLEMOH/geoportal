const URL_GET = 'http://enplus.petyaogurkin.keenetic.pro/api/users/'
const URL_ADD = 'http://enplus.petyaogurkin.keenetic.pro/api/users/add/'
const URL_EDIT = 'http://enplus.petyaogurkin.keenetic.pro/api/users/edit/'
const URL_DELETE = 'http://enplus.petyaogurkin.keenetic.pro/api/users/remove/'


async function Get(user) {
    const res = await fetch(URL_GET, { headers: { 'Authorization': `Bearer ${user.accessToken}` } })
    const receivedUsers = await res.json()
    receivedUsers.forEach(user => {
        user.password = null;
        user.changePassword = false;
    });
    return receivedUsers;
}

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


export { Get, Add, Edit, Delete }