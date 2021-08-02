<template>
  <div class="projects-control w-100">
    <ControlPanel />
    <div class="row m-1">
      <div class="col-md-2" style="min-width: 245px">
        <table class="table border text-shadow text-white">
          <thead>
            <tr class="text-center">
              <th>Название</th>
              <th><EditIcon /></th>
              <th>&times;</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr class="" v-for="(project, index) in projects" :key="index">
              <td>{{ project.name }}</td>
              <td>
                <button class="btn btn-warning" style="z-index: 5">
                  <EditIcon />
                </button>
              </td>
              <td>
                <button class="btn btn-danger" style="z-index: 5">
                  <span aria-hidden="true">&times;</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-auto">
        <table class="table border text-white">
          <thead>
            <tr class="text-center text-shadow">
              <th>Пункт меню</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr>
              <div class="list-group" id="list-tab" role="tablist">
                <a
                  class="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-bs-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="list-home"
                  >Описание</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-bs-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="list-profile"
                  >Объекты</a
                >
              </div>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-auto">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="list-home-list"
          >
            <Description />
          </div>
          <div
            class="tab-pane fade"
            id="list-profile"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            <TableObjects />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ControlPanel from "./Projects/ControlPanel.vue";
import Description from "./Projects/Description.vue";
/* import EditingObjects from "./Projects/EditingObjects.vue"; */
import TableObjects from "./Projects/TableObjects.vue";
import EditIcon from "./EditIcon.vue";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {
    EditIcon,
    Description,
    ControlPanel,
    TableObjects,
  },
  computed: mapGetters(["projects"]),
  methods: mapActions(["AddProject"]),
};
</script>

<style>
.list-group a {
  min-width: 120px;
}
</style>