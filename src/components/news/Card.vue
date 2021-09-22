<template>
  <div class="news-card">
    <div class="row">
      <div class="col-xl-1">
        <div class="text-black">{{ data.date }}</div>
      </div>
      <div class="col-xl">
        <div class="card text-white mb-2">
          <div class="card-body additional ql-editor">
            <h5 class="card-title">{{ data.title }}</h5>
            <div class="card-body row" v-html="data.body"></div>
            <div class="card-img-bottom">
              <div class="row row-cols-1 row-cols-md-3 justify-content-center">
                <div
                  class="col col-md mb-2"
                  v-for="(img, index) in data.img"
                  :key="index"
                >
                  <img
                    :src="
                      'http://enplus.petyaogurkin.keenetic.pro/api/images/' +
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
  height: auto;
}

p {
  padding: 0;
  margin: 0;
}
</style>