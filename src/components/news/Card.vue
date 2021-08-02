<template>
  <div class="news-card">
    <div class="row">
      <div class="col-lg-1">
        <div class="mt-2 text-white">{{ data.date }}</div>
      </div>
      <div class="col">
        <div class="card text-white m-2">
          <div class="card-body additional ql-editor" >
            <h5 class="card-title">{{ data.title }}</h5>
            <div class="card-text mt-2 mb-2" v-html="data.body"></div>
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
}

p {
  padding: 0;
  margin: 0;
  text-indent: 1em;
  /*  text-align: justify; */
}
</style>