<template>
  <div class="catalogs">
    <ul class="nav flex-column">
      <li
        class="d-flex flex-column align-items-center p-2"
        v-for="(link, index) in 6"
        :key="index"
      >
        <a
          class="link link-light w-100"
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
export default {};
</script>

<style>
</style>