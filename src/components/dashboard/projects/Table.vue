<template>
  <div class="table text-shadow">
    <table class="table table-striped border">
      <thead>
        <tr class="text-center">
          <th>Название проекта</th>
          <th><EditIcon /></th>
          <th>&times;</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class=""
          v-for="(project, index) in projects"
          :class="[selectedProject == index ? 'selected' : '']"
          :key="index"
        >
          <td>
            <label class="td-label" v-if="project.action == 'loading'"
              >Сохранение...</label
            >
            <label class="td-label" v-else>{{ project.title }}</label>
          </td>
          <td class="text-center">
            <button
              class="btn btn-warning"
              style="z-index: 1"
              @click="SelectProject(index)"
              :disabled="project.action == 'loading' ? true : false"
            >
              <EditIcon />
            </button>
          </td>
          <td class="text-center">
            <button
              class="btn btn-danger"
              style="z-index: 1"
              @click="DeleteProject(index)"
              :disabled="project.action == 'loading' ? true : false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EditIcon from "../../icons/EditIcon.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: { EditIcon },
  computed: mapGetters(["projects", "selectedProject"]),
  methods: mapActions(["SelectProject", "DeleteProject"]),
};
</script>

<style>
.table-catalog {
  max-height: 82vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>