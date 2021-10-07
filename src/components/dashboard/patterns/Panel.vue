<template>
  <div class="panel d-flex align-items-center additional">
    <button
      type="button"
      class="btn btn-success rounded-0"
      @click="Add"
      v-if="Add"
      :disabled="!loaded"
    >
      <AddIcon />
    </button>
    <button
      type="button"
      class="btn btn-primary rounded-0"
      @click="Save"
      v-if="Save"
      :disabled="!loaded"
    >
      <SaveIcon />
    </button>
    <button
      type="button"
      class="btn btn-danger rounded-0"
      @click="Cancel"
      v-if="Cancel"
      :disabled="!loaded"
    >
      <CancelIcon />
    </button>
    <div class="spinner-border text-warning ms-2" v-if="!loaded">
      <span class="visually-hidden">Загрузка...</span>
    </div>
  </div>
</template>

<script>
import SaveIcon from "../../icons/SaveIcon.vue";
import CancelIcon from "../../icons/CancelIcon.vue";
import AddIcon from "../../icons/AddIcon.vue";
export default {
  props: ["Add", "Save", "Cancel", "loaded"],
  components: { SaveIcon, CancelIcon, AddIcon },
};
</script>

<style>
</style>