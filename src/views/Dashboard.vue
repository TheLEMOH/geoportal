<template>
  <div class="dashboard">
    <Sidebar @select-component="SelectComponent" />
    <transition name="fade" mode="out-in">
      <component :is="currentComponent"></component>
    </transition>
  </div>
</template>

<script>
import Sidebar from "../components/dashboard/Sidebar.vue";

export default {
  components: {
    Sidebar,
    News: () => import("../components/dashboard/News.vue"),
    Users: () => import("../components/dashboard/Users.vue"),
    Catalogs: () => import("../components/dashboard/Catalogs.vue"),
    Projects: () => import("../components/dashboard/Projects.vue"),
    About: () => import("../components/dashboard/About.vue"),
    Help: () => import("../components/dashboard/Help.vue"),
    Styles: () => import("../components/dashboard/Styles.vue"),
  },
  data() {
    return { currentComponent: "" };
  },
  mounted() {
    this.$store.dispatch("FetchNews");
    this.$store.dispatch("FetchUsers");
    this.$store.dispatch("FetchAbout");
    this.$store.dispatch("FetchStyles");
  },
  methods: {
    SelectComponent(id) {
      this.currentComponent = id;
    },
  },
};
</script>

<style>
.dashboard {
  height: 100%;
  display: flex;
}
</style>