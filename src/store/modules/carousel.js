import { FetchObjects, SaveObjects } from "./serverProcedure/general"
export default {
    state: {
        carousel: [],
        selectedCarouselSection: null,
        carouselLoaded: false,
        openedModalCarousel: false,
    },
    actions: {
        async FetchCarousel(ctx) {
            const settings = {
                loaded: ctx.state.carouselLoaded,
                type: 'carousel',
                funcClearDel: '',
                funcLoaded: 'updateLoadedCarousel',
                funcUpdate: 'updateCarouse',
            }
            FetchObjects(ctx, settings);
        },

        async SaveCarousel(ctx) {
            const carousel = ctx.state.carousel.map(c => {
                const sections = c.sections.map(s => { return s._id })
                return {
                    _id: c._id,
                    action: 'edit',
                    sections: sections
                }
            });

            const settings = {
                type: "carousel",
                forSave: carousel,
                forDelete: [],
                updateSelected: '',
                updateLoaded: 'updateLoadedCarousel',
                fetch: 'FetchCarousel',
                save: 'SaveCarousel',
                nonFilled: 'Заполните все поля у главной страницы!'
            }

            SaveObjects(ctx, settings)

        },

        OpenModalCarousel(ctx, number) {
            ctx.commit('changeModalCarousel', true)
            ctx.commit('updateSelectedCarouselSection', number)
        },

        CloseModalCarousel(ctx) {
            ctx.commit('changeModalCarousel', false)
            ctx.commit('updateSelectedCarouselSection', null)
        },

        AddCatalogInCarousel(ctx, event) {
            const catalogs = ctx.getters.catalogs
            const id = event.target.value;
            const catalog = catalogs.find(c => c._id == id)
            ctx.commit('addCatalogInCarousel', catalog)
        },

        DeleteCatalogFromCarousel(ctx, index) {
            ctx.commit('deleteCatalogFromCarousel', index)
        }
    },
    mutations: {
        deleteCatalogFromCarousel(state, index) {
            state.carousel[state.selectedCarouselSection].sections.splice(index, 1)
        },

        changeModalCarousel(state, opened) {
            state.openedModalCarousel = opened
        },

        updateCarouse(state, carousel) {
            state.carousel = carousel
        },

        updateSelectedCarouselSection(state, number) {
            state.selectedCarouselSection = number
        },

        updateLoadedCarousel(state, loaded) {
            state.carouselLoaded = loaded
        },

        addCatalogInCarousel(state, catalog) {
            state.carousel[state.selectedCarouselSection].sections.push(catalog)
        },

    },
    getters: {
        carousel(state) {
            return state.carousel
        },
        carouselLoaded(state) {
            return state.carouselLoaded
        },
        openedModalCarousel(state) {
            return state.openedModalCarousel
        },
        selectedCarouselSection(state) {
            return state.selectedCarouselSection
        }
    },
}