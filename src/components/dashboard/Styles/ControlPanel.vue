<template>
  <div class="d-flex additional p-1 mb-2">
    <button type="button" class="btn btn-success me-2" @click="AddStyle">
      <AddIcon />
    </button>
    <button type="button" class="btn btn-primary me-2" @click="SaveStyles">
      <SaveIcon />
    </button>
    <button type="button" class="btn btn-danger me-2" @click="CancelStyles">
      <CancelIcon />
    </button>
  </div>
</template>

<script>
import SaveIcon from "../SaveIcon.vue";
import CancelIcon from "../CancelIcon.vue";
import AddIcon from "../AddIcon.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return { currentComponent: "" };
  },
  components: { SaveIcon, CancelIcon, AddIcon },
  methods: mapActions(["AddStyle", "CancelStyles", "SaveStyles"]),
};
</script>

<style>
</style>