<template>
  <div class="container d-flex justify-content-center mt-4 text-shadow">
    <div class="spine"></div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div
        class="carousel-inner carousel-wrap text-white"
        style="height: 500px; width: 1100px"
      >
        <div
          class="carousel-item position-relative"
          v-bind:class="[index == 0 ? 'active' : '']"
          v-for="(i, index) in img"
          :key="index"
        >
          <p
            class="
              image-title
              position-absolute
              w-100
              text-center
              position-absolute
              bottom-0
              p-3
            "
          >
            Флора и фауна
          </p>
          <p
            class="image-text w-100 text-center position-absolute bottom-0 p-3"
          >
            Флора и фауна естественной среды. Например: живая природа,
            растительность, биология, экология, заболоченные территории и т.д.
          </p>
          <img :src="i.src" style="height: 500px; width: 100%" />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        style="z-index: 1000"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        style="z-index: 1000"
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
          src: require("../../assets/about.jpg"),
        },
        {
          src: require("../../assets/about.jpg"),
        },
        {
          src: require("../../assets/about.jpg"),
        },
        {
          src: require("../../assets/about.jpg"),
        },
        {
          src: require("../../assets/about.jpg"),
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
  background-color: #c7cedf;
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