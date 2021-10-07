<template>
  <transition name="fade" mode="out-in">
    <div
      class="
        card
        login
        position-absolute position-absolute
        top-0
        start-50
        translate-middle-x
        m-1
        p-3
      "
      v-if="showLoginModal"
    >
      <div class="mb-3">
        <label for="" class="form-label">Логин</label>
        <input
          class="form-control"
          placeholder="Введите логин"
          :value="login"
          @input="updateLogin"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Пароль</label>
        <input
          class="form-control"
          type="password"
          placeholder="Введите пароль"
          :value="password"
          @input="updatePassword"
        />
      </div>
      <div class="d-flex">
        <button class="btn btn-primary me-1" @click="Login">Войти</button>
        <button class="btn btn-secondary" @click="UpdateShowLoginModal(false)">
          Закрыть
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: mapGetters(["user", "login", "password", "showLoginModal"]),
  methods: {
    ...mapActions(["CheckUser", "Login", "Logout", "DisplayMessage","UpdateShowLoginModal"]),
    ...mapMutations(["updateLogin", "updatePassword"]),
  },
};
</script>

<style>
.login {
  z-index: 100;
}
</style>