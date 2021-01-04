<template>
  <div class="home">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item.id" :title="item.title">
        <div class="list">
          <div class="left">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="create-time">{{item.createTime}}</div>
          </div>
        </div>
      </van-cell>
    </van-list>
    <vns :start="0" :end="99" :times="10" :speed="50"/>
  </div>
</template>

<script>
import vns from 'vue-number-scroll'
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  components: {
    vns
  },
  methods: {
    onLoad() {
      fetch('/article/list')
        .then(res => res.json())
        .then(res => {
          console.log(res.data)
          if (res.status === 200) {
            this.loading = false
            this.finished = true
            this.list = res.data.map(item => {
              if (item.createTime) {
                item.createTime = this.$moment(item.createTime).format(
                  'YYYY-MM-DD HH:mm:ss'
                )
              }
              return item
            })
          } else {
            this.$Toast.fail(res.errMsg)
          }
        })
        .catch(err => {
          console.log(err)
          return false
        })
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1)
      //   }
      //   // 加载状态结束
      //   this.loading = false
      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true
      //   }
      // }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: row;
}
.list .left,
img {
  width: 150px;
  height: 100px;
  border-radius: 10px;
}
.list .right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}
.list .right .title {
  font-size: 18px;
}
.list .right .create-time {
  font-size: 18px;
  color: #c9c9c9;
}
</style>
