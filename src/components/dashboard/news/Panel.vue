<template>
  <div class="panel d-flex align-items-center additional">
    <button
      type="button"
      class="btn btn-success rounded-0"
      @click="AddNews"
      :disabled="!newsLoaded"
    >
      <AddIcon />
    </button>
    <button
      type="button"
      class="btn btn-primary rounded-0"
      @click="SaveNews"
      :disabled="!newsLoaded"
    >
      <SaveIcon />
    </button>
    <button
      type="button"
      class="btn btn-danger rounded-0"
      @click="Cancel"
      :disabled="!newsLoaded"
    >
      <CancelIcon />
    </button>
    <div class="spinner-border text-warning ms-2" v-if="!newsLoaded">
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
  components: { SaveIcon, CancelIcon, AddIcon },
  methods: mapActions(["AddNews", "SaveNews", "Cancel"]),
  computed: mapGetters(["newsLoaded"]),
};
</script>

<style>
</style>