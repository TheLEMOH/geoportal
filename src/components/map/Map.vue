<template>
  <vl-map
    ref="map"
    data-projection="EPSG:3857"
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    :controls="false"
    @click="Click"
    class="map"
  >
    <vl-view :zoom="zoom" :center="center"></vl-view>
    <!-- Подложка -->
    <vl-layer-tile>
      <vl-source-xyz
        :url="baseMaps[currentBaseMap].url"
        cross-origin="none"
        SameSite="none"
      ></vl-source-xyz>
    </vl-layer-tile>
    <!-- Слои -->
    <vl-layer-image
      v-for="(project, index) in projectsToDisplay"
      :key="index"
      :id="project.map"
      :visible="project.visible"
    >
      <vl-source-image-wms
        v-if="project.layers"
        :layers="project.layers"
        :url="`http://enplus.petyaogurkin.keenetic.pro/qgisserver/${project.map}`"
        :crossOrigin="'anonymous'"
      ></vl-source-image-wms>
    </vl-layer-image>
    <!-- Попап -->
    <vl-overlay
      projection="EPSG:3857"
      :position="currentPosition"
      :auto-pan="true"
      v-if="currentPosition"
    >
      <template>
        <div class="overlay-videoclip position-absolute additional m-0 p-0">
          <button
            class="btn btn-danger rounded-0 float-end"
            @click="ClosePopup"
          >
            &times;
          </button>
          <h3 class="text-white m-2">{{ information.features.id }}</h3>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item m-0 p-2"
              v-for="(prop, index) in information.features.properties"
              :key="index"
            >
              <div class="me-auto">
                <div class="fw-bold">{{ index }}</div>
                <label v-if="index != 'img'">{{ prop }}</label>
                <img
                  class="w-100"
                  v-if="index == 'img' && prop"
                  :src="`https://enplus.petyaogurkin.keenetic.pro/api/images/maps/${information.id}/${prop}`"
                />
              </div>
            </li>
          </ul>
        </div>
      </template>
    </vl-overlay>
  </vl-map>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "zoom",
      "center",
      "currentPosition",
      "baseMaps",
      "currentBaseMap",
      "projectsToDisplay",
      "capabilities",
      "information",
    ]),
  },
  methods: {
    ...mapMutations(["changeCurrentPosition"]),
    ...mapActions(["ChangeInformation"]),
    OpenInfo() {
      this.$store.dispatch("Open");
    },
    Click(e) {
      const map = this.$refs.map;
      const coordinates = map.getCoordinateFromPixel(e.pixel);
      const viewResolution = map.getView().getResolution();
      const viewProjection = map.getView().getProjection();

      map.forEachLayerAtPixel(e.pixel, (layer) => {
        if (layer.type == "IMAGE") {
          const tmpurl = layer
            .getSource()
            .getGetFeatureInfoUrl(coordinates, viewResolution, viewProjection, {
              INFO_FORMAT: "application/json",
            });
          const id = layer.get("id");
          const url2 = tmpurl.split("BBOX");
          const bbox = url2[1].split("%2C");

          const rate = 60000000 / Math.pow(2, map.getView().getZoom());

          bbox[0] = +bbox[0].slice(1) - rate;
          bbox[1] = +bbox[1] - rate;
          bbox[2] = +bbox[2] + rate;
          bbox[3] = +bbox[3] + rate;

          const url = url2[0] + "BBOX=" + bbox.join(",");

          fetch(url)
            .then((e) => {
              return e.json();
            })
            .then((e) => {
              this.changeCurrentPosition(coordinates);
              this.ChangeInformation({ features: e.features[0], id });
            });
        } else {
          this.changeCurrentPosition(undefined);
        }
      });
    },
    ClosePopup() {
      this.changeCurrentPosition(undefined);
    },
  },
};
</script>

<style>
.map {
  width: 100%;
  height: 100%;
}

.overlay-videoclip {
  opacity: 1;
  border-radius: 10px;
  transform: translate(-50%, -100%);
  width: 350px;
  max-height: 350px;
  word-break: break-all;
  overflow-y: auto;
}

.overlay-videoclip button {
  z-index: 10;
}
</style>