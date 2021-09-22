<template>
  <div class="gallery">
    <div class="container-fluid">
      <div class="row row-cols-md-3 row-cols-lg-5">
        <div
          class="col-lg m-0 p-1 border rounded"
          v-for="(image, index) in images"
          :key="index"
        >
          <Card :data="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/gallery/Card.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: { Card },
  mounted() {
    this.FetchGallery();
  },
  methods: {
    ...mapActions(["FetchGallery"]),
  },
  computed: { ...mapGetters(["images"]) },
};
</script>

<style>
.gallery-card-image {
  width: 100%;
  height: 300px;
}
.gallery {
  overflow-x: hidden;
  overflow-y: scroll;
}

.gallery .col {
  width: 500px;
}

.gallery img {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
</style>