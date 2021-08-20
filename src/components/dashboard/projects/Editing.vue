<template>
  <div class="project-description text-white">
    <div class="mb-2">
      <label class="form-label">Название проекта</label>
      <input type="text" class="form-control" placeholder="" />
    </div>
    <div class="mb-2">
      <label class="form-label">Описание проекта</label>
      <VueEditor class="bg-light text-dark" />
    </div>
    <div class="mb-2">
      <label class="form-label">Карта</label>
      <input type="file" class="form-control" ref="myFiles" multiple />
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default { components: { VueEditor } };
</script>

<style>
</style>