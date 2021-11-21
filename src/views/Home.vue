<template>
  <div class="home bg-white" style="color: rgb(114, 114, 114)">
    <div class="container-fluid carousel-body">
      <div class="gallery-grid" v-if="carouselLoaded">
        <div
          v-for="(element, index) in elements"
          :key="index"
          class="border additional"
          :class="element"
        >
          <Carousel
            v-if="carousel.length != 0"
            :id="element"
            :data="carousel[index].sections"
          />
        </div>
      </div>
      <Loading v-else />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import Carousel from "../components/home/Carousel.vue";
import Loading from "./Loading.vue";
export default {
  data() {
    return {
      elements: [
        "first-element",
        "right-element",
        "bottom-first-element",
        "bottom-second-element",
        "bottom-third-element",
      ],
    };
  },
  components: { Carousel, Loading },
  computed: {
    ...mapGetters(["carousel", "carouselLoaded"]),
  },
  mounted() {
    this.FetchCarousel();
    this.FetchCatalogs();
  },
  methods: {
    ...mapActions(["FetchCarousel", "FetchCatalogs"]),
  },
};
</script>

<style>
.carousel-body {
  padding-right: 8vw;
  padding-left: 8vw;
}

.gallery-grid img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-grid {
  transition: all 0.1s ease;
  display: grid;
  height: 80vh;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 7px 7px;
  grid-template-areas:
    "first-element first-element first-element right-element right-element"
    "first-element first-element first-element right-element right-element"
    "bottom-first-element bottom-second-element bottom-third-element right-element right-element";
}
.first-element {
  grid-area: first-element;
}
.right-element {
  grid-area: right-element;
}
.bottom-first-element {
  grid-area: bottom-first-element;
}
.bottom-second-element {
  grid-area: bottom-second-element;
}
.bottom-third-element {
  grid-area: bottom-third-element;
}

</style>