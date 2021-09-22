<template>
  <div class="project-map mt-2 ms-2">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        :id="`input-project${data._id}`"
        @change="UpdateProjectsToDisplay(data)"
      />
      <label class="form-check-label" :for="`input-project${data._id}`">{{
        data.title
      }}</label>
    </div>
  </div>
</template>

<script>
/* import EyeOpen from "../icons/Eye.vue"; */
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  props: ["data"],
  computed: { ...mapGetters(["projectsToDisplay"]) },
  methods: {
    ...mapActions(["UpdateProjectsToDisplay"]),
 
  },
  /*   components: {
    EyeOpen,
  }, */
};
</script>

<style>
</style>