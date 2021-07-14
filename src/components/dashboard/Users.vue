<template>
  <div class="users-control shadow">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Роль</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th scope="row">{{ user }}</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <select class="form-select">
              <option>Редактор</option>
              <option>Пользователь</option>
              <option>Администратор</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
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
.table {
  color: white !important;
}
.users {
}
</style>