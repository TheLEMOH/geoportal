<template>
  <div class="recources h-100">
    <div class="container mt-2" v-if="сatalogsLoaded">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div
          class="col p-1"
          v-for="(catalog, index) in catalogsList"
          :key="index"
        >
          <Card :data="catalog" :index="index" />
        </div>
      </div>
    </div>
    <div class="container mt-2" v-else>
      <Loading />
    </div>

    <div class="container mt-2" v-if="catalogsList == 0 && сatalogsLoaded">
      <h1>Каталогов нет</h1>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Loading from "./Loading.vue";
import Card from "../components/catalogs/Card.vue";
export default {
  components: { Card, Loading },
  mounted() {
    this.FetchCatalogs();
  },
  computed: {
    ...mapGetters(["catalogs", "catalogsLength", "сatalogsLoaded"]),
    catalogsList() {
      return this.catalogs.filter((c) => c.action != "add");
    },
  },
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
  transition: all 0.2s;
  height: 100%;
}

.recources .card:hover {
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
}

.recources .card img {
  width: auto;
  height: 180px;
  object-fit: cover;
}

.recources {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>