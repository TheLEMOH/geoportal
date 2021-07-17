<template>
  <div class="news-control">
    <div class="p-2 border-bottom">
      <div class="mb-2">
        <label class="form-label text-white">Название</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-2">
        <label class="form-label text-white">Текст</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="text-end">
        <button class="btn btn-success" type="button" id="button-addon2">
          Добавить
        </button>
      </div>
    </div>
    <table class="table shadow">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th>Дата публикации</th>
          <th>Автор</th>
          <th>Название</th>
          <th>Текст</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(news, index) in news" :key="index">
          <th scope="row">{{ news }}</th>
          <td>12.07.2021</td>
          <td>Понасенков</td>
          <td>Обновление 2.0</td>
          <td>
            Всей швали моих критиков Моих завистников: Вы думаете, что с
            человеком Который вот до такой степени Точно исследует тему, можно
            спорить Вы думаете, что я вас не переиграю? Что я вас не уничтожу? Я
            вас уничтожу!
          </td>
          <td>
            <button class="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return { news: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
  },
};
</script>

<style>
.news-control {
  overflow-y: scroll;
}
.table {
  color: white;
}
</style>