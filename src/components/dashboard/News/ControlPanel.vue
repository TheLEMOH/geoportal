<template>
  <div class="d-flex justify-content-center p-1 mb-2 mt-2 me-2">
    <button type="button" class="btn btn-success me-1" @click="AddNews">
      Добавить новость
    </button>
    <button type="button" class="btn btn-warning me-1" @click="SaveNews">
      Сохранить
    </button>
    <button type="button" class="btn btn-dark" @click="Cancel">Отменить</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: mapActions(["AddNews", "SaveNews", "Cancel"]),
};
</script>

<style>
</style>