<template>
  <div class="flex-fill p-0 m-0">
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
          <div class="modal-header text-white additional">
            <h5 class="modal-title" id="exampleModalLabel">Вход</h5>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <div class="modal-body background">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                :value="login"
                @input="updateLogin"
              />
              <label for="floatingInput">Имя пользователя</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                :value="password"
                @input="updatePassword"
              />
              <label for="floatingPassword">Пароль</label>
            </div>
          </div>

          <div class="modal-footer additional">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Закрыть
            </button>
            <button
              type="button"
              class="btn background text-white"
              @click="Login"
            >
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
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  components: { Person },
  computed: mapGetters(["user", "login", "password", "showMessage"]),
  methods: {
    ...mapActions(["CheckUser", "Login", "Logout", "DisplayMessage"]),
    ...mapMutations(["updateLogin", "updatePassword"]),
  },
  mounted() {
    this.CheckUser();
  },
};
</script>

<style>
</style>