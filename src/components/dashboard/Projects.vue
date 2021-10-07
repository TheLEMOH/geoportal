<template>
  <div class="catalogs-control w-100">
    <ControlPanel
      :Add="AddProject"
      :Save="SaveProjects"
      :Cancel="CancelProjects"
      :loaded="projectsLoaded"
    />
    <div class="row">
      <div class="col-lg-auto">
        <Table
          :tableHead="'Название проекта'"
          :objects="projects"
          :selected="selectedProject"
          :SelectFunc="SelectProject"
          :DeleteFunc="DeleteProject"
        />
      </div>
      <div class="col-lg" v-if="selectedProject != null">
        <EditingProjects :key="selectedProject" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import ControlPanel from "./patterns/Panel.vue";
import Table from "./patterns/Table.vue";
import EditingProjects from "./projects/Editing.vue";

export default {
  components: {
    EditingProjects,
    Table,
    ControlPanel,
  },
  computed: mapGetters(["projects", "selectedProject", "projectsLoaded"]),
  methods: mapActions([
    "AddProject",
    "SaveProjects",
    "CancelProjects",
    "SelectProject",
    "DeleteProject",
  ]),
};
</script>

<style>
.list-group a {
  min-width: 120px;
}
</style>