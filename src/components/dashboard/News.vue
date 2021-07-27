<template>
  <div class="news-control container-fluid">
    <div class="row">
      <div class="col-lg-3" style="min-width: 400px">
        <!-- Кнопки управления -->
        <ControlPanel />
        <!-- Отображение списка новостей -->
        <TableNews />
      </div>
      <!-- Редактирование новостей -->
      <div class="col-md mt-2 text-white" v-if="selectedNews != null">
        <EditingNews />
      </div>
      <div class="col-md mt-2 text-white" v-else>
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
  height: 100%;
  overflow-y: auto;
}

td {
  word-wrap: break-word;
}

.selected-news {
  background: #40817a;
  transition: all 0.3s;
}

.wrong-news {
  background: red;
}

.table {
  color: white;
}
</style>

