<template>
  <table class="table table-striped border">
    <thead>
      <tr class="text-center">
        <th>{{ tableHead}}</th>
        <th><EditIcon /></th>
        <th>&times;</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(object, index) in objects"
        :class="[selected == index ? 'selected' : '']"
        :key="index"
        :id="object._id"
      >
        <td>
          <label class="td-label" v-if="object.action == 'loading'"
            >Сохранение...</label
          >
          <label class="td-label" v-else>{{ object.title }}</label>
        </td>
        <td class="text-center">
          <button
            class="btn btn-warning"
            style="z-index: 1"
            @click="SelectFunc(index)"
            :disabled="object.action == 'loading' ? true : false"
          >
            <EditIcon />
          </button>
        </td>
        <td class="text-center">
          <button
            class="btn btn-danger"
            style="z-index: 1"
            @click="DeleteFunc(index)"
            :disabled="object.action == 'loading' ? true : false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import EditIcon from "../../icons/EditIcon.vue";
export default {
  props: [
    "tableHead",
    "objects",
    "selected",
    "SelectFunc",
    "DeleteFunc",
    "column",
  ],
  components: { EditIcon },
};
</script>

<style>
tbody td {
  min-width: 50px;
  max-width: 130px;
  word-break: break-all;
}

.table-news {
  height: 82vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>