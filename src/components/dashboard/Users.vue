<template>
  <div class="users-control w-100">
    <div class="p-2 border-bottom border-dark">
      <div class="mb-2">
        <div class="row">
          <div class="col-md">
            <label class="form-label">Имя</label>
            <input
              class="form-control"
              :value="firstname"
              @input="updateFirstname"
            />
          </div>
          <div class="col-md">
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
          <div class="col-md">
            <label class="form-label">Логин</label>
            <input
              class="form-control"
              :value="newLogin"
              @input="updateNewLogin"
            />
          </div>
          <div class="col-md">
            <label class="form-label">Пароль</label>
            <input
              class="form-control"
              :value="newPassword"
              @input="updateNewPassword"
            />
          </div>
          <div class="col-md">
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
          <button
            class="btn btn-success"
            type="button"
            id="button-addon2"
            @click="AddUser"
            :disabled="!usersLoaded"
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
              class="form-control"
              :value="user.firstName"
              @input="
                UpdateField({
                  event: $event,
                  index,
                  field: 'firstName',
                })
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              :value="user.lastName"
              @input="
                UpdateField({
                  event: $event,
                  index,
                  field: 'lastName',
                })
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              :value="user.login"
              @input="
                UpdateField({
                  event: $event,
                  index,
                  field: 'login',
                })
              "
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              :value="user.password"
              :disabled="!user.changePassword"
              @input="
                UpdateField({
                  event: $event,
                  index,
                  field: 'password',
                })
              "
            />
          </td>
          <td>
            <input
              type="checkbox"
              class="form-check-input"
              :value="user.changePassword"
              @change="
                UpdateField({
                  event: $event,
                  index,
                  field: 'changePassword',
                })
              "
            />
          </td>
          <td style="min-width: 190px">
            <select
              class="form-select"
              :value="user.role"
              @change="
                UpdateField({
                  event: $event,
                  index,
                  field: 'role',
                })
              "
            >
              <option value="1">Пользователь</option>
              <option value="2">Редактор</option>
              <option value="3">Администратор</option>
            </select>
          </td>
          <td>
            <button
              class="btn btn-danger"
              @click="DeleteUser(index)"
              :disabled="!usersLoaded"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-end">
      <button
        class="btn btn-secondary m-2"
        type="button"
        @click="CancelUsers"
        :disabled="!usersLoaded"
      >
        Отменить
      </button>
      <button
        class="btn btn-success m-2"
        type="button"
        @click="SaveUsers"
        :disabled="!usersLoaded"
      >
        Сохранить
      </button>
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
    "firstname",
    "lastname",
    "role",
    "newPassword",
    "newLogin",
    "usersLoaded",
  ]),
  methods: {
    ...mapActions([
      "AddUser",
      "DeleteUser",
      "CancelUsers",
      "SaveUsers",
      "UpdateField",
    ]),
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