<template>
  <div class="article-wrapper">
    <div class="container shadow border text-black" v-if="articleById">
      <article>
        <header>
          <div class="row">
            <div
              class="col col-lg m-0 p-0"
              v-for="(img, index) in articleById.img"
              :key="index"
            >
              <img
                :src="`http://enplus.petyaogurkin.keenetic.pro/api/images/articles/${img}`"
              />
            </div>
          </div>

          <h1>{{ articleById.title }}</h1>
        </header>
        <div class="text" v-html="articleById.body"></div>
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
export default {
  components: { Loading },
  mounted() {
    this.FetchArticleById(this.$route.params.id);
  },
  computed: mapGetters(["articleById"]),
  methods: {
    ...mapActions(["FetchArticleById"]),
  },
};
</script>

<style>
.article-wrapper {
  height: 87vh;
  overflow-y: scroll;
}

.article-wrapper img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.article-wrapper p {
  text-align: justify;
}
</style>