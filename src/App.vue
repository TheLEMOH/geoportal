<template>
  <div id="app">
    <nav class="navbar main border-bottom">
      <div class="container-fluid">
        <div class="p-0">
          <img src="./assets/logo.png" height="60px" width="60px" />
        </div>
        <div class="me-auto p-2 text-white">
          <router-link
            class="link-main-nav text-white h2"
            :to="{ name: 'Home' }"
            ><label class="navbar-home-name me-2"
              >Картографический веб-портал Енисей плюс</label
            >

            <HomeIcon
          /></router-link>
        </div>
        <div class="p-2 bd-highlight"><Login /></div>
      </div>
    </nav>
    <LoginModal />
    <Message />
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Login from "./components/home/Login.vue";
import Nav from "./components/home/Nav.vue";
import Message from "./components/message/Message.vue";
import LoginModal from "./components/home/LoginModal.vue";
import HomeIcon from "./components/icons/HomeIcon.vue";
export default {
  components: { Login, Nav, Message, LoginModal, HomeIcon },
  computed: {
    layout() {
      return this.$route.name;
    },
  },
};
</script>
<style>
@media (max-width: 880px) {
  .navbar-home-name {
    display: none;
  }
}

.home {
  z-index: 1;
}

#app {
  z-index: 1;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
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

.link-main-nav {
  text-decoration: none !important;
  transition: all 0.3s;
}
.link-main-nav:hover {
  cursor: pointer;
  color: #ff8000 !important;
}

.linkActive {
  color: #ff8000 !important;
  transition: all 0.3s;
  background-size: 100% 3px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s linear;
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
  background: #012e67 !important;
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
