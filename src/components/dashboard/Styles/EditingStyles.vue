<template>
  <div class="editing-styles">
    <div class="mb-2">
      <div class="row">
        <div class="col-auto">
          <label class="form-label text-white">Название стиля</label>
          <input
            type="text"
            class="form-control"
            v-model="styles[selectedStyle].title"
          />
        </div>
      </div>
    </div>
    <div class="mb-2">
      <div class="row">
        <div class="col-auto">
          <label class="form-label text-white">Цвет заливки</label>
          <input
            type="color"
            class="form-control form-control-color"
            v-model="styles[selectedStyle].fill"
          />
        </div>
        <div class="col-auto">
          <label class="form-label text-white">Прозрачность заливки</label>
          <input
            type="number"
            class="form-control"
            v-model="styles[selectedStyle].fillOpacity"
          />
        </div>
      </div>
    </div>
    <div class="mb-2">
      <div class="row">
        <div class="col-auto">
          <label class="form-label text-white">Цвет обводки</label>
          <input
            type="color"
            class="form-control form-control-color"
            v-model="styles[selectedStyle].stroke"
          />
        </div>
        <div class="col-auto">
          <label class="form-label text-white">Толщина обводки</label>
          <input
            type="number"
            class="form-control"
            v-model="styles[selectedStyle].strokeWidth"
          />
        </div>
        <div class="col-auto mb-2">
          <label class="form-label text-white">Прозрачность обводки</label>
          <input
            type="number"
            class="form-control"
            v-model="styles[selectedStyle].strokeOpacity"
          />
        </div>
        <div class="col-auto mb-2">
          <label class="form-label text-white">Тип обводки</label>
          <select
            class="form-control"
            v-model="styles[selectedStyle].strokeType"
          ></select>
        </div>
      </div>
    </div>
    <div class="mb-2">
      <div class="row">
        <div class="col-auto">
          <label class="form-label text-white">Пиктограмма</label>
          <input type="file" class="form-control" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
/* import { mapActions } from "vuex"; */
export default {
  computed: mapGetters(["styles", "selectedStyle"]),
};
</script>

<style>
</style>