<template>
  <div class="card text-white">
    <img
      :src="`http://enplus.petyaogurkin.keenetic.pro/api/images/${data.img}`"
      class="card-img-top additional"
      alt="..."
    />
    <div class="card-body additional">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">{{ data.description }}</p>
    </div>
    <div class="card-footer additional border-top">
      <router-link
        class="btn btn-outline-light me-2"
        :to="{ name: 'Map', query: { catalogs: index } }"
        >Открыть карту</router-link
      >
      <a
        href="#"
        class="btn btn-outline-light"
        @click="FecthProjectsFromCatalogs(data._id)"
        >Подробнее
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["data", "index"],
  methods: { ...mapActions(["FecthProjectsFromCatalogs"]) },
};
</script>

<style>
</style>