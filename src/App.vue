<template>
  <div class="app">
    <h1>Hello</h1>
    {{count}}
    <hr>
    <button @click="handleIncrement"> +</button>
    <button @click="handleDecrement"> -</button>
    <hr>
    <div>
      异步获取数据：{{num}}
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data () {
    return {
      // count: this.$store.state.count
    }
  },
  computed: {
    count(){
      return this.$store.state.count
    },
    num(){
      return this.$store.state.num
    }
  },
  methods: {
    handleIncrement(){
      let m = 123
      this.$store.commit('increment',m)
    },
    handleDecrement(){
      this.$store.commit('decrement')
    }
  },
  mounted () {
    // 发起异步请求
    axios
      .get('https://api.zbztb.cn/api/public/v1/home/swiperdata')
      .then(res => {
        let num = res.data.message.length
        console.log(num)
        // this.$store.commit("updateNum", num)
        this.$store.dispatch('act_updateNum',num)
      })
  }
}
</script>
<style lang="less" scoped>

</style>
