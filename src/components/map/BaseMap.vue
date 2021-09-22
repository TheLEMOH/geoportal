<template>
  <div class="base-map">
    <ul class="list-group">
      <li class="p-2" v-for="(baseMap, index) in baseMaps" :key="index">
        <a
          class="link link-light fs-5"
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