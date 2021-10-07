<template>
  <div
    class="image-pattern position-relative rounded"
    style="width: 100%; height: 100%"
  >
    <button
      class="btn btn-danger position-absolute top-0 end-0"
      @click="Delete({ index, array: type })"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <img :src="data" class="rounded" />
  </div>
</template>

<script>
export default {
  props: ["data", "index", "type", "Delete"],
};
</script>

<style>
.image-pattern img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>