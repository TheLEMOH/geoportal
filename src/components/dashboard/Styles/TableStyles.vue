<template>
  <div class="table-style">
    <table class="table border text-shadow text-white">
      <thead>
        <tr class="text-center">
          <th>Название стиля</th>
          <th><EditIcon /></th>
          <th>&times;</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr
          class=""
          v-for="(styles, index) in styles"
          :key="index"
          :class="[selectedStyle == index ? 'selected-news' : '']"
        >
          <td>{{ styles.title }}</td>
          <td>
            <button
              class="btn btn-warning"
              style="z-index: 5"
              @click="SelectStyle(index)"
            >
              <EditIcon />
            </button>
          </td>
          <td>
            <button
              class="btn btn-danger"
              style="z-index: 5"
              @click="DeleteStyle(index)"
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
import EditIcon from "../EditIcon.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: { EditIcon },
  computed: mapGetters(["styles", "selectedStyle"]),
  methods: mapActions(["DeleteStyle", "SelectStyle"]),
};
</script>

<style>
.table-style {
  max-height: 80vh;
  min-width: 330px;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>