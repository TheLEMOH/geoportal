<template>
  <div class="recources h-100">
    <div class="container mt-2">
      <Loading v-if="catalogsLength == 0" />
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div class="col mb-4" v-for="(catalog, index) in catalogs" :key="index">
          <Card :data="catalog" :index="index" />
        </div>
      </div>
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
  computed: mapGetters(["catalogs", "catalogsLength"]),
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