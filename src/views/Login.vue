<template>
  <div class="login text-center p-3">
    <img src="../assets/logo.svg" class="logo-portal sh" />
    <Login />
    <LoginModal />
  </div>
</template>

<script>
import Login from "../components/home/Login.vue";
import LoginModal from "../components/home/LoginModal.vue";
export default { components: { Login, LoginModal } };
</script>

<style>
.logo-portal {
  width: auto;
  height: 250px;
}
</style>