<template>
  <div class="editing-articles text-black p-2">
    <div class="mb-2">
      <label class="form-label">Название статьи</label>
      <input
        type="text"
        class="form-control"
        placeholder=""
        v-model="articles[selectedArticle].title"
      />
    </div>

    <div class="mb-2">
      <label class="form-label">Текст статьи</label>
      <VueEditor
        v-model="articles[selectedArticle].body"
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
        @change="AddImageArticle"
      />
    </div>

    <div class="mb-2">
      <div class="row row-cols-md-3 row-cols-lg-5">
        <div
          class="col"
          v-for="(img, index) in articles[selectedArticle].img"
          :key="img"
        >
          <Picture
            :data="imgURLs.articles + img"
            :index="index"
            :type="'url'"
            :Delete="DeleteImageFromArticle"
          />
        </div>
        <div
          class="col"
          v-for="(imgBase, index) in articles[selectedArticle].imgBase"
          :key="index"
        >
          <Picture
            :data="imgBase"
            :index="index"
            :type="'base'"
            :Delete="DeleteImageFromArticle"
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
  components: { VueEditor, Picture },
  computed: mapGetters(["articles", "selectedArticle", "defaultToolbar"]),
  methods: mapActions([
    "fileChange",
    "AddImageArticle",
    "DeleteImageFromArticle",
  ]),
  data() {
    return {
      imgURLs: imgURLs,
    };
  },
};
</script>

<style>
</style>