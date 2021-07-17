<template>
  <div class="users-control shadow">
    <!--  <div class="p-2 border-bottom">
      <div class="input-group text-white">
        <span class="input-group-text">Имя/Фамилия/Пароль</span>
        <input type="text" aria-label="First name" class="form-control" />
        <input type="text" aria-label="Last name" class="form-control" />
        <input type="text" aria-label="Last name" class="form-control" />
        <button class="btn btn-success" type="button" id="button-addon2">
          Добавить
        </button>
      </div>
    </div> -->

    <div class="p-2 border-bottom">
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Имя</label>
            <input class="form-control" />
          </div>
        </div>
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Фамилия</label>
            <input class="form-control" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Пароль</label>
            <input class="form-control" />
          </div>
        </div>
        <div class="col">
          <div class="mb-2">
            <label class="form-label text-white">Роль</label>
            <select class="form-select">
              <option>Редактор</option>
              <option>Пользователь</option>
              <option>Администратор</option>
            </select>
          </div>
        </div>
      </div>

      <div class="text-end">
        <button class="btn btn-success" type="button" id="button-addon2">
          Добавить
        </button>
      </div>
    </div>

    <table class="table text-white m-0">
      <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Пароль</th>
          <th>Роль</th>
          <th><span aria-hidden="true">&times;</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th scope="row">{{ user }}</th>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-white"
              value="Швяданько"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-white"
              value="Оксана"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control-plaintext text-white"
              value="qwerty123"
            />
          </td>
          <td>
            <select class="form-select">
              <option>Редактор</option>
              <option>Пользователь</option>
              <option>Администратор</option>
            </select>
          </td>
          <td>
            <button class="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-end">
      <button class="btn btn-secondary m-2" type="button" id="button-addon2">
        Отменить
      </button>
      <button class="btn btn-success m-2" type="button" id="button-addon2">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style>
.users-control {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>