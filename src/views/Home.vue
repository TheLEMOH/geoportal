<template>
  <div class="home">
    <Carousel />
    <Nav />
    <Preview />
  </div>
</template>

<script>
import Carousel from "../components/home/Carousel.vue";
import Preview from "../components/home/Preview.vue";
import Nav from "../components/home/Nav.vue";
export default {
  components: { Carousel, Nav, Preview },
};
</script>

<style>
</style>
