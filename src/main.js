import Vue from "vue";
import App from "./App.vue";
import Particles from "vue2-particles";

Vue.use(Particles);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
