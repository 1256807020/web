<template>
  <div class="error-404">
    <van-button @click="clickOne">请求数据</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickOne() {
      // this.$axios
      //   .get('/article/list')
      //   .then(res => {
      //     console.log(res.data)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      fetch('/article/list')
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
          return false
        })
    }
  },
  props: {}
}
</script>

<style scoped>
</style>
