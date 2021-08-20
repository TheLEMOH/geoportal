<template>
  <div class="base-maps">
    <ul class="nav flex-column">
      <li
        class="d-flex flex-column align-items-center p-2"
        v-for="(baseMap, index) in baseMaps"
        :key="index"
      >
        <a
          class="link link-light w-100"
          :class="[currentBaseMap == index ? 'linkActive' : '']"
          @click="changeBaseMap(index)"
        >
          {{ baseMap.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: mapGetters(["baseMaps", "currentBaseMap"]),
  methods: mapMutations(["changeBaseMap"]),
};
</script>

<style>
</style>