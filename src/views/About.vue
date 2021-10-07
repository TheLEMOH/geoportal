<template>
  <div class="about h-100">
    <Loading v-if="!about" class="position-absolute" />
    <div class="container shadow about-body">
      <div class="ql-container">
        <div
          class="ql-editor rounded"
          v-if="about"
          v-html="about[0].body"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import { mapGetters } from "vuex";
export default {
  components: { Loading },
  computed: mapGetters(["about"]),
  mounted() {
    this.$store.dispatch("FetchAbout");
  },
};
</script>

<style>
.about-body {
  height: 100%;
  background: white;
}
.about {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='128' height='128' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(255, 255, 255,1)'/%3E%3Cpath d='M20 8.5a 20 20 0 0 1 40 0h3a 3 3 0 0 1-6 0a 17 17 0 0 0-34 0a 3 3 0 0 1-6 0a 17 17 0 0 0-34 0h-3a 20 20 0 0 1 40 0z' fill='rgba(163, 191, 250, 1)'/%3E%3Cpath d='M0 28.5a 20 20 0 0 1 40 0h3a 3 3 0 0 1-6 0a 17 17 0 0 0-34 0a 3 3 0 0 1-6 0z' fill='rgba(163, 191, 250, 1)'/%3E%3Cpath d='M20 48.5a 20 20 0 0 1 40 0h3a 3 3 0 0 1-6 0a 17 17 0 0 0-34 0a 3 3 0 0 1-6 0a 17 17 0 0 0-34 0h-3a 20 20 0 0 1 40 0z' fill='rgba(163, 191, 250, 1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
}

p {
  text-indent: 1em;
  text-align: justify;
}
</style>