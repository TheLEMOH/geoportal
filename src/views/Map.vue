<template>
  <div class="mapBox d-flex h-100 position-relative">
    <Sidebar /><Information /><Map /><Legend />
  </div>
</template>

<script>
import Sidebar from "../components/map/Sidebar.vue";
import Information from "../components/map/Information.vue";
import Map from "../components/map/Map.vue";
import Legend from "../components/map/Legend.vue";
export default { components: { Sidebar, Information, Map, Legend } };
</script>

<style>
</style>