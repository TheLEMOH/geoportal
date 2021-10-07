<template>
  <div
    class="home bg-white"
    style="color: rgb(114, 114, 114); min-height: 1500px"
  >
    <div class="container">
      <div class="gallery-grid">
        <div class="first-element">
          <CarouselFirst />
        </div>
        <div class="right-element">
          <CarouselRight />
        </div>
        <div class="bottom-first-element position-relative">
          <div
            class="
              position-absolute
              text-white
              bottom-0
              start-50
              translate-middle-x
              mb-3
            "
          >
            <h6>ДОСТОПРИМЕЧАТЕЛЬНОСТИ</h6>
          </div>
          <img src="../assets/b2.jpg" width="100%" height="100%" />
        </div>
        <div class="bottom-second-element position-relative">
          <div
            class="
              position-absolute
              text-white
              bottom-0
              start-50
              translate-middle-x
              mb-3
            "
          >
            <h6>ООПТ</h6>
          </div>
          <img src="../assets/b1.jpg" width="100%" height="100%" />
        </div>
        <div class="bottom-third-element position-relative">
          <div
            class="
              position-absolute
              text-white
              bottom-0
              start-50
              translate-middle-x
              mb-3
            "
          >
            <h6>ПЕЩЕРЫ</h6>
          </div>
          <img src="../assets/b3.jpg" width="100%" height="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselRight from "../components/home/CarouselRight.vue";
import CarouselFirst from "../components/home/CarouselFirst.vue";
export default {
  components: { CarouselRight, CarouselFirst },
};
</script>

<style>
.gallery-grid {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.gallery-grid {
  transition: all 0.1s ease;
  display: grid;
  height: 700px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5px 5px;
  grid-template-areas:
    "first-element first-element first-element right-element right-element"
    "first-element first-element first-element right-element right-element"
    "bottom-first-element bottom-second-element bottom-third-element right-element right-element";
}

.gallery-grid img {
  object-fit: cover;
}

.right-element {
  grid-area: right-element;
}
.first-element {
  grid-area: first-element;
}
.bottom-first-element {
  grid-area: bottom-first-element;
}
.bottom-second-element {
  grid-area: bottom-second-element;
}
.bottom-third-element {
  grid-area: bottom-third-element;
}
</style>