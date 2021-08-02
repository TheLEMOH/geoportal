<template>
  <div class="style-control w-100">
    <ControlPanel />
    <div class="row m-1">
      <div class="col-md-auto">
        <TableStyles />
      </div>
      <div class="col-md" v-if="selectedStyle != null">
        <EditingStyles />
      </div>
    </div>
  </div>
</template>

<script>
import EditingStyles from "./Styles/EditingStyles.vue";
import ControlPanel from "./Styles/ControlPanel.vue";
import TableStyles from "./Styles/TableStyles.vue";
import { mapGetters } from "vuex";
/* import { mapActions } from "vuex"; */
export default {
  components: { TableStyles, ControlPanel, EditingStyles },
  computed: mapGetters(["selectedStyle"]),
};
</script>

<style>
</style>