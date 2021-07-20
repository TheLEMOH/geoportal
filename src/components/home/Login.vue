<template>
  <div class="w-100 p-0 m-0">
    <a
      class="link-light float-end"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      v-if="!isHere"
    >
      <Person />
    </a>

    <!-- Dropbutton -->
    <div class="dropdown float-end">
      <a
        class="link link-light dropdown-toggle p-1"
        href="#"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        v-if="isHere"
      >
        Администратор
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <a class="dropdown-item" href="/dashboard"
            >Редактирование материалов</a
          >
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
                class="form-control"
                placeholder="name@example.com"
                v-model="login"
              />
              <label for="floatingInput">Имя пользователя</label>
            </div>
            <div class="form-floating">
              <input
                class="form-control"
                placeholder="Password"
                v-model="password"
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
export default {
  components: { Person },
  data() {
    return {
      login: null,
      password: null,
      isHere: false,
    };
  },
  methods: {
    Valid() {
      if (this.login == "1" && this.password == "1") {
        console.log("УСПЕХ");
        this.isHere = true;
        this.$refs.Modal.classList.toggle("show");
        document
          .getElementsByClassName("modal-backdrop")[0]
          .classList.toggle("show");
      }
    },
  },
};
</script>

<style>
</style>