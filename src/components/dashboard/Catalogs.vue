<template>
  <div class="catalogs-control w-100">
    <ControlPanel />
    <div class="row">
      <div class="col-lg-auto">
        <Table />
      </div>
      <div class="col-lg" v-if="selectedCatalog != null">
        <EditingCatalog />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ControlPanel from "./catalogs/Panel.vue";
import Table from "./catalogs/Table.vue";
import EditingCatalog from "./catalogs/Editing.vue";
export default {
  components: { ControlPanel, Table, EditingCatalog },
  computed: mapGetters(["selectedCatalog"]),
};
</script>

<style>
.catalogs-control {
  color: black !important;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>