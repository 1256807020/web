<template>
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <div class="summary">{{detail.summary}}</div>
    <div class="content">{{detail.content}}</div>
    <div class="create-time">{{detail.createTime}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: {
        // id: 2,
        // title: 'flutter',
        // img: 'https://baidu.com',
        // summary: '入门flutter',
        // content: '入门flutter',
        // createTime: '2020'
      }
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      fetch('/article/detail/' + this.$route.query.id)
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            this.detail = res.data
            this.detail.createTime = res.data.createTime
              ? this.$moment(res.data.createTime).format('YYYY-MM-DD HH:mm:ss')
              : ''
          } else {
            this.$Toast.fail(res.errMsg)
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.detail {
  padding: 20px;
  text-align: left;
}

.detail .title {
  font-size: 25px;
  padding-bottom: 20px;
}

.detail .summary {
  padding: 20px;
  background: #dcdcdc;
}

.detail .content {
  padding: 20px;
  text-indent: 2em;
  line-height: 200%;
}

.detail .create-time {
  color: #9c9c9c;
  text-align: right;
}
</style>
