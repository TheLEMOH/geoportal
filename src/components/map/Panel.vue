<template>
  <div class="btn-group w-100" role="group" aria-label="Basic example">
    <button
      type="button"
      class="btn btn-outline-light rounded-0"
      v-for="(button, index) in sidebarMapButtons"
      :key="index"
      @click="changeCurrentPanel(button.id)"
    >
      {{ button.name }}
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["sidebarMapButtons"]),
  methods: mapMutations(["changeCurrentPanel"]),
};
</script>

<style>
</style>