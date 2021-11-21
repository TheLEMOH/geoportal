<template>
  <div class="editing-projects p-2">
    <div class="mb-2">
      <label class="form-label">Название проекта</label>
      <input
        type="text"
        class="form-control"
        placeholder=""
        v-model="projects[selectedProject].title"
      />
    </div>
    <div class="mb-2">
      <label class="form-label">Описание проекта</label>
      <VueEditor
        v-model="projects[selectedProject].description"
        :editorToolbar="defaultToolbar"
      />
    </div>
    <div class="mb-2">
      <label class="form-label">Карта</label>
      <select class="form-select" v-model="projects[selectedProject].map">
        <option v-for="(m, index) in maps" :key="index" :value="m">
          {{ m }}
        </option>
      </select>
    </div>
    <div class="mb-2">
      <label class="form-label">Каталог</label>
      <select class="form-select" v-model="projects[selectedProject].section">
        <option v-for="(c, index) in catalogs" :key="index" :value="c._id">
          {{ c.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { VueEditor } from "vue2-editor";
export default {
  components: { VueEditor },
  data() {
    return {
      maps: null,
    };
  },
  mounted() {
    this.maps = this.CreateMapList();
  },
  computed: {
    ...mapGetters([
      "projects",
      "selectedProject",
      "existingMaps",
      "catalogs",
      "defaultToolbar",
    ]),
  },
  methods: {
    CreateMapList() {
      const maps = [...this.existingMaps];
      const used = this.projects[this.selectedProject].map;
      if (used) {
        maps.unshift(used);
      }
      return maps;
    },
  },
};
</script>

<style>
</style>