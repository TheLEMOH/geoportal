<template>
  <div class="users-control shadow">
    <div class="p-2 border-bottom">
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Имя</label>
            <input class="form-control" v-model="firstName" />
          </div>
        </div>
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Фамилия</label>
            <input class="form-control" v-model="lastName" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Логин</label>
            <input class="form-control" v-model="password" />
          </div>
        </div>
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Пароль</label>
            <input class="form-control" v-model="login" />
          </div>
        </div>
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Роль</label>
            <select class="form-select" v-model="role">
              <option value="1">Пользователь</option>
              <option value="2">Редактор</option>
              <option value="3">Администратор</option>
            </select>
          </div>
        </div>
      </div>

      <div class="text-end">
        <label class="errors text-warning me-5">{{ error }}</label>
        <button
          class="btn btn-success"
          type="button"
          id="button-addon2"
          @click="AddUser({ firstName, lastName, login, password, role })"
        >
          Добавить
        </button>
      </div>
    </div>

    <table class="table text-white m-0">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Логин</th>
          <th>Пароль</th>
          <th>Роль</th>
          <th><span aria-hidden="true">&times;</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>
            <input
              type="text"
              class="form-control-plaintext text-white"
              v-model="user.firstName"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-white"
              v-model="user.lastName"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-white"
              v-model="user.login"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-white"
              v-model="user.password"
            />
          </td>
          <td>
            <select class="form-select" v-model="user.role">
              <option value="1">Пользователь</option>
              <option value="2">Редактор</option>
              <option value="3">Администратор</option>
            </select>
          </td>
          <td>
            <button class="btn btn-danger" @click="DeleteUser(index)">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-end">
      <button class="btn btn-secondary m-2" type="button" @click="CancelUsers">
        Отменить
      </button>
      <button class="btn btn-success m-2" type="button">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      login: null,
      password: null,
      role: null,
    };
  },
  computed: mapGetters(["users", "error"]),
  methods: mapActions(["AddUser", "DeleteUser", "CancelUsers"]),
};
</script>

<style>
.users-control {
  overflow-y: scroll;
  overflow-x: hidden;
}
.errors {
  transition: 1s;
}
</style>