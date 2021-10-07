<template>
  <div class="news-control w-100">
    <ControlPanel
      :Add="AddNews"
      :Save="SaveNews"
      :Cancel="Cancel"
      :loaded="newsLoaded"
    />
    <div class="row">
      <div class="col-lg-auto">
        <Table
          :tableHead="'Название новости'"
          :objects="news"
          :selected="selectedNews"
          :SelectFunc="SelectNews"
          :DeleteFunc="DeleteNews"
        />
      </div>
      <div class="col-lg" v-if="selectedNews != null">
        <EditingNews />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Table from "./patterns/Table.vue";
import ControlPanel from "./patterns/Panel.vue";
import EditingNews from "./news/Editing.vue";
export default {
  components: { Table, ControlPanel, EditingNews },
  methods: mapActions([
    "AddNews",
    "SaveNews",
    "Cancel",
    "SelectNews",
    "DeleteNews",
  ]),
  computed: mapGetters(["news", "selectedNews", "newsLoaded"]),
};
</script>

<style>
.news-control {
  color: black !important;
  overflow-x: hidden;
  overflow-y: auto;
}

td {
  word-wrap: break-word;
}

.wrong-news {
  background: red;
}
</style>

