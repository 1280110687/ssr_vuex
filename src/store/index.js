// 引入 vue 和 vuex 
import Vue from 'vue'
import vuex from 'vuex'

// 注入
Vue.use(vuex)


// 1 全局数据
const state = {
  count: 103,
  num: 0
}
// 定义 mutations 负责修改数据
const mutations = {
  increment (state, m) {
    state.count -= m
  },
  decrement (state) {
    state.count++
  },
  updateNum (state, num) {
    state.num = num
  }
}
// 定义一个 actions 负责做异步操作
const actions = {
  act_updateNum (context, num) {
// 2 通过 context 上下文 理解 store对象  来触发 mutations ,所以要在mutations中添加updateNum函数把num的值赋值给页面
    context.commit('updateNum', num)
  }
}

// 2 新建仓库 并 暴露出去
export default new vuex.Store({
  state, mutations, actions
})