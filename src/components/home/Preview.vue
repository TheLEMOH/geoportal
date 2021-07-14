<template>
  <div class="preview text-center">
    <h1 class="text-white">Стройка...</h1>
    <!--  <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-bind:class="[index == 0 ? 'active' : '']"
          v-for="(i, index) in img"
          :key="index"
        >
          <img :src="i.src" class="d-inline w-50" />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        {
          src: require("../../assets/1.jpg"),
        },
        {
          src: require("../../assets/2.jpg"),
        },
        {
          src: require("../../assets/3.jpg"),
        },
        {
          src: require("../../assets/4.jpg"),
        },
        {
          src: require("../../assets/5.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
.preview {
  position: fixed;
  height: 100%;
  width: 100%;
  background: #12355f;
}

.carousel-item > img {
  height: 100%;
  max-height: 400px;
}
</style>