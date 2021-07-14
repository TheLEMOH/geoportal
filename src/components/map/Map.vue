<template>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    :controls="false"
    class="map"
  >
    <vl-view :zoom="zoom" :center="center"></vl-view>

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
  </vl-map>
</template>

<script>
export default {
  data() {
    return {
      zoom: 9,
      center: [10350000, 7550000],
    };
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