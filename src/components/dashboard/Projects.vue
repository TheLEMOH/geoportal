<template>
  <div class="projects-control text-white m-2">
    <div class="border-bottom">
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
    </div>
    <div class="row mt-2">
      <div class="col" style="width: 200px">
        <h4>Каталоги</h4>
        <draggable
          :list="list"
          :group="{ name: 'catalogs', pull: 'shared', put: false }"
          :invertSwap="true"
          class="list-group"
          style="min-height: 150px"
        >
          <div
            class="list-group-item text-white link border m-0"
            style="background: #6b95c9"
            v-for="element in list"
            :key="element.name"
          >
            <div @click="Click(element)">{{ element.name }}</div>

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
      <div class="col" style="width: 200px">
        <h4>Проекты</h4>
        <draggable
          :list="list2"
          :group="'shared'"
          :invertSwap="true"
          class="list-group"
          style="min-height: 150px"
        >
          <div
            class="list-group-item text-white border link m-0"
            style="background: #6b95c9"
            v-for="element in list2"
            :key="element.name"
            @click="Click(element)"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div class="col" style="width: 500px">
        <Editing :data="selectedEl" />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Editing from "./Editing.vue";
export default {
  components: {
    draggable,
    Editing,
  },
  data() {
    return {
      selectedEl: { name: "", body: "" },
      list: [
        { name: "Красноярский край", body: "1", id: 0, elements: [] },
        { name: "Челябинск", body: "2", id: 1, elements: [] },
        { name: "Москва и Московская область", body: "3", id: 2, elements: [] },
      ],
      list2: [
        { name: "Затопленные районы Красноярского края", body: "4", id: 1 },
        { name: "Парки Московской области", body: "5", id: 2 },
        { name: "Больницы Красноярска", body: "6", id: 0 },
        { name: "Магазины ДНС в Московской области", body: "7", id: 5 },
      ],
    };
  },
  methods: {
    Click(el) {
      console.log(el);
      this.selectedEl = el;
    },
  },
};
</script>

<style>
</style>