import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

// Setting up defualts vue's http modules for api calls
Vue.prototype.$http = axios;

//load the token from the local Stroage
const token = localStorage.getItem("token");
if(token){
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
