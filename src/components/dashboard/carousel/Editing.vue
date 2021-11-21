<template>
  <div class="container" v-if="carouselLoaded" >
    <ModalCarousel />
    <div class="gallery-grid-dashboard m-5 shadow">
      <div
        class="first-element-dashboard position-relative"
        @click="OpenModalCarousel(0)"
      >
        <div
          class="position-absolute bottom-0 start-50 translate-middle-x mb-3"
        >
          <h6>Секция 0</h6>
          <label>Каталогов: {{ carousel[0].sections.length }}</label>
        </div>
      </div>
      <div
        class="right-element-dashboard position-relative"
        @click="OpenModalCarousel(1)"
      >
        <div
          class="position-absolute bottom-0 start-50 translate-middle-x mb-3"
        >
          <h6>Секция 1</h6>
          <label>Каталогов: {{ carousel[1].sections.length }}</label>
        </div>
      </div>
      <div
        class="bottom-first-element-dashboard position-relative"
        @click="OpenModalCarousel(2)"
      >
        <div
          class="position-absolute bottom-0 start-50 translate-middle-x mb-3"
        >
          <h6>Секция 2</h6>
          <label>Каталогов: {{ carousel[2].sections.length }}</label>
        </div>
      </div>
      <div
        class="bottom-second-element-dashboard position-relative"
        @click="OpenModalCarousel(3)"
      >
        <div
          class="position-absolute bottom-0 start-50 translate-middle-x mb-3"
        >
          <h6>Секция 3</h6>
          <label>Каталогов: {{ carousel[3].sections.length }}</label>
        </div>
      </div>
      <div
        class="bottom-third-element-dashboard position-relative"
        @click="OpenModalCarousel(4)"
      >
        <div
          class="position-absolute bottom-0 start-50 translate-middle-x mb-3"
        >
          <h6>Секция 4</h6>
          <label>Каталогов: {{ carousel[4].sections.length }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import ModalCarousel from "./ModalCarousel.vue";
export default {
  components: { ModalCarousel },
  computed: { ...mapGetters(["carousel", "carouselLoaded"]) },
  methods: { ...mapActions(["OpenModalCarousel"]) },
};
</script>

<style>
.gallery-grid-dashboard {
  display: grid;
  height: 400px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5px 5px;
  grid-template-areas:
    "first-element-dashboard first-element-dashboard first-element-dashboard right-element-dashboard right-element-dashboard"
    "first-element-dashboard first-element-dashboard first-element-dashboard right-element-dashboard right-element-dashboard"
    "bottom-first-element-dashboard bottom-second-element-dashboard bottom-third-element-dashboard right-element-dashboard right-element-dashboard";
}

.gallery-grid-dashboard > div {
  transition: all 0.2s ease;
  border: 1px solid black;
}

.gallery-grid-dashboard > div:hover {
  background: #5b828e;
  cursor: pointer;
}

.gallery-grid-dashboard img {
  object-fit: cover;
}

.right-element-dashboard {
  grid-area: right-element-dashboard;
}
.first-element-dashboard {
  grid-area: first-element-dashboard;
}
.bottom-first-element-dashboard {
  grid-area: bottom-first-element-dashboard;
}
.bottom-second-element-dashboard {
  grid-area: bottom-second-element-dashboard;
}
.bottom-third-element-dashboard {
  grid-area: bottom-third-element-dashboard;
}
</style>