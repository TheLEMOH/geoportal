import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLayers from "vuelayers";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false
Vue.use(VueLayers);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')