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
</style>