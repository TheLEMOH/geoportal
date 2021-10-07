<template>
  <div class="news-card">
    <div class="row">
      <div class="col-xl-1">
        <div class="text-black">{{ data.date }}</div>
      </div>
      <div class="col-xl">
        <div class="card text-white mb-2">
          <div class="card-body additional ql-editor">
            <h1 class="card-title">{{ data.title }}</h1>
            <div class="card-body" v-html="data.body"></div>
            <div class="card-img-bottom">
              <div class="row row-cols-1 row-cols-md-3">
                <div
                  class="col col-md p-1"
                  v-for="(img, index) in data.img"
                  :key="index"
                >
                  <img
                    :src="
                      'http://enplus.petyaogurkin.keenetic.pro/api/images/news/' +
                      img
                    "
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["data"],
};
</script>
<style lang="css">
.card {
  border: 0;
  overflow: hidden;
}

.card-body img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

p {
  padding: 0;
  margin: 0;
}
</style>