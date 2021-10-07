import { getBase64 } from "./base64/code"
import { SaveObjects, FetchObjects } from "./serverProcedure/general"
export default {
    state: {
        showModalAddImage: false,
        images: [],
        delImages: [],
        imagesLoaded: false,
        imageInBase: null
    },
    actions: {
        async FetchGallery(ctx) {
            const settings = {
                loaded: ctx.state.imagesLoaded,
                type: 'gallery',
                funcClearDel: 'clearDelImages',
                funcLoaded: 'updateImagesLoaded',
                funcUpdate: 'updateImages',
            }
            FetchObjects(ctx, settings);
        },

        SaveGallery(ctx) {
            const settings = {
                forSave: ctx.state.images,
                forDelete: ctx.state.delImages,
                updateSelected: null,
                updateLoaded: 'updateImagesLoaded',
                type: 'gallery',
                fetch: 'FetchGallery',
                save: 'SaveGallery',
                nonFilled: 'Выберите картинки'
            };
            SaveObjects(ctx, settings);
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
                action: "add"
            }
            ctx.commit("addImage", image);
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
        clearDelImages(state) {
            state.delImages = []
        },
        deteleImage(state, index) {
            if (state.images[index].action == "add") {
                state.images.splice(index, 1);
            }
            else {
                state.delImages.push({ _id: state.images[index] });
                state.images.splice(index, 1);
            }
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
        },
        imagesLoaded(state) {
            return state.imagesLoaded
        }
    },
}