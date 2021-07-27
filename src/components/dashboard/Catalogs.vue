<template>
  <div class="catalogs-control text-white m-2">
    <!--  <div class="border-bottom">
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Название</label>
            <input class="form-control" />
          </div>
        </div>
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Описание</label>
            <input class="form-control" />
          </div>
        </div>
      </div>
    </div> -->
    <div class="row mt-2">
      <div class="col" style="width: 500px">
        <div class="d-flex mb-2">
          <h4>Каталоги</h4>
          <input
            type="text"
            class="form-control ms-5"
            placeholder="Поиск"
            v-model="searchCatalog"
          />
        </div>
        <draggable
          :list="catalogsAfter"
          :group="{ name: 'catalogs', pull: 'shared', put: false }"
          :invertSwap="true"
          class="list-group"
          style="min-height: 150px"
        >
          <div
            class="list-group-item text-white link border m-0"
            style="background: #6b95c9"
            v-for="element in catalogsAfter"
            :key="element.name"
          >
            {{ element.name }}

            <draggable
              :list="element.elements"
              :group="'shared'"
              :invertSwap="true"
              class="list-group"
            >
              <div
                class="list-group-item text-white border link m-0"
                style="background: #6b95c9"
                v-for="el in element.elements"
                :key="el.name"
                @click="Click(el)"
              >
                {{ el.name }}
              </div>
            </draggable>
          </div>
        </draggable>
      </div>
      <div class="col" style="width: 500px">
        <div class="d-flex mb-2">
          <h4>Проекты</h4>
          <input
            type="text"
            class="form-control ms-5"
            placeholder="Поиск"
            v-model="searchProject"
          />
        </div>
        <draggable
          :list="projectsAfter"
          :group="'shared'"
          :invertSwap="true"
          class="list-group"
          style="min-height: 150px"
        >
          <div
            class="list-group-item text-white border link m-0"
            style="background: #6b95c9"
            v-for="element in projectsAfter"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <!-- <div class="col" style="width: 500px">
        <Editing :data="selectedEl" />
      </div> -->
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
/* import Editing from "./Editing.vue"; */
export default {
  components: {
    draggable,
    /*     Editing, */
  },
  data() {
    return {
      selectedEl: { name: "", body: "" },
      searchCatalog: "",
      searchProject: "",
      catalogs: [
        { name: "Красноярский край", body: "1", id: 0, elements: [] },
        { name: "Челябинск", body: "2", id: 1, elements: [] },
        { name: "Москва и Московская область", body: "3", id: 2, elements: [] },
      ],
      projects: [
        { name: "Затопленные районы Красноярского края", body: "1", id: 1 },
        { name: "Парки Московской области", body: "2", id: 2 },
        { name: "Больницы Красноярска", body: "0", id: 0 },
        { name: "Магазины ДНС в Московской области", body: "3", id: 3 },
        { name: "Магазины Командор", body: "4", id: 4 },
        { name: "Парки и зоны отдыха в городе Челябинск", body: "5", id: 5 },
        { name: "Больницы Октябрьского района", body: "6", id: 6 },
        { name: "Пункты вакцинации", body: "7", id: 7 },
      ],
    };
  },
  methods: {
    Click(el) {
      console.log(el);
      this.selectedEl = el;
    },
  },
  computed: {
    catalogsAfter() {
      return this.catalogs.filter(
        (item) => item.name.indexOf(this.searchCatalog) !== -1
      );
    },
    projectsAfter() {
      return this.projects.filter(
        (item) => item.name.indexOf(this.searchProject) !== -1
      );
    },
  },
};
</script>

<style>
.projects-control {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>