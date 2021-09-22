<template>
  <div class="container-fluid text-shadow">
    <div class="row">
      <div
        class="col carousel-wrap text-white position-relative p-0"
        v-for="n in 6"
        :key="n"
      >
        <div
          class="image-text w-100 text-center position-absolute bottom-0 p-3"
        >
          <div>Флора и фауна</div>
        </div>
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
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
  visibility: visible;
  z-index: 10;
  transition: all 0.3s;
}

.carousel-wrap:hover {
  cursor: pointer;
  z-index: 10;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
}
</style>