// 引入 vue 和 vuex 
import Vue from 'vue'
import vuex from 'vuex'

// 注入
Vue.use(vuex)


// 1 全局数据
const state = {
  count: 1024,
  list: ['div', 'p', 'a', 'img', 'ul'],
  list2: ['A','B','C','D','E','F']
}
// 1 定义一个 getters 负责将 state 进行加工处理 
const getters = {
  list:state=>state.list,
  imgList: state => state.list.filter(v => v === 'img'),
  // letter -- 字母
  list2: state => (letter => state.list2.filter(v => v === letter)),
  list_a:state=>state.list,
  list_b:state=>state.list,
  list_c:state=>state.list,
  list_d:state=>state.list,
  list_e:state=>state.list,
  list_o:state=>state.list2,
  list_p:state=>state.list2,
  list_q:state=>state.list2
}

// 2 新建仓库 并 暴露出去
export default new vuex.Store({
  state, getters
})