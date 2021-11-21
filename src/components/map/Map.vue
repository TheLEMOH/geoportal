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
        :url="`/qgisserver/${project.map}`"
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

          <h4 class="text-white w-100 m-2" v-if="nameObject">
            <a :href="articleObject"> {{ nameObject }} </a>
          </h4>
          <h4 class="text-white w-100 m-2" v-else>
            <a :href="articleObject"> {{ idObject }} </a>
          </h4>

          <Information :data="information" />
        </div>
      </template>
    </vl-overlay>
  </vl-map>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
import { imgURLs } from "../../store/modules/serverProcedure/URL";
import Information from "./Information.vue";
export default {
  components: { Information },
  data() {
    return { imgURLs: imgURLs };
  },
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

    nameObject() {
      if (this.information.features.properties.name) {
        return this.information.features.properties.name;
      }
      if (this.information.features.properties.Name) {
        return this.information.features.properties.Name;
      }
      return this.information.features.id;
    },
    idObject() {
      return this.information.features.id;
    },
    articleObject() {
      return this.information.features.properties.article;
    },
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
  max-height: 500px;
  word-break: break-word;
  overflow-y: auto;
  overflow-x: hidden;
}

.overlay-videoclip a {
  margin: 0 !important;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat !important;
  background-size: 0% 3px;
  transition: all 0.3s;
  margin: 0.5rem;
  color: white;
}

.overlay-videoclip a:hover {
  cursor: pointer;
  color: #e3ba8e !important;
  background-size: 100% 3px !important;
}

.overlay-videoclip button {
  z-index: 10;
}
</style>