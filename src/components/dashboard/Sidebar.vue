<template>
  <div class="sidebar">
    <ul class="nav flex-column">
      <li
        class="d-flex flex-column align-items-center p-2"
        v-for="(link, index) in links"
        @click="SelectComponent(link.id, index)"
        :key="index"
      >
        <a
          class="link link-light w-100"
          :class="[selectedClass == index ? 'linkActive' : '']"
          >{{ link.name }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedClass: null,
      links: [
        { name: "Новости", id: "News" },
        { name: "Пользователи", id: "Users" },
        { name: "Проекты", id: "Projects" },
      ],
    };
  },
  methods: {
    SelectComponent(id, index) {
      this.selectedClass = index;
      this.$emit("select-component", id);
    },
  },
};
</script>

<style>
.sidebar {
  width: 200px;
  background: #12355f;
  flex-shrink: 0;
}
</style>