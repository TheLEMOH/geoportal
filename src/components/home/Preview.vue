<template>
  <div class="container d-flex justify-content-center align-items-stretch mt-4">
    <div class="spine"></div>
    <div class="page"></div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner" style="height: 500px; width: 1000px">
        <div
          class="carousel-item"
          v-bind:class="[index == 0 ? 'active' : '']"
          v-for="(i, index) in img"
          :key="index"
        >
          <img :src="i.src" style="height: 500px; width: 100%" />
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
    </div>
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
  background: #376092;
}

.page {
  width: 60px;
  background: #12355f;
}

.spine {
  width: 20px;
  background-color: #6b95c9;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.5) 10%,
    transparent 10%,
    transparent 20%,
    rgba(255, 255, 255, 0.5) 20%,
    rgba(255, 255, 255, 0.5) 30%,
    transparent 30%,
    transparent 40%,
    rgba(255, 255, 255, 0.5) 40%,
    rgba(255, 255, 255, 0.5) 50%,
    transparent 50%,
    transparent 60%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0.5) 70%,
    transparent 70%,
    transparent 80%,
    rgba(255, 255, 255, 0.5) 80%,
    rgba(255, 255, 255, 0.5) 90%,
    transparent 90%,
    transparent
  );
}
</style>