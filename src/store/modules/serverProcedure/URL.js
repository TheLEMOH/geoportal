const news = 'http://enplus.petyaogurkin.keenetic.pro/api/news/'
const newsAdd = 'http://enplus.petyaogurkin.keenetic.pro/api/news/add/'
const newsEdit = 'http://enplus.petyaogurkin.keenetic.pro/api/news/edit/'
const newsRemove = 'http://enplus.petyaogurkin.keenetic.pro/api/news/remove/'

const gallery = `http://enplus.petyaogurkin.keenetic.pro/api/gallery/`
const galleryAdd = `http://enplus.petyaogurkin.keenetic.pro/api/gallery/add`
const galleryRemove = `http://enplus.petyaogurkin.keenetic.pro/api/gallery/remove/`

const projects = `http://enplus.petyaogurkin.keenetic.pro/api/projects/`
const projectsAdd = 'http://enplus.petyaogurkin.keenetic.pro/api/projects/add'
const projectsEdit = 'http://enplus.petyaogurkin.keenetic.pro/api/projects/edit/'
const projectsRemove = 'http://enplus.petyaogurkin.keenetic.pro/api/projects/remove/'

const sections = `http://enplus.petyaogurkin.keenetic.pro/api/sections/`
const sectionAdd = 'http://enplus.petyaogurkin.keenetic.pro/api/sections/add'
const sectionEdit = 'http://enplus.petyaogurkin.keenetic.pro/api/sections/edit/'
const sectionsRemove = 'http://enplus.petyaogurkin.keenetic.pro/api/sections/remove/'

const articles = `http://enplus.petyaogurkin.keenetic.pro/api/articles/`
const articlesAdd = `http://enplus.petyaogurkin.keenetic.pro/api/articles/add/`
const articlesEdit = `http://enplus.petyaogurkin.keenetic.pro/api/articles/edit/`
const articlesRemove = `http://enplus.petyaogurkin.keenetic.pro/api/articles/remove/`

const users = 'http://enplus.petyaogurkin.keenetic.pro/api/users/'
const usersAdd = 'http://enplus.petyaogurkin.keenetic.pro/api/users/add/'
const usersEdit = 'http://enplus.petyaogurkin.keenetic.pro/api/users/edit/'
const usersRemove = 'http://enplus.petyaogurkin.keenetic.pro/api/users/remove/'

const maps = `http://enplus.petyaogurkin.keenetic.pro/api/maps/`

const about = "http://enplus.petyaogurkin.keenetic.pro/api/about/"
const aboutEdit = "http://enplus.petyaogurkin.keenetic.pro/api/about/edit/"

const URL = {
    news: { get: news, add: newsAdd, edit: newsEdit, remove: newsRemove, },
    gallery: { get: gallery, add: galleryAdd, remove: galleryRemove, },
    projects: { get: projects, add: projectsAdd, edit: projectsEdit, remove: projectsRemove, },
    catalogs: { get: sections, add: sectionAdd, edit: sectionEdit, remove: sectionsRemove, },
    articles: { get: articles, add: articlesAdd, edit: articlesEdit, remove: articlesRemove, },
    maps: { get: maps },
    users: { get: users, add: usersAdd, edit: usersEdit, remove: usersRemove },
    about: { get: about, edit: aboutEdit }
}


export { URL }