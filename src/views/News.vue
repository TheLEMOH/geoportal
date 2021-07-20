<template>
  <div class="container news">
    <div
      class="row justify-content-md-center mt-2"
      v-for="(news, index) in news"
      :key="index"
    >
      <div class="col-2 news-meta reddd m-1">
        <ul class="list-group">
          <li class="">Дата: {{ news.date }}</li>
        </ul>
      </div>
      <div class="col reddd m-1">
        <ul class="list-group">
          <li class="">{{ news.title }}</li>
          <li class="">
            {{ news.body }}
          </li>
        </ul>
      </div>
    </div>
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
/* .reddd {
  background: red;
} */

.news {
  overflow-y: scroll;
  color: white;
}

li {
  list-style-type: none;
}

.news-meta {
  max-height: 75px !important;
}
</style>