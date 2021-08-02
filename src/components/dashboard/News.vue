<template>
  <div class="news-control w-100">
    <ControlPanel />
    <div class="row m-1">
      <div class="col-md-auto" style="min-width: 400px">
        <TableNews />
      </div>
      <div class="col-md text-white" v-if="selectedNews != null">
        <EditingNews />
      </div>
      <div class="col-md text-white" v-else>
        <label>Выберите новость</label>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import TableNews from "./News/TableNews.vue";
import ControlPanel from "./News/ControlPanel.vue";
import EditingNews from "./News/EditingNews.vue";
export default {
  components: { TableNews, ControlPanel, EditingNews },
  computed: mapGetters(["news", "newsLength", "selectedNews"]),
  methods: mapActions([
    "AddNews",
    "SelectNews",
    "SaveNews",
    "DeleteNews",
    "Cancel",
    "fileChange",
  ]),
};
</script>

<style>
.news-control {
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
}

td {
  word-wrap: break-word;
}

.wrong-news {
  background: red;
}

.table {
  color: white;
}
</style>

