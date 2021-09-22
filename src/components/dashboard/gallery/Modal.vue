<template>
  <transition name="fade">
    <div
      class="
        modal-add-image
        position-absolute
        top-50
        start-50
        translate-middle
        bg-white
        p-3
        shadow
        rounded
        border border-primary border-2
      "
      v-if="showModalAddImage"
    >
      <div class="mb-3">
        <label for="formFile" class="form-label"
          >Выберите изображение (Можно несколько)</label
        >
        <input
          class="form-control"
          type="file"
          @change="TestImgGallery"
          multiple
        />
      </div>
      <div class="btn-group mb-3">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          @click="CloseModalAddImage"
        >
          Закрыть
        </button>
      </div>
    </div>
  </transition>
</template>


<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: { ...mapGetters(["showModalAddImage"]) },
  methods: { ...mapActions(["CloseModalAddImage", "TestImgGallery"]) },
};
</script>

<style>
.modal-add-image {
  height: auto;
  width: 400px;
  z-index: 10;
}
</style>