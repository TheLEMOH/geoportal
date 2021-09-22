<template>
  <div class="catalogs-map">
    <ul class="list-group">
      <li class="p-1" v-for="(c, index) in TestList" :key="index">
        <a
          class="link link-light fs-5"
          data-bs-toggle="collapse"
          :href="'#collapseCatalog' + index"
          role="button"
          aria-expanded="false"
          :aria-controls="'#collapseCatalog' + index"
          >{{ c.title }}</a
        >
        <div class="collapse" :id="'collapseCatalog' + index">
          <Project v-for="(p, index) in c.children" :key="index" :data="p" />

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
    this.clearProjectsToDisplay();
    const catalogs = `${this.$route.query.catalogs}`;
    this.UpdateOpenedCatalogs(catalogs);
  },
  computed: {
    ...mapGetters(["catalogs", "projects", "openedCatalogs"]),
    TestList() {
      const c = this.catalogs.map((c) => {
        return { title: c.title, id: c._id, children: [] };
      });

      const lc = c.length;
      const lp = this.projects.length;

      for (let i = 0; i < lc; i++) {
        for (let j = 0; j < lp; j++) {
          if (c[i].id == this.projects[j].section) {
            c[i].children.push(this.projects[j]);
          }
        }
      }

      return c;
    },
  },
  methods: {
    ...mapActions(["UpdateOpenedCatalogs", "OpenCatalogs"]),
    ...mapMutations(["clearProjectsToDisplay"]),
  },
};
</script>

<style>
</style>