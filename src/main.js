import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import moment from 'moment'
import Vant, { Toast } from 'vant'
import 'vant/lib/index.css'
import router from './router'
import store from './store'
Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.prototype.$moment = moment
Vue.prototype.$Toast = Toast
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
