<template>
  <div id="app">
    <h1>Hello😄</h1>
    {{count}}
    <hr />
    {{msg}}
    <hr />
    <button @click="handleIncrement">+</button>
    <hr />
    <button @click="handleDecrement">-</button>
    <hr />
    {{comCount}}
    <hr />
    <div>
      异步获取的数据：{{nu}}
      <hr />
      <button @click="handleAdd">同步+</button>
      <button @click="handleAsyncSet">异步+</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      count: this.$store.state.count,
      msg: this.$store.state.msg
    }
  },
  computed: {
    comCount () {
      return this.$store.state.count
    },
    nu () {
      return this.$store.state.nu
    }
  },
  mounted () {
    console.log(this.$store)
  },
  methods: {
    handleIncrement () {
      this.$store.commit('increment')
      // console.log(this.$store.state.count)
    },
    handleDecrement () {
      this.$store.commit('decrement')
    },
    handleAdd () {
      // 同步修改state => mutations   (store/index.js)
      let n = 2048
      this.$store.commit('test', n)
    },
    handleAsyncSet () {
      // actions 负责异步修改数据
      setTimeout(() => {
        let n = 10000
        // 有dispatch 肯定有 actions！！！
        this.$store.dispatch('remo', n)
        console.log('啊哈')
      }, 2000);
    }
  }
}
</script>

<style>
</style>
