<template>
  <div class="legend-map">
    <ul class="list-group" v-if="legend.length != 0">
      <li
        class="list-group-item bg-transparent"
        v-for="(l, index) in legend"
        :key="index"
      >
        <div class="ms-2 me-auto">
          <div class="fs-5 text-white">{{ l.title }}</div>
          <img :src="l.legend" />
        </div>
      </li>
    </ul>
    <div class="fs-5 text-white m-2" v-else>Выберите проект в каталоге</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["projectsToDisplay"]),
    legend() {
      return this.projectsToDisplay.filter((p) => {
        if (p.visible == true) {
          return p;
        }
      });
    },
  },
};
</script>

<style>
</style>