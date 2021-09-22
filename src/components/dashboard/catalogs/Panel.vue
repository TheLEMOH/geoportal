<template>
  <div class="panel d-flex align-items-center additional">
    <button
      type="button"
      class="btn btn-success rounded-0"
      @click="AddCatalog"
      :disabled="!сatalogsLoaded"
    >
      <AddIcon />
    </button>
    <button
      type="button"
      class="btn btn-primary rounded-0"
      @click="SaveCatalogs"
      :disabled="!сatalogsLoaded"
    >
      <SaveIcon />
    </button>
    <button
      type="button"
      class="btn btn-danger rounded-0"
      @click="CancelCatalogs"
      :disabled="!сatalogsLoaded"
    >
      <CancelIcon />
    </button>
    <div class="spinner-border text-warning ms-2" v-if="!сatalogsLoaded">
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
  methods: mapActions(["AddCatalog", "SaveCatalogs", "CancelCatalogs"]),
  computed: mapGetters(["сatalogsLoaded"]),
};
</script>

<style>
</style>