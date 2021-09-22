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

    <vl-layer-tile>
      <vl-source-xyz
        :url="baseMaps[currentBaseMap].url"
        cross-origin="none"
        SameSite="none"
      ></vl-source-xyz>
    </vl-layer-tile>

    <vl-layer-image
      v-for="(project, index) in projectsToDisplay"
      :key="index"
      :id="project.map"
      :visible="project.visible"
    >
      <vl-source-image-wms
        v-if="capabilities[project._id]"
        :layers="capabilities[project._id].layers"
        :url="`http://enplus.petyaogurkin.keenetic.pro/qgisserver/${project.map}`"
        :crossOrigin="'anonymous'"
      ></vl-source-image-wms>
    </vl-layer-image>

    <vl-overlay
      projection="EPSG:3857"
      :position="currentPosition"
      :auto-pan="true"
      v-if="currentPosition"
    >
      <template>
        <div class="overlay-videoclip position-absolute bg-white m-0 p-0">
          <button
            class="btn btn-danger position-absolute top-0 end-0"
            @click="ClosePopup"
          >
            &times;
          </button>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item m-0 p-1"
              v-for="(prop, index) in information.features.properties"
              :key="index"
            >
              <div class="me-auto">
                <div class="fw-bold">{{ index }}</div>
                <label v-if="index != 'img'">{{ prop }}</label>

                <img
                  class="w-100"
                  v-if="index == 'img' && prop"
                  :src="`http://enplus.petyaogurkin.keenetic.pro/api/map_images/${information.id}/${prop}`"
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

          const rate = 70000000 / Math.pow(2, map.getView().getZoom());

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
  padding: 5px;
  border-radius: 6px;
  transform: translate(-50%, -100%);
  width: 300px;
  max-height: 350px;
  word-break: break-all;
  overflow-y: scroll;
}

.overlay-videoclip button {
  z-index: 10;
}
</style>