<template>
  <div class="editing-news">
    <div class="mb-2">
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
    </div>
    <div class="mb-2">
      <label class="form-label">Текст</label>
      <VueEditor
        class="bg-light text-dark"
        v-model="news[selectedNews].body"
        :editorToolbar="toolbar"
      />
    </div>
    <div class="mb-2">
      <label class="form-label">Изображение</label>
      <input
        type="file"
        class="form-control"
        ref="myFiles"
        multiple
        @change="fileChange"
      />
    </div>
    <TableImage />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import TableImage from "./TableImage.vue";
export default {
  components: { VueEditor, TableImage },
  computed: mapGetters(["news", "newsLength", "selectedNews"]),
  methods: mapActions(["fileChange"]),
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
        ["clean"],
      ],
    };
  },
};
</script>

<style>
.editing-news {
  height: auto;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>