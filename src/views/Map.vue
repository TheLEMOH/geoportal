<template>
  <div class="mapBox d-flex position-relative w-100 text-shadow">
    <Sidebar /><Information /><Map />
  </div>
</template>

<script>
import Sidebar from "../components/map/Sidebar.vue";
import Information from "../components/map/Information.vue";
import Map from "../components/map/Map.vue";
export default { components: { Sidebar, Information, Map } };
</script>
<style>
.mapBox {
  flex: 1 0 auto;
}
</style>