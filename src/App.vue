<template>
  <div>
  <h1>{{count}}</h1>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in imgList" :key="item">{{item}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in list2" :key="item">
        <p>改写 getters里面的代码list2 是一个函数 同时又返回了另外一个函数</p>
        {{item}}
      </li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in list_a" :key="item">{{item}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in list_b" :key="item">{{item}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in list_c" :key="item">{{item}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in list_d" :key="item">{{item}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in list_e" :key="item">{{item}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in list_o" :key="item">{{item}}</li>
    </ul>
    <ul>
      <li v-for="item in list_p" :key="item">{{item}}</li>
    </ul>
    <ul>
      <li v-for="item in list_q" :key="item">{{item}}</li>
    </ul>
  </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  data () {
    return {
      count: this.$store.state.count,
      list:this.$store.getters.list,
      // 遍历的 li 中只出现 div
      // list:this.$store.getters.list.filter((v, i) => v === "div"),
      imgList: this.$store.getters.imgList,
      // 过滤 D 字母
      list2:this.$store.getters.list2('D'),
      num: 100
    }
  },
  computed: {
    list_a(){
      return this.$store.getters.list_a
    },
    list_b(){
      return this.$store.getters.list_b
    },
    list_c(){
      return this.$store.getters.list_c
    },
    list_d(){
      return this.$store.getters.list_d
    },
    list_e(){
      return this.$store.getters.list_e
    },
    ...mapGetters(['list_o','list_p','list_q']),
    numStr(){
      return this.num + '￥'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
