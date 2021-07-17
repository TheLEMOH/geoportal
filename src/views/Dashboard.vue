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
    Projects: () => import("../components/dashboard/Projects.vue"),
  },
  data() {
    return { currentComponent: null };
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