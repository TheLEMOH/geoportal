<template>
  <div class="card text-white">
    <div class="card-body additional">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">{{ data.description }}</p>
    </div>
    <div class="card-footer additional border-top">
      <router-link
        class="btn btn-outline-light me-2"
        :to="{ name: 'Map' }"
        @click.native="UpdateOpenedProject({ id: data._id, parent })"
        >Открыть карту</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["data", "index", "parent"],
  methods: { ...mapActions(["UpdateOpenedProject"]) },
};
</script>

<style>
</style>