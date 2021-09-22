<template>
  <div class="sidebar-map additional text-white">
    <ul class="nav nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item flex-fill" role="presentation">
        <button
          class="nav-link rounded-0 w-100 active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Каталоги
        </button>
      </li>
      <li class="nav-item flex-fill" role="presentation">
        <button
          class="nav-link rounded-0 w-100"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Подложки
        </button>
      </li>
      <li class="nav-item flex-fill" role="presentation">
        <button
          class="nav-link rounded-0 w-100"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          Легенда
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <Catalogs />
      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <BaseMap />
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        <Legend />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Catalogs from "./Catalogs";
import Legend from "./Legend";
import BaseMap from "./BaseMap";
export default {
  components: { Catalogs, Legend, BaseMap },
  computed: mapGetters(["currentPanel"]),
  methods: {},
};
</script>

<style>
.nav-pills .nav-link.active {
  color: black;
  background-color: #ffffff !important;
}

.sidebar-map {
  width: 350px;
  flex-shrink: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 20;
}
</style>