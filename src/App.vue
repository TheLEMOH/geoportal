<template>
  <div id="app">
    <div id="nav">
      <a class="nav-link p-0 m-0" href="/">
        <h2 class="text-center text-white shadow m-0 p-1 border-bottom">
          Картографический веб-портал Енисей плюс
        </h2>
      </a>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.name;
    },
  },
};
</script>
<style>
#app {
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
  transition: background-size 0.3s;
  margin: 0.5rem;
}

.link:hover {
  cursor: pointer;
  background-size: 100% 3px;
}

.linkActive {
  background-size: 100% 3px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
