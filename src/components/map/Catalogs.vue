<template>
  <div class="catalogs-map">
    <ul class="list-group">
      <li
        class="p-2 border-bottom"
        v-for="(c, indexC) in ListOfProjectCatalogs"
        :key="indexC"
      >
        <a
          class="link link-light fs-5"
          data-bs-toggle="collapse"
          :href="'#collapseCatalog' + c.id"
          role="button"
          aria-expanded="false"
          :aria-controls="'#collapseCatalog' + c.id"
          >{{ c.title }}</a
        >
        <div class="collapse" :id="'collapseCatalog' + c.id">
          <Project
            v-for="(p, index) in c.children"
            :key="index"
            :data="p"
            :index="index"
          />

          <div class="null-children ms-2" v-if="c.children.length == 0">
            Каталог в стадии наполнения...
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Project from "./Project.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  components: { Project },
  mounted() {
    this.OpenProject();
    this.OpenCatalog();
  },
  computed: {
    ...mapGetters([
      "catalogs",
      "projects",
      "projectsToDisplay",
      "openedCatalogs",
    ]),
    ListOfProjectCatalogs() {
      const c = this.catalogs.map((c) => {
        return { title: c.title, id: c._id, children: [] };
      });
      const lc = c.length;
      const lp = this.projectsToDisplay.length;
      for (let i = 0; i < lc; i++) {
        for (let j = 0; j < lp; j++) {
          if (c[i].id == this.projectsToDisplay[j].section) {
            c[i].children.push(this.projectsToDisplay[j]);
          }
        }
      }
      return c;
    },
  },
  methods: {
    ...mapActions(["UpdateOpenedCatalogs", "OpenCatalog", "OpenProject"]),
    ...mapMutations(["clearProjectsToDisplay"]),
  },
};
</script>

<style>
</style>