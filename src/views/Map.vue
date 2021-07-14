<template>
  <div class="mapBox"><Sidebar /><Map /></div>
</template>

<script>
import Sidebar from "../components/map/Sidebar.vue";
import Map from "../components/map/Map.vue";
export default { components: { Sidebar, Map } };
</script>

<style>
.mapBox {
  display: flex;
  height: 100%;
}
</style>