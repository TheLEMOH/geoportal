<template>
  <div id="app">
    <nav class="navbar main border-bottom">
      <div class="container-fluid">
        <div class="p-0">
          <img src="./assets/logo.svg" height="60px" width="60px" />
        </div>
        <div class="me-auto p-2 text-white">
          <router-link
            class="link-main-nav text-white h2"
            :to="{ name: 'Home' }"
          >
            <label class="navbar-home-name"
              >Картографический веб-портал Енисей плюс</label
            >
            <label class="navbar-home-name-second">Енисей плюс</label>
          </router-link>
        </div>
        <LoginDropbutton />
      </div>
    </nav>
    <Message />
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Nav from "./components/home/Nav.vue";
import Message from "./components/message/Message.vue";
import LoginDropbutton from "./components/home/LoginDropbutton.vue";
import { mapActions } from "vuex";
export default {
  components: { Nav, Message, LoginDropbutton, },
  methods: {
    ...mapActions(["CheckUser"]),
  },
  computed: {
    layout() {
      return this.$route.name;
    },
  },
  mounted() {
    console.log("Проверка пользователя...");
    this.CheckUser();
  },
};
</script>
<style>
@import "./styles/article.css";
@import "./styles/fade.css";
@import "./styles/gallery.css";
@import "./styles/link.css";
@import "./styles/navbar.css";
@import "./styles/scheme.css";
@import "./styles/scrollbar.css";
@import "./styles/hr.css";
@import "./styles/cards.css";

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

.text-black {
  color: black !important;
}

.ql-editor {
  min-height: 0px !important;
}

hr {
  height: 2px !important;
  color: #5b828e !important;
  opacity: 1 !important;
  margin: 40px !important;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}

.hrBegin {
  color: #5b828e !important;
  margin: 40px !important;
  margin-top: 30px !important;
  margin-bottom: 15px !important;
}

.hrEnd {
  color: #5b828e !important;
  margin: 40px !important;
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
