import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLayers from "vuelayers";
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false
Vue.use(VueLayers);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
