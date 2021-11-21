<template>
  <div
    class="image-control position-relative rounded"
    style="width: 100%; height: 100%"
  >
    <button
      class="btn btn-danger position-absolute top-0 end-0"
      @click="DeleteImage(index)"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <div
      class="image-loading position-absolute text-white p-2"
      v-if="data.action == 'loading'"
    >
      <h2>Сохранение...</h2>
    </div>
    <img
      v-if="
        data.action == 'add' ||
        data.action == 'done' ||
        data.action == 'loading'
      "
      :src="data.img"
      class="rounded"
    />
    <img
      v-else
      :src="`/api/images/gallery/${data}`"
      class="rounded"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["data", "index"],
  methods: { ...mapActions(["DeleteImage"]) },
};
</script>

<style>
</style>