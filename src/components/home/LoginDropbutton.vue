<template>
  <button class="btn dropdown fs-4" v-if="user">
    <a
      class="link link-light dropdown-toggle"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ user.name }}
    </a>

    <ul class="dropdown-menu dropdown-menu-end">
      <li>
        <router-link class="dropdown-item" :to="{ name: 'Dashboard' }"
          >Редактирование материалов</router-link
        >
        <a class="dropdown-item" href="/" @click="Logout">Выйти</a>
      </li>
    </ul>
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions([
      "CheckUser",
      "Logout",
      "DisplayMessage",
      "UpdateShowLoginModal",
    ]),
  },
};
</script>

<style>
</style>