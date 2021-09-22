<template>
  <div class="gallery-control w-100">
    <Modal />
    <Panel />
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
import { mapGetters } from "vuex";
import Picture from "./gallery/Picture.vue";
import Panel from "./gallery/Panel.vue";
import Modal from "./gallery/Modal.vue";
export default {
  components: { Picture, Panel, Modal },
  computed: { ...mapGetters(["images"]) },
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