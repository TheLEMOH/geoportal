<template>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    :controls="false"
    @click="Click"
    class="map"
  >
    <vl-view :zoom="zoom" :center="center"></vl-view>

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>

    <vl-layer-vector>
      <vl-source-vector :features.sync="object"></vl-source-vector>
      <vl-style-box>
        <vl-style-stroke color="green" :width="3"></vl-style-stroke>
        <vl-style-fill color="rgba(255,255,255,0.5)"></vl-style-fill>
      </vl-style-box>
    </vl-layer-vector>
  </vl-map>
</template>

<script>
/* import { mapGetters } from "vuex"; */
export default {
  data() {
    return {
      zoom: 9,
      center: [10350000, 7550000],
      object: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [10350000, 7650000],
                [10550000, 7550000],
                [10450000, 7550000],
                [10350000, 7750000],
              ],
            ],
          },
        },
      ],
    };
  },
  methods: {
    Click() {
      this.$store.dispatch("changeShow");
      return this.$store.getters.getShow;
    },
  },
};
</script>

<style>
.map {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>