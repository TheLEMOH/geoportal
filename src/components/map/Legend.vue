<template>
  <div class="legend-map">
    <img v-for="(c, index) in capabilities" :key="index" :src="c.legend" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["capabilities"]),
  },
};
</script>

<style>
</style>