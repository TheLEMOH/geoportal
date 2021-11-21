<template>
  <div class="editing-catalog p-2">
    <div class="mb-2">
      <label class="form-label">Название каталога</label>
      <input
        type="text"
        class="form-control"
        placeholder=""
        v-model="catalogs[selectedCatalog].title"
      />
    </div>
    <div class="mb-2">
      <label class="form-label">Описание каталога</label>
      <VueEditor
        v-model="catalogs[selectedCatalog].description"
        :editorToolbar="defaultToolbar"
      />
    </div>
    <div class="mb-2">
      <label for="formFile" class="form-label">Изображение</label>
      <input
        class="form-control"
        type="file"
        accept=".png, .jpg, .jpeg"
        @change="TestIMG"
      />
    </div>
    <div class="mb-2" v-if="catalogs[selectedCatalog].img">
      <img
        :src="catalogs[selectedCatalog].img"
        v-if="catalogs[selectedCatalog].img.length > 45"
      />
      <img v-else :src="imgURLs.catalogs + catalogs[selectedCatalog].img" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { imgURLs } from "../../../store/modules/serverProcedure/URL";
import { VueEditor } from "vue2-editor";
export default {
  components: { VueEditor },
  data() {
    return { imgURLs: imgURLs };
  },
  computed: mapGetters(["catalogs", "selectedCatalog", "defaultToolbar"]),
  methods: mapActions(["fileChange", "TestIMG"]),
};
</script>

<style>
.editing-catalog img {
  width: 450px;
  height: 250px;
  object-fit: cover;
}
</style>