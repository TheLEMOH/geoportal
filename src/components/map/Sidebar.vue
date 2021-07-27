<template>
  <div class="sidebar additional text-white">
    <ul class="nav flex-column">
      <li
        class="d-flex flex-column align-items-center p-2"
        v-for="(link, index) in links"
        :key="index"
      >
        <a
          class="link link-light w-100"
          :class="[selectedClass == index ? 'linkActive' : '']"
          data-bs-toggle="collapse"
          :href="'#collapseExample' + index"
          role="button"
          aria-expanded="false"
          :aria-controls="'#collapseExample' + index"
          >Каталог {{ index }}</a
        >

        <div class="collapse" :id="'collapseExample' + index">
          Здесь находятся проекты для каталога {{ index }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedClass: null,
      links: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {
    SelectComponent(index) {
      this.selectedClass = index;
    },
  },
};
</script>

<style>
.sidebar {
  width: 200px;
  flex-shrink: 0;
  z-index: 1;
}
</style>