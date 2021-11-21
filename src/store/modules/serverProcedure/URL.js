const baseURL = 'https://yenisey.sfu-kras.ru/'

const news = baseURL + '/api/news/'
const newsAdd = baseURL + '/api/news/add/'
const newsEdit = baseURL + '/api/news/edit/'
const newsRemove = baseURL + '/api/news/remove/'

const gallery = baseURL + `/api/gallery/`
const galleryAdd = baseURL + `/api/gallery/add`
const galleryRemove = baseURL + `/api/gallery/remove/`

const projects = baseURL + `/api/projects/`
const projectsAdd = baseURL + '/api/projects/add'
const projectsEdit = baseURL + '/api/projects/edit/'
const projectsRemove = baseURL + '/api/projects/remove/'

const sections = baseURL + `/api/sections/`
const sectionAdd = baseURL + '/api/sections/add'
const sectionEdit = baseURL + '/api/sections/edit/'
const sectionsRemove = baseURL + '/api/sections/remove/'

const articles = baseURL + `/api/articles/`
const articlesAdd = baseURL + `/api/articles/add/`
const articlesEdit = baseURL + `/api/articles/edit/`
const articlesRemove = baseURL + `/api/articles/remove/`

const users = baseURL + '/api/users/'
const usersAdd = baseURL + '/api/users/add/'
const usersEdit = baseURL + '/api/users/edit/'
const usersRemove = baseURL + '/api/users/remove/'

const maps = baseURL + `/api/maps/`

const about = baseURL + "/api/about/"
const aboutEdit = baseURL + "/api/about/edit/"

const carousel = baseURL + "/api/carousel/"
const carouselEdit = baseURL + "/api/carousel/edit/"

const imgURLs = {
    news: baseURL + `/api/images/news/`,
    gallery: baseURL + `/api/images/gallery/`,
    catalogs: baseURL + `/api/images/sections/`,
    articles: baseURL + `/api/images/articles/`,
    maps: baseURL + `/api/images/maps/`,
}

const URL = {
    news: { get: news, add: newsAdd, edit: newsEdit, remove: newsRemove, },
    gallery: { get: gallery, add: galleryAdd, remove: galleryRemove, },
    projects: { get: projects, add: projectsAdd, edit: projectsEdit, remove: projectsRemove, },
    catalogs: { get: sections, add: sectionAdd, edit: sectionEdit, remove: sectionsRemove, },
    articles: { get: articles, add: articlesAdd, edit: articlesEdit, remove: articlesRemove, },
    maps: { get: maps },
    users: { get: users, add: usersAdd, edit: usersEdit, remove: usersRemove },
    about: { get: about, edit: aboutEdit },
    carousel: { get: carousel, edit: carouselEdit }
}


export { URL, imgURLs }