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
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="list-home-list"
          >
            <Editing />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ControlPanel from "./projects/Panel.vue";
import Editing from "./projects/Editing.vue";
import EditIcon from "../icons/EditIcon.vue";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {
    EditIcon,
    Editing,
    ControlPanel,
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