<template>
  <div class="gallery-card-image">
    <img :src="imgURLs.gallery + data" />
  </div>
</template>

<script>
import { imgURLs } from "../../store/modules/serverProcedure/URL";
export default {
  props: ["data"],
  data() {
    return {
      imgURLs: imgURLs,
    };
  },
};
</script>

<style>
</style>