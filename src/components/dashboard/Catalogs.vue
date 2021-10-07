<template>
  <div class="catalogs-control w-100">
    <ControlPanel
      :Add="AddCatalog"
      :Save="SaveCatalogs"
      :Cancel="CancelCatalogs"
      :loaded="сatalogsLoaded"
    />
    <div class="row">
      <div class="col-lg-auto">
        <Table
          :tableHead="'Название каталога'"
          :objects="catalogs"
          :selected="selectedCatalog"
          :SelectFunc="SelectCatalog"
          :DeleteFunc="DeleteCatalog"
        />
      </div>
      <div class="col-lg" v-if="selectedCatalog != null">
        <EditingCatalog />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Table from "./patterns/Table.vue";
import ControlPanel from "./patterns/Panel.vue";
import EditingCatalog from "./catalogs/Editing.vue";
export default {
  components: { ControlPanel, Table, EditingCatalog },
  computed: mapGetters(["catalogs", "selectedCatalog", "сatalogsLoaded"]),
  methods: mapActions([
    "AddCatalog",
    "SaveCatalogs",
    "CancelCatalogs",
    "SelectCatalog",
    "DeleteCatalog",
  ]),
};
</script>

<style>
.catalogs-control {
  color: black !important;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>