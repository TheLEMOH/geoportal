<template>
  <div class="editing">
    <h4>Редактирование</h4>
    <div class="row">
      <div class="col">
        <div class="mb-2">
          <table class="table text-white m-0">
            <thead>
              <tr>
                <th>Название</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <textarea
                    type="text"
                    class="form-control-plaintext text-white"
                    style="min-width: 250px"
                    v-model="data.name"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control-plaintext text-white"
                    v-model="data.body"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>