<template>
  <div class="table text-shadow">
    <table class="table table-striped border">
      <thead>
        <tr class="text-center">
          <th>Название каталога</th>
          <th><EditIcon /></th>
          <th>&times;</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class=""
          v-for="(catalog, index) in catalogs"
          :class="[selectedCatalog == index ? 'selected' : '']"
          :key="index"
        >
          <td>
            <label class="td-label" v-if="catalog.action == 'loading'"
              >Сохранение...</label
            >
            <label class="td-label" v-else>{{ catalog.title }}</label>
          </td>
          <td class="text-center">
            <button
              class="btn btn-warning"
              style="z-index: 1"
              @click="SelectCatalog(index)"
              :disabled="catalog.action == 'loading' ? true : false"
            >
              <EditIcon />
            </button>
          </td>
          <td class="text-center">
            <button
              class="btn btn-danger"
              style="z-index: 1"
              @click="DeleteCatalog(index)"
              :disabled="catalog.action == 'loading' ? true : false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EditIcon from "../../icons/EditIcon.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: { EditIcon },
  computed: mapGetters(["catalogs", "selectedCatalog"]),
  methods: mapActions(["SelectCatalog", "DeleteCatalog"]),
};
</script>

<style>
.table-catalog {
  max-height: 82vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>