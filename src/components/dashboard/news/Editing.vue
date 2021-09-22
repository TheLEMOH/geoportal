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
        class="bg-light text-dark"
        :editorOptions="editorSettings"
        v-model="news[selectedNews].body"
      />
    </div>
  </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
import ImageResize from "quill-image-resize-module";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
Quill.register("modules/imageResize", ImageResize);
export default {
  components: { VueEditor },
  computed: mapGetters(["news", "newsLength", "selectedNews"]),
  methods: mapActions(["fileChange"]),
  data() {
    return {
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
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
        ["clean"],
      ],
    };
  },
};
</script>

<style>
.ql-editor img {
  min-width: 300px;
  max-width: 600px !important;
}

.ql-editor iframe {
  min-width: 300px !important;
}
</style>