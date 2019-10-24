// 引入 vue 和 vuex 
import Vue from 'vue'
import vuex from 'vuex'

// 注入
Vue.use(vuex)


// 1 全局数据
const state= {
  count: 1024,
  msg: 'o(╥﹏╥)o',
  nu: 100
}
// 定义 mutations 负责修改数据
const mutations = {
  // state 等于 上面定义的 state 一样
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  test (state, n) {
    state.nu += n
  }
}
//  定义actions 负责异步修改数据  会触发 mutations
const actions= {
  // context 上下文  == this.$store 
  remo (context, n) {
    context.commit('test',n)
  }
}

// 2 新建仓库 并 暴露出去
export default new vuex.Store({
  state, mutations,actions
})