<template>
  <div class="news h-100">
    <div class="container mt-2" v-if="newsLoaded">
      <div class="d-flex flex-column">
        <Card v-for="(news, index) in news" :key="index" :data="news" />
      </div>
    </div>

    <div class="container mt-2" v-else>
      <Loading />
    </div>

    <div class="container mt-2" v-if="newsLength == 0 && newsLoaded">
      <h1>Новостей нет</h1>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import Card from "../components/news/Card.vue";
import Loading from "./Loading.vue";
import { mapGetters } from "vuex";
export default {
  components: { Card, Loading },
  mounted() {
    this.$store.dispatch("FetchNews");
  },
  computed: mapGetters(["news", "newsLength", "newsLoaded"]),
};
</script>

<style>
.news {
  overflow-x: hidden;
  overflow-y: scroll;
}

li {
  list-style-type: none;
}
</style>