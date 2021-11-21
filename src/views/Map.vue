<template>
  <div class="mapBox w-100 d-flex"><Sidebar /><Map /></div>
</template>

<script>
import Sidebar from "../components/map/Sidebar.vue";
import Map from "../components/map/Map.vue";
import { mapActions } from "vuex";
export default {
  components: { Sidebar, Map },
  mounted() {
    this.FetchCatalogs();
    this.FetchProjects();
  },
  methods: {
    ...mapActions(["FetchCatalogs", "FetchProjects", "Capabilities"]),
  },
};
</script>
<style>
.mapBox {
  height: 100%;
  overflow: hidden;
}
</style>