<template>
  <div class="news-control w-100">
    <ControlPanel />
    <div class="row">
      <div class="col-lg-auto">
        <TableNews />
      </div>
      <div class="col-lg" v-if="selectedNews != null">
        <EditingNews />
      </div>
      <div class="col-lg text-white" v-else>
        <label>Выберите новость</label>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import TableNews from "./news/News.vue";
import ControlPanel from "./news/Panel.vue";
import EditingNews from "./news/Editing.vue";
export default {
  components: { TableNews, ControlPanel, EditingNews },
  computed: mapGetters(["selectedNews"]),
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

