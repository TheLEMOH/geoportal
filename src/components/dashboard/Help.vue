<template>
  <div class="help m-2 text-shadow fs-5">
    <h2>Добро пожаловать!</h2>
    <!-- Новости -->
    <p>
      В данном разделе описаны шаги по добавлению новостей, проектов, каталогов
      и пользователей
    </p>
    <h4>Заполнение новостей</h4>
    <p>
      Чтобы добавить новость нажмите кнопку
      <button type="button" class="btn btn-success me-1">
        <AddIcon /></button
      >. Добавленная новость станет активной. Заполните все поля перед отправкой
      (Дата новости, название и текст новости).
    </p>
    <p>
      Чтобы сохранить новости нажмите на кнопку
      <button type="button" class="btn btn-primary me-1">
        <SaveIcon /></button
      >. Во время сохранения меню блокируются. Название новости заменится на
      "Сохранение...". Сверху экрана появится оповещение. Когда сохранение
      завершится - появится оповещение и меню разблокируется.
    </p>
    <p>
      Чтобы отменить последние действия редактирования новостей нажмите на
      кнопку
      <button type="button" class="btn btn-danger me-1">
        <CancelIcon />
      </button>
    </p>
  </div>
</template>

<script>
import SaveIcon from "../icons/SaveIcon.vue";
import CancelIcon from "../icons/CancelIcon.vue";
import AddIcon from "../icons/AddIcon.vue";
export default {
  components: { SaveIcon, AddIcon, CancelIcon },
};
</script>

<style>
</style>