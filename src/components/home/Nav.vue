<template>
  <div class="nav d-flex justify-content-evenly fs-5">
    <a class="link link-light" href="/map">Карта</a>
    <a class="link link-light" href="/about">О проекте</a>
    <a class="link link-light" href="/gallery">Фотогалерея</a>
    <a class="link link-light" href="/news">Новости портала</a>
    <Login />
  </div>
</template>


<script>
import Login from "./Login.vue";
export default { components: { Login } };
</script>

<style>
</style>