<template>
  <div class="panel d-flex additional">
    <button
      type="button"
      class="btn btn-success rounded-0"
      @click="OpenModalAddImage"
    >
      <AddIcon />
    </button>
    <button type="button" class="btn btn-primary rounded-0" @click="SaveImages">
      <SaveIcon />
    </button>
  </div>
</template>

<script>
import SaveIcon from "../../icons/SaveIcon.vue";

import AddIcon from "../../icons/AddIcon.vue";
import { mapActions } from "vuex";
export default {
  components: { SaveIcon, AddIcon },
  methods: mapActions(["OpenModalAddImage", "SaveImages"]),
};
</script>

<style>
</style>