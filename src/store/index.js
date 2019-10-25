// 1 引入 vue vuex
import Vue from "vue";
import vuex from "vuex";

import { INCREMENT } from "./mutationTypes";

Vue.use(vuex);

// 2 定义数据 state
const state = {
  count: 1024
}

// 4 定义修改数据的函数 mutations
const mutations = {
  // increment(state, {num,num2}) {
  //   state.count += num;
  //   state.count += num2;
  // }
  [INCREMENT] (state, params) {
    state.count += params.num,
    state.count += params.num2
  }
}



export default new vuex.Store({
  state, mutations
});