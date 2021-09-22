<template>
  <!-- <div class="card shadow">
    <div class="card-header" style="background: #84a3c9"></div>
    <div class="card-body" style="background: #6b95c9">
      <img src="../../assets/1.jpg" style="height: 100%; width: 100%" />
    </div>
  </div>

 -->

  <div class="gallery-card-image rounded">
    <img :src="`http://enplus.petyaogurkin.keenetic.pro/api/gallery/${data}`" />
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>