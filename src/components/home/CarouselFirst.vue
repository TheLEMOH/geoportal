<template>
  <div
    id="carouselExampleCaptions2"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions2"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <!--   <button
        type="button"
        data-bs-target="#carouselExampleCaptions2"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions2"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button> -->
    </div>
    <div class="carousel-inner">
      <div class="carousel-item d-flex active">
        <img src="../../assets/f1.png" class="d-block w-100" height="435px" />
        <div class="carousel-caption d-none d-md-block">
          <h3>ЗАТОПЛЕННЫЕ НАСЕЛЕННЫЕ ПУНКТЫ</h3>
          <p></p>
        </div>
      </div>
      <!--    <div class="carousel-item">
        <div class="carousel-caption d-none d-md-block">
          <h5>Второй слайд</h5>
          <p>Какой-то текст для слайда</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-caption d-none d-md-block">
          <h5>Третий слайд</h5>
          <p>Какой-то текст для слайда</p>
        </div>
      </div> -->
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions2"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions2"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
#carouselExampleCaptions {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

#carouselExampleCaptions2 {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>