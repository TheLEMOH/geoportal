<template>
  <div class="mapBox w-100 d-flex text-shadow">
    <Sidebar /><Information /><Map />
  </div>
</template>

<script>
import Sidebar from "../components/map/Sidebar.vue";
import Information from "../components/map/Information.vue";
import Map from "../components/map/Map.vue";
import { mapActions } from "vuex";
export default {
  components: { Sidebar, Information, Map },
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