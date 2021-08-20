<template>
  <div class="sidebar additional text-white">
    <Panel />
    <component :is="currentPanel"></component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Panel from "./Panel";
import Catalogs from "./Catalogs";
import Legend from "./Legend";
import BaseMap from "./BaseMap";
export default {
  components: { Panel, Catalogs, Legend, BaseMap },
  computed: mapGetters(["currentPanel"]),
  methods: {},
};
</script>

<style>
.sidebar {
  width: 300px;
  flex-shrink: 0;
  z-index: 1;
}
</style>