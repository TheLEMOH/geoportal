<template>
  <div class="table-news">
    <table class="table border">
      <thead>
        <tr class="text-center">
          <th>Дата публикации</th>
          <th>Название</th>
          <th><EditIcon /></th>
          <th>&times;</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class=""
          v-for="(news, index) in news"
          :class="[selectedNews == index ? 'selected-news' : '']"
          :key="index"
          :id="news._id"
        >
          <td>{{ news.date }}</td>
          <td>{{ news.title }}</td>
          <td>
            <button
              class="btn btn-warning"
              style="z-index: 5"
              @click="SelectNews(index)"
            >
              <EditIcon />
            </button>
          </td>
          <td>
            <button
              class="btn btn-danger"
              style="z-index: 5"
              @click="DeleteNews(index)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EditIcon from "../EditIcon.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: { EditIcon },
  computed: mapGetters(["news", "selectedNews"]),
  methods: mapActions(["SelectNews", "DeleteNews"]),
};
</script>

<style>
.table-news {
  max-height: 80vh;
  min-width: 330px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.table-news button {
  width: 40px;
  margin: 0;
}
</style>