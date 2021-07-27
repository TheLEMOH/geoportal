<template>
  <div class="about">
    <div
      class="
        ql-container
        container
        about-block
        position-absolute
        top-50
        start-50
        translate-middle
      "
    >
      <div
        class="ql-editor text-white rounded"
        v-if="about"
        style="text-shadow: 1px 1px 2px black"
        v-html="about[0].body"
      ></div>
    </div>
    <img
      src="../assets/about.jpg"
      class="position-fixed w-100 h-100"
      style="z-index: 0"
    />
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["about"]),
  mounted() {
    this.$store.dispatch("FetchAbout");
  },
};
</script>

<style>
.about-block {
  z-index: 1;
  height: auto !important;
  background: rgba(50, 50, 50, 0.3);
}

p {
  text-indent: 1em;
  text-align: justify;
}
</style>