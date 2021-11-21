<template>
  <div class="recources-children h-100">
    <div class="container mt-2" v-if="сatalogByIdLoaded">
      <h2>Каталог: {{ catalogById.title }}</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div
          class="col p-1"
          v-for="(project, index) in catalogById.projects"
          :key="index"
        >
          <CardChildren
            :data="project"
            :index="index"
            :parent="$route.params.id"
          />
        </div>
      </div>
    </div>

    <div class="container mt-2" v-else><Loading /></div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import Loading from "./Loading.vue";
import CardChildren from "../components/catalogs/CardChildren.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  mounted() {
    this.FetchCatalogById(this.$route.params.id);
  },
  components: { Loading, CardChildren },
  methods: {
    ...mapActions(["FetchCatalogById"]),
  },
  computed: mapGetters(["catalogById", "сatalogByIdLoaded"]),
};
</script>

<style>
.recources-children .col {
  height: 250px;
}

.recources-children .card {
  height: 100%;
}

.recources-children .card img {
  width: auto;
  height: 200px;
  object-fit: cover;
}

.recources-children {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>