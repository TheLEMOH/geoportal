const URL_GET = `http://enplus.petyaogurkin.keenetic.pro/api/sections/`
const URL_ADD = 'http://enplus.petyaogurkin.keenetic.pro/api/sections/add'
const URL_EDIT = 'http://enplus.petyaogurkin.keenetic.pro/api/sections/edit/'
const URL_DELETE = 'http://enplus.petyaogurkin.keenetic.pro/api/sections/remove/'


async function Get() {
    const res = await fetch(URL_GET)
    const receivedCatalogs = await res.json();
    return receivedCatalogs;
}

async function Add(catalog, token) {
    const res = await fetch(URL_ADD, { method: 'POST', body: JSON.stringify(catalog), headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    return res
}

async function Edit(catalog, token) {
    const res = await fetch(URL_EDIT + `${catalog._id}`, { method: 'PUT', body: JSON.stringify(catalog), headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    return res
}

async function Delete(catalog, token) {
    const res = await fetch(URL_DELETE + `${catalog._id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    return res
}

export { Get, Add, Edit, Delete }