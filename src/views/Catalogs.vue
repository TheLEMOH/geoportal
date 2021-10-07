<template>
  <div class="recources h-100">
    <div class="container mt-2" v-if="сatalogsLoaded">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div class="col p-1" v-for="(catalog, index) in catalogs" :key="index">
          <Card :data="catalog" :index="index" />
        </div>
      </div>
    </div>
    <div class="container mt-2" v-else>
      <Loading />
    </div>

    <div class="container mt-2" v-if="catalogsLength == 0 && сatalogsLoaded">
      <h1>Каталогов нет</h1>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Loading from "./Loading.vue";
import Card from "../components/catalogs/Card.vue";
export default {
  components: { Card, Loading },
  mounted() {
    this.FetchCatalogs();
  },
  computed: mapGetters(["catalogs", "catalogsLength", "сatalogsLoaded"]),
  methods: {
    ...mapActions(["FetchCatalogs"]),
  },
};
</script>

<style>
.recources .col {
  height: 400px;
}

.recources .card {
  height: 100%;
}

.recources .card img {
  width: auto;
  height: 200px;
  object-fit: cover;
}

.recources {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>