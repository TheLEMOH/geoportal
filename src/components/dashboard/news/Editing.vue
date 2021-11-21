<template>
  <div class="editing-news text-black p-2">
    <div class="row">
      <div class="col-2" style="min-width: 160px">
        <label class="form-label">Дата публикации</label>
        <input
          type="text"
          class="form-control"
          placeholder=""
          v-model="news[selectedNews].date"
        />
      </div>
      <div class="col">
        <label class="form-label">Название</label>
        <input
          type="text"
          class="form-control"
          placeholder=""
          v-model="news[selectedNews].title"
        />
      </div>
    </div>

    <div class="mb-2">
      <label class="form-label">Текст</label>
      <VueEditor
        v-model="news[selectedNews].body"
        :editorToolbar="defaultToolbar"
      />
    </div>

    <div class="mb-2">
      <label for="formFile" class="form-label">Изображение</label>
      <input
        class="form-control"
        type="file"
        accept=".png, .jpg, .jpeg"
        multiple
        @change="TestImgNews"
      />
    </div>

    <div class="mb-2">
      <div class="row row-cols-md-3 row-cols-lg-5">
        <div
          class="col"
          v-for="(img, index) in news[selectedNews].img"
          :key="img"
        >
          <Picture
            :data="imgURLs.news + img"
            :index="index"
            :type="'url'"
            :Delete="DeleteImageFromNews"
          />
        </div>
        <div
          class="col"
          v-for="(imgBase, index) in news[selectedNews].imgBase"
          :key="index"
        >
          <Picture
            :data="imgBase"
            :index="index"
            :type="'base'"
            :Delete="DeleteImageFromNews"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import Picture from "../patterns/Picture.vue";
import { imgURLs } from "../../../store/modules/serverProcedure/URL";
export default {
  data() {
    return {
      imgURLs: imgURLs,
    };
  },
  components: { VueEditor, Picture },
  computed: mapGetters([
    "news",
    "newsLength",
    "selectedNews",
    "defaultToolbar",
  ]),
  methods: mapActions(["fileChange", "TestImgNews", "DeleteImageFromNews"]),
};
</script>

<style>
.editing-news {
  min-width: 500px;
  max-width: 800px;
}
</style>