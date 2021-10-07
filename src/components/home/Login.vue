<template>
  <div class="flex-fill p-0 m-0 text-white">
    <div
      class="link-light float-end"
      v-if="!user"
      @click="UpdateShowLoginModal(true)"
    >
      <Person />
    </div>
    <!-- Dropbutton -->
    <div class="dropdown float-end" v-if="user">
      <a
        class="link link-light dropdown-toggle p-1 fs-4"
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
          <button
            class="dropdown-item"
            @click="DisplayMessage('Тест сообщения')"
          >
            Тест сообщения
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Person from "../icons/Person.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  components: { Person },
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions([
      "CheckUser",
      "Logout",
      "DisplayMessage",
      "UpdateShowLoginModal",
    ]),
    ...mapMutations(["updateLogin", "updatePassword"]),
  },
  mounted() {
    this.CheckUser();
  },
};
</script>

<style>
</style>