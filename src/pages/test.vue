<template>
  <div class="test">
    {{count}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: this.$store.state.count
    }
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>
<style lang="less" scoped>

</style>
