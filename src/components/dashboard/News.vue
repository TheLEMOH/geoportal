<template>
  <div class="news-control">
    <div class="p-2 border-bottom">
      <div class="mb-2">
        <label class="form-label text-white">Название</label>
        <input type="text" class="form-control" placeholder="" />
      </div>
      <div class="mb-2">
        <label class="form-label text-white">Текст</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <div class="mb-2">
        <label class="form-label text-white">Изображение</label>
        <input type="file" class="form-control" />
      </div>
      <div class="text-end">
        <button class="btn btn-success" type="button" id="button-addon2">
          Добавить
        </button>
      </div>
    </div>
    <table class="table shadow">
      <thead>
        <tr>
          <th>#</th>
          <th>Дата публикации</th>
          <th>Название</th>
          <th>Текст</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(news, index) in news" :key="index">
          <th>{{ index }}</th>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-white"
              v-model="news.date"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-white"
              v-model="news.title"
            />
          </td>
          <td>
            <textarea
              type="text"
              class="form-control-plaintext text-white"
              style="min-width: 400px; height: 150px"
              v-model="news.body"
            />
          </td>
          <td>
            <button class="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    news() {
      return this.$store.getters.getNews;
    },
  },
};
</script>

<style>
.news-control {
  overflow-y: scroll;
}
.table {
  color: white;
}
</style>