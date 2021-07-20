<template>
  <div id="app">
    <nav class="navbar border-bottom shadow-lg p-4">
      <div class="container-fluid justify-content-center">
        <h2
          class="text-white position-absolute m-0 p-0"
          style="text-shadow: 1px 1px 2px black"
        >
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
  font-family: Tahoma !important;
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  background: #376092;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(45, 69, 87, 0.5) inset;
  background-color: #376092;
}

::-webkit-scrollbar-thumb {
  background-color: #6b95c9;
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
</style>
