const URL_GET = 'http://enplus.petyaogurkin.keenetic.pro/api/news/'
const URL_ADD = 'http://enplus.petyaogurkin.keenetic.pro/api/news/add'
const URL_EDIT = 'http://enplus.petyaogurkin.keenetic.pro/api/news/edit/'
const URL_DELETE = 'http://enplus.petyaogurkin.keenetic.pro/api/news/remove/'

/* Работа с сервером */
async function Get() {
    const res = await fetch(URL_GET);
    const receivedNews = await res.json();
    return receivedNews;
}

async function Add(news, token) {
    const formData = new FormData();
    formData.append("title", news.title);
    formData.append("body", news.body);
    formData.append("date", news.date);
    for (let i = 0; i < news.img.length; i++) {
        formData.append('img', news.img[i]);
    }
    const res = await fetch(URL_ADD, { method: 'POST', body: formData, headers: { 'Authorization': `Bearer ${token}` } })
    console.log(res);
    return res
}

async function Edit(news, token) {
    const formData = new FormData();
    formData.append("title", news.title);
    formData.append("body", news.body);
    formData.append("date", news.date);
    for (let i = 0; i < news.img.length; i++) {
        formData.append('img', news.img[i]);
    }
    const res = await fetch(URL_EDIT + `${news._id}`, { method: 'PUT', body: formData, headers: { 'Authorization': `Bearer ${token}` } })
    return res
}

async function Delete(news, token) {
    const res = fetch(URL_DELETE + `${news._id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    return res
}

export { Get, Add, Edit, Delete }