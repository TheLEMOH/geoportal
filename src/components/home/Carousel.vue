<template>
  <div :id="id" class="carousel slide h-100" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        :class="[index == 0 ? 'active' : '']"
        type="button"
        v-for="(catalog, index) in data"
        :key="index"
        :data-bs-target="`#${id}`"
        :data-bs-slide-to="index"
        :aria-label="`Slide ${index}`"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="[index == 0 ? 'active' : '']"
        v-for="(catalog, index) in data"
        :key="index"
      >
        <router-link
          :to="{ name: 'Map' }"
          @click.native="UpdateOpenedCatalogs(catalog._id)"
        >
          <img :src="`${imgURLs.catalogs}${catalog.img}`" />
          <div class="carousel-caption d-none d-md-block">
            <h3 class="text-shadow">{{ catalog.title }}</h3>
          </div></router-link
        >
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="`#${id}`"
      data-bs-slide="prev"
      v-if="data.length > 1"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="`#${id}`"
      data-bs-slide="next"
      v-if="data.length > 1"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { imgURLs } from "../../store/modules/serverProcedure/URL";
export default {
  data() {
    return {
      imgURLs: imgURLs,
    };
  },
  props: ["id", "data"],
  methods: { ...mapActions(["UpdateOpenedCatalogs"]) },
};
</script>

<style>
.carousel-inner {
  height: 100%;
}

.text-shadow {
  text-shadow: 2px 2px 1px black;
}

.carousel img {
  object-fit: cover;
  width: 100%;
}

.carousel-item {
  height: 100%;
}
</style>