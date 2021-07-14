<template>
  <div class="container news">
    <div
      class="row justify-content-md-center mt-2"
      v-for="(news, index) in news"
      :key="index"
    >
      <div class="col-2 news-meta reddd m-1">
        <ul class="list-group">
          <li class="">Дата: 12.07.2021</li>
          <li class="">Автор: Понасенков</li>
        </ul>
      </div>
      <div class="col reddd m-1">
        <ul class="list-group">
          <li class="">Название: Обновление 2.0</li>
          <li class="">
            Всей швали моих критиков Моих завистников: Вы думаете, что с
            человеком Который вот до такой степени Точно исследует тему, можно
            спорить Вы думаете, что я вас не переиграю? Что я вас не уничтожу? Я
            вас уничтожу!
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style>
/* .reddd {
  background: red;
} */

.news {
  overflow-y: scroll;
  color: white;
}

li {
  list-style-type: none;
}

.news-meta {
  max-height: 75px !important;
}
</style>