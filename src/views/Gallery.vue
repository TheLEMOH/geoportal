<template>
  <div class="gallery container-lg ">
    <div class="row row-cols-1 row-cols-lg-3">
      <div class="col mt-3"><Card /></div>
      <div class="col mt-3"><Card /></div>
      <div class="col mt-3"><Card /></div>
      <div class="col mt-3"><Card /></div>
      <div class="col mt-3"><Card /></div>
      <div class="col mt-3"><Card /></div>
    </div>
  </div>
</template>

<script>
import Card from "../components/gallery/Card.vue";
export default { components: { Card } };
</script>

<style>
.gallery {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>