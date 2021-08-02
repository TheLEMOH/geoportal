<template>
  <div class="container-fluid text-shadow">
    <div class="row row-cols-3 row-cols-lg-6">
      <div
        class="col carousel-wrap text-white position-relative p-0"
        v-for="n in 6"
        :key="n"
      >
        <p
          class="image-title position-absolute top-50 start-50 translate-middle"
        >
          Флора и фауна
        </p>
        <p
          class="image-text position-absolute top-50 start-50 translate-middle p-2"
        >
          Флора и фауна естественной среды. Например: живая природа,
          растительность, биология, экология, заболоченные территории и т.д.
        </p>
        <img src="../../assets/about.jpg" style="height: 100%; width: 100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.carousel-wrap {
  flex-shrink: 1;
  z-index: 1;
  transition: all 0.3s;
}

.image-text {
  font-size: 0.85vw;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.image-title {
  visibility: visible;
  transition: all 0.3s;
}

.carousel-wrap:hover .image-title {
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  transition: all 0.3s;
}

.carousel-wrap:hover .image-text {
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  visibility: visible;
  z-index: 10;
  transition: all 0.3s;
  border-radius: 10px;
}

.carousel-wrap:hover {
  cursor: pointer;
  transform: scale(1.05);
  z-index: 10;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
}
</style>