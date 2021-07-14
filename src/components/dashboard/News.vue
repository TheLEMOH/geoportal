<template>
  <div class="news-control">
    <table class="table shadow">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Дата публикации</th>
          <th scope="col">Автор</th>
          <th scope="col">Название</th>
          <th scope="col">Текст</th>
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