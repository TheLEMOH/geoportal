<template>
  <div class="gallery m-2">
    <div class="row row-cols-3">
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
</style>