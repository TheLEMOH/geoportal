<template>
  <div class="gallery-card-image">
    <img :src="`http://enplus.petyaogurkin.keenetic.pro/api/images/gallery/${data}`" />
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>