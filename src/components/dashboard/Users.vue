<template>
  <div class="users-control w-100 text-shadow">
    <div class="p-2 border-bottom border-dark">
      <div class="mb-2">
        <div class="row">
          <div class="col">
            <label class="form-label">Имя</label>
            <input
              class="form-control"
              :value="firstname"
              @input="updateFirstname"
            />
          </div>
          <div class="col">
            <label class="form-label">Фамилия</label>
            <input
              class="form-control"
              :value="lastname"
              @input="updateLastname"
            />
          </div>
        </div>
      </div>
      <div class="mb-2">
        <div class="row">
          <div class="col">
            <label class="form-label">Логин</label>
            <input
              class="form-control"
              :value="newLogin"
              @input="updateNewLogin"
            />
          </div>
          <div class="col">
            <label class="form-label">Пароль</label>
            <input
              class="form-control"
              :value="newPassword"
              @input="updateNewPassword"
            />
          </div>
          <div class="col">
            <label class="form-label">Роль</label>
            <select class="form-select" :value="role" @input="updateRole">
              <option value="1">Пользователь</option>
              <option value="2">Редактор</option>
              <option value="3">Администратор</option>
            </select>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <div class="text-end">
          <label class="errors text-warning me-2">{{ error }}</label>
          <button
            class="btn btn-success"
            type="button"
            id="button-addon2"
            @click="AddUser"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>

    <table class="table m-0">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Логин</th>
          <th>Пароль</th>
          <th>Сменить пароль</th>
          <th>Роль</th>
          <th><span aria-hidden="true">&times;</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>
            <input
              type="text"
              class="form-control-plaintext text-shadow"
              v-model="user.firstName"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-shadow"
              v-model="user.lastName"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-shadow"
              v-model="user.login"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-shadow"
              v-model="user.password"
              :disabled="!user.changePassword"
            />
          </td>
          <td>
            <input
              type="checkbox"
              class="form-check-input"
              v-model="user.changePassword"
            />
          </td>
          <td style="min-width: 190px">
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
import { mapMutations } from "vuex";
export default {
  computed: mapGetters([
    "users",
    "error",
    "firstname",
    "lastname",
    "role",
    "newPassword",
    "newLogin",
  ]),
  methods: {
    ...mapActions(["AddUser", "DeleteUser", "CancelUsers"]),
    ...mapMutations([
      "updateFirstname",
      "updateLastname",
      "updateNewLogin",
      "updateNewPassword",
      "updateRole",
    ]),
  },
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