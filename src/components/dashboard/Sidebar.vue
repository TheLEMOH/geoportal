<template>
  <div class="sidebar additional border-end">
    <ul class="list-group">
      <li
        class="p-2"
        v-for="(component, index) in availableComponents"
        @click="SelectComponent(component.id, index)"
        :key="index"
      >
        <a
          class="link link-light fs-5"
          :class="[selectedClass == index ? 'linkActive' : '']"
          >{{ component.name }}</a
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
      components: [
        { name: "Новости", id: "News", access: [2, 3] },
        { name: "Каталоги", id: "Catalogs", access: [2, 3] },
        { name: "Проекты", id: "Projects", access: [2, 3] },
        { name: "Статьи", id: "Articles", access: [2, 3] },
        { name: "Пользователи", id: "Users", access: [3] },
        { name: "Главная страница", id: "Carousel", access: [3] },
        { name: "Фотогалерея", id: "Gallery", access: [2, 3] },
        { name: "О проекте", id: "About", access: [2, 3] },
        { name: "Помощь", id: "Help", access: [1, 2, 3] },
      ],
    };
  },
  methods: {
    SelectComponent(id, index) {
      this.selectedClass = index;
      this.$emit("select-component", id);
    },
  },
  computed: {
    availableComponents() {
      const auth = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
      const role = Number(auth.role);
      return this.components.filter((c) => c.access.indexOf(role) != -1);
    },
  },
};
</script>

<style>
.sidebar {
  width: 200px;
  flex-shrink: 0;
}
</style>