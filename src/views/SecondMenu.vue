<template>
  <div
    class="home bg-white"
    style="color: rgb(114, 114, 114); min-height: 1500px"
  >
    <Nav />
    <div class="container">
      <div class="gallery-grid">
        <div class="first-element">
          <img src="../assets/sosna.png" width="100%" height="100%" />
        </div>
        <div class="right-element">
          <img src="../assets/1.jpg" width="100%" height="100%" />
        </div>
        <div class="bottom-first-element">
          <img src="../assets/2.jpg" width="100%" height="100%" />
        </div>
        <div class="bottom-second-element">
          <img src="../assets/3.jpg" width="100%" height="100%" />
        </div>
        <div class="bottom-third-element">
          <img src="../assets/4.jpg" width="100%" height="100%" />
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="w-100 text-center"><h4>Что Вас интересует</h4></div>
    </div>
    <div class="container mt-5">
      <div class="w-100 text-center"><h4>Проекты</h4></div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/home/NavSecond.vue";
export default {
  components: { Nav },
};
</script>

<style>
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

.gallery-grid * :hover {
  transition: all 0.1s ease;
  background: transparent;
  background-image: #ccc;
  opacity: 0.5;
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