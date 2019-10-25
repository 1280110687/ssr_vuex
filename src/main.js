import Vue from 'vue'
import App from './App.vue'
// 1 引入 store
import store from "./store";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 2 注入  this.$store...
  store
}).$mount('#app')
