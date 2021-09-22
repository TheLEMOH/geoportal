<template>
  <div class="table text-shadow">
    <table class="table table-striped border">
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
          :class="[selectedNews == index ? 'selected' : '']"
          :key="index"
          :id="news._id"
        >
          <td>{{ news.date }}</td>
          <td>
            <label class="td-label" v-if="news.action == 'loading'"
              >Сохранение...</label
            >
            <label class="td-label" v-else>{{ news.title }}</label>
          </td>
          <td class="text-center">
            <button
              class="btn btn-warning"
              style="z-index: 1"
              @click="SelectNews(index)"
              :disabled="news.action == 'loading' ? true : false"
            >
              <EditIcon />
            </button>
          </td>
          <td class="text-center">
            <button
              class="btn btn-danger"
              style="z-index: 1"
              @click="DeleteNews(index)"
              :disabled="news.action == 'loading' ? true : false"
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
import EditIcon from "../../icons/EditIcon.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: { EditIcon },
  computed: mapGetters(["news", "selectedNews"]),
  methods: mapActions(["SelectNews", "DeleteNews"]),
};
</script>

<style>
tbody td {
  min-width: 50px;
  max-width: 130px;
}

.table-news {
  height: 82vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>