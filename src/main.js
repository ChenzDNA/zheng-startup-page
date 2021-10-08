import Vue from 'vue'
import router from './router'
import axios from 'axios'

import App from './App.vue'
import store from './store/store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios



axios.defaults.baseURL = '/api'

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
