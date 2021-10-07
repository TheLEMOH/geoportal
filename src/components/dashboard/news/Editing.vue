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
      <VueEditor v-model="news[selectedNews].body" :editorToolbar="toolbar" />
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
            :data="`http://enplus.petyaogurkin.keenetic.pro/api/images/news/${img}`"
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
export default {
  data() {
    return {
      toolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [{ color: [] }],
        ["link"],
        ["clean"],
      ],
    };
  },
  components: { VueEditor, Picture },
  computed: mapGetters(["news", "newsLength", "selectedNews"]),
  methods: mapActions(["fileChange", "TestImgNews", "DeleteImageFromNews"]),
};
</script>

<style>
.editing-news {
  min-width: 500px;
  max-width: 800px;
}
</style>