<template>
  <div class="gallery-control w-100">
    <Modal />
    <ControlPanel
      :Add="OpenModalAddImage"
      :Save="SaveGallery"
      :loaded="imagesLoaded"
    />
    <div class="container-fluid">
      <div class="row row-cols-md-3 row-cols-lg-5">
        <div
          class="col-lg p-1 border rounded"
          v-for="(image, index) in images"
          :key="index"
        >
          <Picture :data="image" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Picture from "./gallery/Picture.vue";
import ControlPanel from "./patterns/Panel.vue";
import Modal from "./gallery/Modal.vue";
export default {
  components: { Picture, ControlPanel, Modal },
  computed: { ...mapGetters(["images", "projectsLoaded", "imagesLoaded"]) },
  methods: mapActions(["OpenModalAddImage", "SaveGallery"]),
};
</script>

<style>
.gallery-control {
  height: 82vh;
  overflow-y: scroll;
}

.gallery-control .col {
  width: 500px;
}

.image-control .image-loading {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.image-control img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  z-index: 1;
}
</style>