<template>
  <div class="news-control w-100">
    <ControlPanel
      :Add="null"
      :Cancel="null"
      :Save="SaveCarousel"
      :loaded="carouselLoaded"
    />
    <div class="row">
      <div class="col-lg-auto"></div>
      <div class="col-lg"><Editing /></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import ControlPanel from "./patterns/Panel.vue";
import Editing from "./carousel/Editing.vue";
export default {
  components: { ControlPanel, Editing },
  methods: mapActions(["SaveCarousel"]),
  computed: mapGetters(["carouselLoaded"]),
};
</script>

<style>
</style>

