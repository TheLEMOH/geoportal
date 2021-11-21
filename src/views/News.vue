<template>
  <div class="news h-100">
    <div class="container mt-2" v-if="newsLoaded">
      <div class="d-flex flex-column">
        <Card v-for="(news, index) in newsList" :key="index" :data="news" />
      </div>
    </div>

    <div class="container mt-2" v-else>
      <Loading />
    </div>

    <div class="container mt-2" v-if="newsList == 0 && newsLoaded">
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
  computed: {
    ...mapGetters(["news", "newsLength", "newsLoaded"]),
    newsList() {
      const news = [...this.news];
      news.sort((a, b) => {
        const aSplit = a.date.split(".");
        const bSplit = b.date.split(".");
        const aDate = new Date(aSplit[2], aSplit[1], aSplit[0]);
        const bDate = new Date(bSplit[2], bSplit[1], bSplit[0]);
        if (aDate > bDate) {
          return 1;
        }
        if (aDate < bDate) {
          return -1;
        }
        return 0;
      });
      return news.filter((n) => n.action != "add");
    },
  },
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