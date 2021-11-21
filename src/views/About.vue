<template>
  <div class="about">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-auto"><Logo /></div>
        <div class="col">
          <div class="about-body shadow" v-if="aboutLoaded">
            <div class="ql-container">
              <div class="ql-editor rounded" v-html="about[0].body"></div>
            </div>
          </div>
          <div class="container" v-else>
            <Loading v-if="!aboutLoaded" class="position-absolute" />
          </div>
        </div>
        <div class="col-auto"><Sponsors /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import Sponsors from "../components/about/Sponsors.vue";
import Logo from "../components/about/Logo.vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import { mapGetters } from "vuex";
export default {
  components: { Loading, Sponsors, Logo },
  computed: mapGetters(["about", "aboutLoaded"]),
  mounted() {
    this.$store.dispatch("FetchAbout");
  },
};
</script>

<style>
.about {
  height: 87vh;
  overflow-y: auto;
  z-index: 1;
}

/* p {
  text-indent: 1em;
  text-align: justify;
} */
</style>