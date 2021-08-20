<template>
  <div>
    <draggable
      :list="news[selectedNews].img"
      :group="'shared'"
      :invertSwap="true"
      class="row row-cols-md-3"
      style="min-height: 150px"
    >
      <div
        class="col m-1 position-relative"
        v-for="(element, index) in news[selectedNews].img"
        :key="index"
        style="max-height: 200px; max-width: 200px"
      >
        <button
          class="btn btn-danger position-absolute m-1"
          style="z-index: 5"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <img
          :src="'http://enplus.petyaogurkin.keenetic.pro/api/images/' + element"
          style="width: 100%; height: 100%"
        />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
export default {
  components: { draggable },
  computed: mapGetters(["news", "selectedNews"]),
};
</script>

<style>
</style>