const URL_GET_MAPS = `http://enplus.petyaogurkin.keenetic.pro/api/maps/`;
const URL_GET = `http://enplus.petyaogurkin.keenetic.pro/api/projects/`
const URL_ADD = 'http://enplus.petyaogurkin.keenetic.pro/api/projects/add'
const URL_EDIT = 'http://enplus.petyaogurkin.keenetic.pro/api/projects/edit/'
const URL_DELETE = 'http://enplus.petyaogurkin.keenetic.pro/api/projects/remove/'

async function GetMaps(token) {
    const res = await fetch(URL_GET_MAPS, { headers: { 'Authorization': `Bearer ${token}` } })
    const receivedMaps = await res.json();
    return receivedMaps;
}

async function Get() {
    const res = await fetch(URL_GET)
    const receivedCatalogs = await res.json();
    return receivedCatalogs;
}

async function Add(project, token) {
    const send = await fetch(URL_ADD, { method: 'POST', body: JSON.stringify(project), headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    console.log(send)
}

async function Edit(project, token) {
    const send = await fetch(URL_EDIT + `${project._id}`, { method: 'Edit', body: JSON.stringify(project), headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    console.log(send)
}

async function Delete(project, token) {
    const send = await fetch(URL_DELETE + `${project._id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    console.log(send)
}

export { GetMaps, Get, Add, Edit, Delete }
