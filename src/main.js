import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as api from "./api";
import "normalize.css";
import "./assets/common.css";
import Navigation from "./components/navigation/index.vue";
import Container from "./components/container/index.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.component("Navigation", Navigation);
Vue.component("Container", Container);

Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
