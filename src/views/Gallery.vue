<template>
  <div class="gallery h-100">
    <CoolLightBox :items="imagesURL" :index="index" @close="index = null">
    </CoolLightBox>
    <div class="container-fluid" v-if="imagesLoaded">
      <div class="row row-cols-md-3 row-cols-lg-5">
        <div
          class="col-lg m-0 p-0 border"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <Card :data="image" />
        </div>
      </div>
    </div>

    <div class="container mt-2" v-else>
      <Loading />
    </div>

    <div class="container mt-2" v-if="images.length == 0 && imagesLoaded">
      <h1>Фотографий нет</h1>
    </div>
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Card from "../components/gallery/Card.vue";
import Loading from "./Loading.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return { index: null };
  },
  components: { Card, CoolLightBox, Loading },
  mounted() {
    this.FetchGallery();
  },
  methods: {
    ...mapActions(["FetchGallery"]),
  },
  computed: {
    ...mapGetters(["images", "imagesLoaded"]),
    imagesURL() {
      const images = this.images.map((i) => {
        return `http://enplus.petyaogurkin.keenetic.pro/api/images/gallery/${i}`;
      });
      return images;
    },
  },
};
</script>

<style>
.gallery-card-image {
  width: 100%;
  height: 300px;
}
.gallery {
  height: 86vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

.gallery .col {
  width: 500px;
}

.gallery-card-image img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  transition: all 0.2s ease;
}

.gallery-card-image img:hover {
  cursor: pointer;
  transform: scale(1.01);
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
}

.gallery button {
  width: 80px !important;
  height: 80px !important;
}
</style>