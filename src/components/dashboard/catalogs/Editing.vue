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
      <textarea
        type="text"
        class="form-control"
        placeholder=""
        v-model="catalogs[selectedCatalog].description"
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
    <div class="mb-2">
      <img :src="catalogs[selectedCatalog].img" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: mapGetters(["catalogs", "selectedCatalog"]),
  methods: mapActions(["fileChange", "TestIMG"]),
};
</script>

<style>
.editing-catalog img {
  max-width: 500px;
  max-height: 500px;
}
</style>