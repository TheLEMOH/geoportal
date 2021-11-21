<template>
  <ul class="list-group list-group-flush">
    <li
      class="list-group-item m-0 p-2"
      v-for="(prop, index) in props"
      :key="index"
    >
      <h5 class="fw-bold" v-if="prop.field != 'img' && prop.field != 'article'">
        {{ prop.field }}
      </h5>

      <img
        class="w-100"
        v-if="prop.field == 'img' && prop"
        :src="imgURLs.maps + `${data.id}/${prop.value}`"
      />

      <label v-if="prop.field != 'img' && prop.field != 'article'">{{
        prop.value
      }}</label>
    </li>
  </ul>
</template>

<script>
import { imgURLs } from "../../store/modules/serverProcedure/URL";
export default {
  props: ["data"],
  data() {
    return { imgURLs: imgURLs };
  },
  computed: {
    props() {
      const props = this.data.features.properties;
      const res = [];
      for (let key in props) {
        if (
          key != "ID" &&
          key != "id" &&
          key != "article" &&
          key != "name" &&
          key != "Name"
        ) {
          res.push({ field: key, value: props[key] });
        }
      }
      return res;
    },
  },
};
</script>

<style>
</style>