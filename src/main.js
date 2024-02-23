import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as api from "./api";

import "normalize.css";

Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
