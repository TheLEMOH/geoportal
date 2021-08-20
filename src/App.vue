<template>
  <div id="app" class="background d-flex flex-column align-items-stretch">
    <nav class="navbar main p-4 border">
      <div class="container-fluid justify-content-center">
        <h2 class="text-white position-absolute m-0 p-0">
          Картографический веб-портал Енисей плюс
        </h2>
        <Login />
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Login from "./components/home/Login.vue";
export default {
  components: { Login },
  computed: {
    layout() {
      return this.$route.name;
    },
  },
};
</script>
<style>
#app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: "Formular", "Arial", sans-serif !important;
  z-index: 0;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #ccdef7;
}

::-webkit-scrollbar-thumb {
  background-color: #ccdef7;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.5) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.5) 75%,
    transparent 75%,
    transparent
  );
}

.link {
  text-decoration: none !important;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 3px;
  transition: all 0.3s;
  margin: 0.5rem;
}

.link:hover {
  cursor: pointer;
  color: #ff8000 !important;
  background-size: 100% 3px;
}

.linkActive {
  color: #ff8000 !important;
  transition: all 0.3s;
  background-size: 100% 3px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.main {
  background: #012e67;
}

.additional {
  background: #012e67 !important;
}

.selected {
  color: white !important;
  background: #012e67;
  transition: all 0.3s;
}

.background {
  background: #ccdef7 !important;
}

.text-shadow {
}

.text-black {
  color: black !important;
}
</style>
