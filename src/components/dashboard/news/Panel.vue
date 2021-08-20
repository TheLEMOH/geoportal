<template>
  <div class="panel d-flex additional">
    <button type="button" class="btn btn-success rounded-0" @click="AddNews">
      <AddIcon />
    </button>
    <button type="button" class="btn btn-primary rounded-0" @click="SaveNews">
      <SaveIcon />
    </button>
    <button type="button" class="btn btn-danger rounded-0" @click="Cancel">
      <CancelIcon />
    </button>

    <div class="message text-warning ms-2">
      <h2>{{ message }}</h2>
    </div>
  </div>
</template>

<script>
import SaveIcon from "../../icons/SaveIcon.vue";
import CancelIcon from "../../icons/CancelIcon.vue";
import AddIcon from "../../icons/AddIcon.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: { SaveIcon, CancelIcon, AddIcon },
  computed: mapGetters(["message"]),
  methods: mapActions(["AddNews", "SaveNews", "Cancel"]),
};
</script>

<style>
</style>