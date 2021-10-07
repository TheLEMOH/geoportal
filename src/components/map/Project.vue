<template>
  <div class="project-map mt-2 ms-2">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        :id="`input-project${data._id}`"
        :checked="data.visible"
        @change="UpdateProjectsToDisplay(data)"
      />
      <label
        class="form-check-label link-main-nav"
        :for="`input-project${data._id}`"
        >{{ data.title }}</label
      >
      <button
        class="btn ms-3 p-0 text-white"
        data-bs-toggle="tooltip"
        :title="data._id"
        @click="UpdateCenter(data.center)"
        :disabled="data.center ? false : true"
      >
        <SearchIcon class="link-main-nav" />
      </button>
    </div>
  </div>
</template>

<script>
import SearchIcon from "../icons/SearchIcon.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  props: ["data", "index"],
  components: { SearchIcon },
  computed: { ...mapGetters(["projectsToDisplay"]) },
  methods: {
    ...mapActions(["UpdateProjectsToDisplay", "UpdateCenter"]),
  },
  /*   components: {
    EyeOpen,
  }, */
};
</script>

<style>
</style>