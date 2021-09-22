<template>
  <div class="news">
    <div class="container mt-2">
      <Loading v-if="newsLength == 0" />
      <div class="d-flex flex-column">
        <Card v-for="(news, index) in news" :key="index" :data="news" />
      </div>
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
  computed: mapGetters(["news", "newsLength"]),
};
</script>

<style>
/* .reddd {
  background: red;
} */

.news {
  overflow-x: hidden;
  overflow-y: scroll;
}

li {
  list-style-type: none;
}
</style>