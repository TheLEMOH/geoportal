<template>
  <div class="card text-white">
    <div class="card-body additional">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text ql-editor" v-html="data.description"></p>
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
.card-body {
  overflow-y: auto;
}

.card-text {
  height: auto;
}

.card-body::-webkit-scrollbar {
  width: 0 !important;
}

.card-text a {
  margin: 0 !important;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat !important;
  background-size: 0% 3px;
  transition: all 0.3s;
  margin: 0.5rem;
  color: white;
}

.card-text a:hover {
  cursor: pointer;
  color: #e3ba8e !important;
  background-size: 100% 3px !important;
}
</style>