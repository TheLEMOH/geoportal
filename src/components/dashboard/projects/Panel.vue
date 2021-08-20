<template>
  <div class="additional p-1 mb-2">
    <button type="button" class="btn btn-success me-2">
      <AddIcon />
    </button>
    <button type="button" class="btn btn-primary me-2">
      <SaveIcon />
    </button>
    <button type="button" class="btn btn-danger me-2">
      <CancelIcon />
    </button>
  </div>
</template>

<script>
import SaveIcon from "../../icons/SaveIcon.vue";
import CancelIcon from "../../icons/CancelIcon.vue";
import AddIcon from "../../icons/AddIcon.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return { currentComponent: "" };
  },
  components: { SaveIcon, CancelIcon, AddIcon },
  methods: mapActions([]),
};
</script>

<style>
</style>