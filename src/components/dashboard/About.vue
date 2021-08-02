<template>
  <div class="about-control w-100 p-2">
    <VueEditor
      class="bg-light"
      :editorToolbar="toolbar"
      v-model="about[0].body"
      v-if="about"
    />
    <div class="text-end">
      <button class="btn btn-secondary m-2" type="button">Отменить</button>
      <button class="btn btn-success m-2" type="button" @click="EditAbout">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { VueEditor } from "vue2-editor";
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
        ["clean"],
      ],
    };
  },
  components: { VueEditor },
  computed: mapGetters(["about"]),
  methods: mapActions(["EditAbout"]),
};
</script>

<style>
</style>