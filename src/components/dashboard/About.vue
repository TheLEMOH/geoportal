<template>
  <div class="about-control w-100 p-2">
    <VueEditor
      class="bg-light"
      :editorToolbar="defaultToolbar"
      v-model="about[0].body"
      v-if="about"
    />
    <div class="text-end">
      <button
        class="btn btn-success m-2"
        type="button"
        :disabled="!aboutLoaded"
        @click="EditAbout"
      >
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
    return {};
  },
  components: { VueEditor },
  computed: mapGetters(["about", "aboutLoaded", "defaultToolbar"]),
  methods: mapActions(["EditAbout"]),
};
</script>

<style>
</style>