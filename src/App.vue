<template>
  <div>
    vue
    <div>{{count}}</div>
    <button @click="handleIncrement">+</button>
  </div>
</template>

<script>
// 1 引入 事件类似 常量
import { INCREMENT } from "./store/mutationTypes"
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    handleIncrement () {
      // 同步修改state => mutations   (store/index.js)
      let num = 2048;
      // 1 通过 对象的形式来传递数据
      // this.$store.commit("increment", { num, num2: 1111 })
      // 2 通过 对象的形式来传递数据  更加的规范 
      // "INCREMENT"
      this.$store.commit({ type: INCREMENT, num, num2: 1111 })
    }
  }
}
</script>

<style>
</style>