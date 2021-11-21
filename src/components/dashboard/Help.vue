<template>
  <div class="help w-100">
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
        data-bs-target="#presentations-links"
        aria-expanded="false"
        aria-controls="presentations-links"
      >
        Презентации
      </button>

      <div class="collapse" id="presentations-links">
        <a href="https://disk.yandex.ru/d/YNCP0t2MaRDTuQ"> Презентации</a>
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
import Objects from "./help/Objects.vue";
import Links from "./help/Links.vue";
export default {
  components: { Objects, Links },
};
</script>

<style>
.help {
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