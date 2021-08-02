<template>
  <div class="editing-objects">
    <div class="mb-2">
      <label class="form-label">Название объекта</label>
      <input type="text" class="form-control" placeholder="" />
    </div>
    <div class="mb-2">
      <label class="form-label">Описание объекта</label>
      <VueEditor class="bg-light text-dark" />
    </div>
    <div class="mb-2"><Modal /></div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import { VueEditor } from "vue2-editor";
export default { components: { VueEditor, Modal } };
</script>

<style>
</style>