import Vue from 'vue'
import App from './App.vue'
// import App from '@/pages/test.vue'

import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
