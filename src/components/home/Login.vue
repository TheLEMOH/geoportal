<template>
  <div class="w-100 p-0 m-0">
    <a
      class="link-light float-end"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      v-if="!user"
    >
      <Person />
    </a>

    <!-- Dropbutton -->
    <div class="dropdown float-end" v-if="user">
      <a
        class="link link-light dropdown-toggle p-1"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ user.name }}
      </a>

      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="/dashboard"
            >Редактирование материалов</a
          >
          <a class="dropdown-item" href="/" @click="Logout">Выйти</a>
        </li>
      </ul>
    </div>

    <!-- Modal -->
    <div
      ref="Modal"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" ref="Modalr">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Вход</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                v-model="login"
                @keypress="isLetter($event)"
              />
              <label for="floatingInput">Имя пользователя</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                v-model="password"
                @keypress="isLetter($event)"
              />
              <label for="floatingPassword">Пароль</label>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Закрыть
            </button>
            <button type="button" class="btn btn-primary" @click="Valid">
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Person from "../icons/Person.vue";
import { mapGetters } from "vuex";
export default {
  components: { Person },
  data() {
    return {
      login: null,
      password: null,
    };
  },
  computed: mapGetters(["user"]),
  mounted() {
    this.$store.dispatch("CheckUser");
  },
  methods: {
    Logout() {
      this.$store.dispatch("Logout");
    },
    Valid() {
      if (this.login && this.password) {
        this.$store.dispatch("Login", {
          login: this.login,
          password: this.password,
        });

        this.$refs.Modal.classList.toggle("show");
        document
          .getElementsByClassName("modal-backdrop")[0]
          .classList.toggle("show");
      }
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z-0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
  },
};
</script>

<style>
</style>