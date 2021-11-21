<template>
  <div class="Test">
    <div class="container pt-2">
      <button
        class="btn button-collapse"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#help-objects"
        aria-expanded="false"
        aria-controls="help-objects"
      >
        Редактирование
      </button>

      <div class="collapse" id="help-objects">
        <Objects />
      </div>

      <button
        class="btn button-collapse"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#help-links"
        aria-expanded="false"
        aria-controls="help-links"
      >
        Ссылки
      </button>

      <div class="collapse" id="help-links">
        <Links />
      </div>
    </div>
  </div>
</template>

<script>
import Objects from "../components/dashboard/help/Objects.vue";
import Links from "../components/dashboard/help/Links.vue";
export default {
  components: { Objects, Links },
};
</script>

<style>
.Test {
  overflow-y: scroll;
}

.button-collapse {
  width: 100%;
  border: 1px solid silver;
  background: white;
}

.button-collapse .collapse {
  background: silver !important;
}
</style>