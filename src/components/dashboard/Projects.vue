<template>
  <div class="catalogs-control w-100">
    <ControlPanel />
    <div class="row">
      <div class="col-lg-auto">
        <Table />
      </div>
      <div class="col-lg" v-if="selectedProject != null">
        <EditingProjects />
      </div>
    </div>
  </div>
</template>

<script>
import ControlPanel from "./projects/Panel.vue";
import Table from "./projects/Table.vue";
import EditingProjects from "./projects/Editing.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    EditingProjects,
    Table,
    ControlPanel,
  },
  computed: mapGetters(["selectedProject"]),
};
</script>

<style>
.list-group a {
  min-width: 120px;
}
</style>