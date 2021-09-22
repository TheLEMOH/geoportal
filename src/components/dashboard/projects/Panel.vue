<template>
  <div class="panel d-flex align-items-center additional">
    <button
      type="button"
      class="btn btn-success rounded-0"
      @click="AddProject"
      :disabled="!projectsLoaded"
    >
      <AddIcon />
    </button>
    <button
      type="button"
      class="btn btn-primary rounded-0"
      @click="SaveProjects"
      :disabled="!projectsLoaded"
    >
      <SaveIcon />
    </button>
    <button
      type="button"
      class="btn btn-danger rounded-0"
      :disabled="!projectsLoaded"
    >
      <CancelIcon />
    </button>
    <div class="spinner-border text-warning ms-2" v-if="!projectsLoaded">
      <span class="visually-hidden">Загрузка...</span>
    </div>
  </div>
</template>

<script>
import SaveIcon from "../../icons/SaveIcon.vue";
import CancelIcon from "../../icons/CancelIcon.vue";
import AddIcon from "../../icons/AddIcon.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return { currentComponent: "" };
  },
  components: { SaveIcon, CancelIcon, AddIcon },
  methods: mapActions(["AddProject", "SaveProjects"]),
  computed: mapGetters(["projectsLoaded"]),
};
</script>

<style>
</style>