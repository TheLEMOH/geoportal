<template>
  <div class="card text-white">
    <img
      :src="`http://enplus.petyaogurkin.keenetic.pro/api/images/sections/${data.img}`"
      class="card-img-top additional"
      alt="..."
    />
    <div class="card-body additional">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">{{ data.description }}</p>
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
import { mapActions } from "vuex";
export default {
  props: ["data", "index"],
  methods: { ...mapActions(["UpdateOpenedCatalogs"]) },
};
</script>

<style>
</style>