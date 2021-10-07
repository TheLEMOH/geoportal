import { FilledArray } from '../valid/valid';
import { RefreshToken } from "./jwt"
import { URL } from "./URL"

async function Get(type, token) {
    if (token) {
        const res = await fetch(URL[type].get, { headers: { 'Authorization': `Bearer ${token}` } });
        return res;
    }
    else {
        const res = await fetch(URL[type].get);
        return res;
    }
}

async function GetById(id, type) {
    const res = await fetch(URL[type].get + `${id}`)
    return res;
}

async function Add(object, type, token) {
    const res = fetch(URL[type].add, { method: 'POST', body: JSON.stringify(object), headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    return res
}

async function Edit(object, type, token) {
    const res = fetch(URL[type].edit + `${object._id}`, { method: 'PUT', body: JSON.stringify(object), headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    return res
}

async function Delete(object, type, token) {
    const res = fetch(URL[type].remove + `${object._id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    return res
}

const query = {
    add: Add,
    edit: Edit,
    delete: Delete
}

async function FetchObjects(ctx, settings) {
    if (!settings.loaded)
        Get(settings.type, settings.token).then((res => {
            if (res.ok) {
                res.json().then(object => {
                    if (settings.funcClearDel) {
                        ctx.commit(settings.funcClearDel);
                    }
                    ctx.commit(settings.funcLoaded, true);
                    ctx.commit(settings.funcUpdate, object);
                })
            } else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error
            }

        })).catch((text) => {
            ctx.dispatch("DisplayMessage", `${settings.type} ${text}`);
        })
}

function FetchObjectById(ctx, settings) {
    GetById(settings.id, settings.type).then((res => {
        if (res.ok) {
            res.json().then(object => {
                if (settings.funcLoaded) {
                    ctx.commit(settings.funcLoaded, true);
                }
                ctx.commit(settings.funcUpdate, object);
            });
        }
        else {
            let error = new Error(res.statusText);
            error.response = res;
            throw error
        }
    })).catch((text) => {
        ctx.dispatch("DisplayMessage", `${settings.type} ${text}`);
    })
}

/* Сохранение */
function Query(object, func, type, token) {
    return new Promise((resolve, reject) => {
        func(object, type, token).then(res => {
            if (res.ok) {
                if (typeof object == "object")
                    object.action = "done";
                resolve(res)
            }
            else {
                reject(res)
            }
        })
    })
}

function Save(objects, delObjects, type, token) {
    const promises = [];
    objects.forEach(object => {
        if (object.action) {
            promises.push(Query(object, query[object.action], type, token)
            );
            object.action = "loading"
        }
    })
    delObjects.forEach(d => {
        promises.push(Query(d, query['delete'], type, token))
    })
    return promises;
}

function SaveObjects(ctx, settings) {
    const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
    const objects = settings.forSave
    const delObjects = settings.forDelete
    const isUser = settings.type == 'users' ? true : false
    const filled = FilledArray(objects, isUser);
    if (filled) {
        if (settings.updateSelected)
            ctx.commit(settings.updateSelected, null);
        if (settings.updateLoaded)
            ctx.commit(settings.updateLoaded, false);
        ctx.dispatch('DisplayMessage', "Сохранение...");

        const promises = Save(objects, delObjects, settings.type, user.accessToken)
        Promise.all(promises).then(() => {
            ctx.dispatch('DisplayMessage', "Готово!");
            setTimeout(() => ctx.dispatch(settings.fetch), 1000);
        }, status => {
            if (status == "401") {
                console.log("Истекло действие ключа")
                RefreshToken().then(() => {
                    ctx.dispatch(settings.save);
                })
            }
            else {
                ctx.dispatch('DisplayMessage', status.statusText);
                ctx.dispatch(settings.fetch)
            }
        })
    }
    else {
        ctx.dispatch('DisplayMessage', settings.nonFilled);
    }
}

export { SaveObjects, FetchObjects, FetchObjectById }