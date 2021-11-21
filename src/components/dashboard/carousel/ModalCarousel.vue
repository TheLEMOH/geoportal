<template>
  <transition name="fade">
    <div
      class="
        modal-add-carousel
        position-absolute
        top-50
        start-50
        translate-middle
        bg-white
        p-3
        shadow
        rounded
        border border-primary border-2
      "
      v-if="openedModalCarousel"
    >
      <div class="mb-3">
        <h3>Выберите каталог</h3>
        <label class="mb-3"> Номер секции: {{ selectedCarouselSection }}</label>
        <select class="form-select mb-3" @change="AddCatalogInCarousel">
          <option disabled selected>Выберите каталог</option>
          <option
            v-for="(catalog, index) in catalogs"
            :key="index"
            :value="catalog._id"
          >
            {{ catalog.title }}
          </option>
        </select>
        <hr />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(catalog, index) in carousel[selectedCarouselSection]
              .sections"
            :key="index"
          >
            <label class="me-2">{{ catalog.title }}</label>
            <button
              class="
                btn btn-danger btn-sm
                rounded-pill
                float-end
                carousel-button
              "
              @click="DeleteCatalogFromCarousel(index)"
            >
              &times;
            </button>
          </li>
        </ul>
      </div>
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        @click="CloseModalCarousel"
      >
        Закрыть
      </button>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "openedModalCarousel",
      "carousel",
      "selectedCarouselSection",
      "catalogs",
    ]),
  },
  methods: {
    ...mapActions([
      "CloseModalCarousel",
      "AddCatalogInCarousel",
      "DeleteCatalogFromCarousel",
    ]),
  },
};
</script>

<style>
.modal-add-carousel {
  width: 400px;
  z-index: 1000;
}
</style>