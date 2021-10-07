<template>
  <nav
    class="nav justify-content-evenly align-items-center fs-4 border shadow"
    style="z-index: 2; min-height: 50px"
  >
    <router-link
      class="link m-0 p-1"
      v-for="(link, index) in links"
      :key="index"
      :to="{ name: link.to }"
    >
      <span class="nav-collapse me-2">{{ link.title }}</span>
      <component :is="link.icon" :data="{ w: 25, h: 25 }"> </component>
    </router-link>
  </nav>
</template>


<script>
import MarkerIcon from "../icons/MarkerIcon.vue";
import LayersMarker from "../icons/LayersIcon.vue";
import ImageIcon from "../icons/ImageIcon.vue";
import NewsIcon from "../icons/NewsIcon.vue";
import InfoIcon from "../icons/InfoIcon.vue";
export default {
  data() {
    return {
      links: [
        {
          title: "Картографические материалы",
          to: "Map",
          icon: "MarkerIcon",
        },
        {
          title: "Каталог ресурсов",
          to: "Catalogs",
          icon: "LayersMarker",
        },
        {
          title: "О проекте",
          to: "About",
          icon: "InfoIcon",
        },
        {
          title: "Фотогалерея",
          to: "Gallery",
          icon: "ImageIcon",
        },
        {
          title: "Новости портала",
          to: "News",
          icon: "NewsIcon",
        },
      ],
    };
  },
  components: { MarkerIcon, LayersMarker, ImageIcon, NewsIcon, InfoIcon },
};
</script>

<style scoped>
a {
  color: rgb(114, 114, 114) !important;
}

@media (max-width: 1320px) {
  .fs-4 {
    font-size: calc(1rem + 0.05vw) !important;
  }
}

@media (max-width: 1010px) {
  .nav-collapse {
    display: none;
  }
}
</style>