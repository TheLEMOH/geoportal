<template>
  <div class="mapBox"><Sidebar /><Information /><Map /></div>
</template>

<script>
import Sidebar from "../components/map/Sidebar.vue";
import Information from "../components/map/Information.vue";
import Map from "../components/map/Map.vue";
export default { components: { Sidebar, Information, Map } };
</script>

<style>
.mapBox {
  display: flex;
  height: 100%;
}
</style>