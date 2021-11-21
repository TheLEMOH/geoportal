<template>
  <div class="card text-white">
    <img
      :src="imgURLs.catalogs + data.img"
      class="card-img-top additional"
      alt="..."
    />
    <div class="card-body additional">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text ql-editor p-0 m-0" v-html="data.description"></p>
    </div>
    <div class="card-footer additional border-top">
      <router-link
        class="btn btn-outline-light m-1"
        :to="{ name: 'Map' }"
        @click.native="UpdateOpenedCatalogs(data._id)"
        >Открыть карту</router-link
      >
      <router-link
        href="#"
        class="btn btn-outline-light m-1"
        :to="{ name: 'CatalogsChildren', params: { id: data._id } }"
        >Проекты
      </router-link>
    </div>
  </div>
</template>


<script>
import { imgURLs } from "../../store/modules/serverProcedure/URL";
import { mapActions } from "vuex";
export default {
  props: ["data", "index"],
  data() {
    return {
      imgURLs: imgURLs,
    };
  },
  methods: { ...mapActions(["UpdateOpenedCatalogs"]) },
};
</script>

<style>
.card-body {
  overflow-y: auto;
}

.card-text {
  height: auto;
}

.card-body::-webkit-scrollbar {
  width: 1;
}

</style>