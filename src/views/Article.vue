<template>
  <div class="article-wrapper">
    <div class="container shadow border mb-5" v-if="articleById">
      <article>
        <header>
          <div class="row">
            <div
              class="col col-lg m-0 p-0"
              v-for="(img, index) in articleById.img"
              :key="index"
            >
              <img :src="imgURLs.articles + img" />
            </div>
          </div>

          <h1>{{ articleById.title }}</h1>
        </header>

        <div class="text ql-editor" v-html="body"></div>
      </article>
    </div>
    <div class="container" v-else><Loading /></div>
  </div>
</template>


<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Loading from "./Loading.vue";
import { imgURLs } from "../store/modules/serverProcedure/URL";
export default {
  data() {
    return {
      regex1: /&lt;/gi,
      regex2: /&gt;/gi,
      regex3: /amp;/gi,
      imgURLs: imgURLs,
    };
  },
  components: { Loading },
  mounted() {
    this.FetchArticleById(this.$route.params.id);
  },
  computed: {
    ...mapGetters(["articleById"]),
    body() {
      let res = this.articleById.body;
      let res2 = res.replaceAll(this.regex1, "<");
      let res3 = res2.replaceAll(this.regex2, ">");
      return res3.replaceAll(this.regex3, "");
    },
  },
  methods: {
    ...mapActions(["FetchArticleById"]),
  },
};
</script>

<style>
</style>