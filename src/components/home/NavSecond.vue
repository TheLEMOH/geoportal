<template>
  <nav class="nav justify-content-evenly fs-4 border shadow" style="z-index: 2">
    <!--   <img src="../../assets/logo.png" width="128" height="128" /> -->
    <router-link class="link" :to="{ name: 'Map' }"
      >Картографические материалы <MarkerIcon />
    </router-link>
    <router-link class="link" :to="{ name: 'Catalogs' }"
      >Каталог ресурсов <LayersMarker
    /></router-link>
    <router-link class="link" :to="{ name: 'About' }"
      >О проекте <InfoIcon
    /></router-link>
    <router-link class="link" :to="{ name: 'Gallery' }"
      >Фотогалерея <ImageIcon
    /></router-link>
    <router-link class="link" :to="{ name: 'News' }"
      >Новости портала <NewsIcon
    /></router-link>
    <i class="bi bi-newspaper"></i>
  </nav>
</template>


<script>
import MarkerIcon from "../icons/MarkerIcon.vue";
import LayersMarker from "../icons/LayersIcon.vue";
import ImageIcon from "../icons/ImageIcon.vue";
import NewsIcon from "../icons/NewsIcon.vue";
import InfoIcon from "../icons/InfoIcon.vue";
export default {
  components: { MarkerIcon, LayersMarker, ImageIcon, NewsIcon, InfoIcon },
};
</script>

<style scoped>
a {
  color: rgb(114, 114, 114) !important;
}

@media (max-width: 1200px) {
  .fs-4 {
    font-size: calc(1rem + 0.05vw) !important;
  }
}
</style>