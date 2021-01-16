import Vue from "vue";
import App from "./App.vue";
import  firebaseApp  from "./firebase/index";
import router from './router'
import store from './store'
import Slider from '@jeremyhamm/vue-slider'

Vue.use(Slider)

Vue.config.productionTip = false;
Vue.use(firebaseApp);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
