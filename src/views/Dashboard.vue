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
import { mapActions } from "vuex";
import News from "../components/dashboard/News.vue";
import Users from "../components/dashboard/Users.vue";
import Catalogs from "../components/dashboard/Catalogs.vue";
import Projects from "../components/dashboard/Projects.vue";
import About from "../components/dashboard/About.vue";
import Help from "../components/dashboard/Help.vue";
import Gallery from "../components/dashboard/Gallery.vue";

export default {
  components: {
    Sidebar,
    News,
    Users,
    Catalogs,
    Projects,
    About,
    Help,
    Gallery,
  },
  data() {
    return { currentComponent: null };
  },
  mounted() {
    this.FetchNews();
    this.FetchUsers();
    this.FetchAbout();
    this.FetchMaps();
    this.FetchProjects();
    this.FetchCatalogs();
    this.FetchGallery();
  },
  methods: {
    ...mapActions([
      "FetchNews",
      "FetchUsers",
      "FetchAbout",
      "FetchCatalogs",
      "FetchMaps",
      "FetchProjects",
      "FetchGallery",
    ]),
    SelectComponent(id) {
      this.currentComponent = id;
    },
  },
};
</script>

<style>
.dashboard {
  height: 87vh;
  display: flex;
}

table {
  min-width: 400px;
}
</style>