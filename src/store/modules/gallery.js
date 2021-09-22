import { getBase64 } from "./base64/code"
import { GetStatusText } from "./message/answers"

const URL_GET = `http://enplus.petyaogurkin.keenetic.pro/api/gallery/`
const URL_ADD = `http://enplus.petyaogurkin.keenetic.pro/api/gallery/add`

async function Get() {
    const res = await fetch(URL_GET)
    const receivedGallery = await res.json();
    return receivedGallery;

}

async function Add(image, token) {
    const res = await fetch(URL_ADD, { method: 'POST', body: JSON.stringify({ img: image.img }), headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } })
    return res
}


export default {
    state: {
        showModalAddImage: false,
        images: [],
        imagesLoaded: false,
        imageInBase: null
    },
    actions: {

        async FetchGallery(ctx) {
            if (!ctx.state.imagesLoaded) {
                Get().then((receivedGallery) => {
                    ctx.commit('updateImagesLoaded', true);
                    ctx.commit('updateImages', receivedGallery);
                });
            }
        },

        async TestImgGallery(ctx, e) {
            const files = e.target.files
            files.forEach(file => {
                const promise = getBase64(file);
                promise.then((result) => {
                    this.dispatch("AddImage", result);
                })
            });
        },

        AddImage(ctx, base) {
            const image = {
                img: base,
                description: null,
                action: "add"
            }
            ctx.commit("addImage", image);

        },

        SaveImages(ctx) {
            const user = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
            const images = ctx.state.images
            this.dispatch('DisplayMessage', 'Сохранение...')
            images.forEach(c => {
                if (c.action == "add") {
                    c.action = "loading"
                    Add(c, user.accessToken).then((res) => {
                        const text = GetStatusText(res.status)
                        this.dispatch('DisplayMessage', text)
                        c.action = "done";
                    });
                }
            })
        },

        DeleteImage(ctx, index) {
            ctx.commit('deteleImage', index);
        },

        CloseModalAddImage(ctx) {
            ctx.commit('updateShowModalAddImage', false);
        },

        OpenModalAddImage(ctx) {
            ctx.commit('updateShowModalAddImage', true);
        }
    },
    mutations: {
        deteleImage(state, index) {
            state.images.splice(index, 1);
        },
        addImage(state, image) {
            state.images.push(image);
        },
        updateImages(state, images) {
            state.images = images;
        },
        updateShowModalAddImage(state, show) {
            state.showModalAddImage = show;
        },
        updateImagesLoaded(state, loaded) {
            state.imagesLoaded = loaded;
        }
    },
    getters: {
        showModalAddImage(state) {
            return state.showModalAddImage
        },
        images(state) {
            return state.images
        },
        imagesToSave(state) {
            return state.imagesToSave
        }
    },
}