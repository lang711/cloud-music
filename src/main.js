import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as api from "./api";
import "normalize.css";
import "./assets/common.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
