<template>
  <div class="home">
    <div class="one">
      <van-button @click="clickOne">弹框</van-button>
      <van-button loading type="primary" />
      <van-button loading type="primary" loading-type="spinner" />
      <van-button loading type="info" loading-text="加载中..." />
      <van-button color="#7232dd">单色按钮</van-button>
      <van-button color="#7232dd" plain>单色按钮</van-button>
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变色按钮
      </van-button>
    </div>
    <div class="one">
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
    </div>
    <div class="one">
      <van-icon name="chat-o" dot />
      <van-icon name="chat-o" badge="9" />
      <van-icon name="chat-o" badge="99+" />
    </div>
    <div class="one">
      <van-image width="10rem" height="10rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="one">
      <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>

      <van-row>
        <van-col span="4">span: 4</van-col>
        <van-col span="10" offset="4">offset: 4, span: 10</van-col>
      </van-row>

      <van-row>
        <van-col offset="12" span="12">offset: 12, span: 12</van-col>
      </van-row>
    </div>
    <div class="one">
      <van-popup v-model="show" position="top" :style="{ height: '30%' }" />
    </div>
    <div class="one">
      <!-- 最多显示一行 -->
      <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

      <!-- 最多显示两行 -->
      <div class="van-multi-ellipsis--l2">
        这是一段最多显示两行的文字，多余的内容会被省略
      </div>

      <!-- 最多显示三行 -->
      <div class="van-multi-ellipsis--l3">
        这是一段最多显示三行的文字，多余的内容会被省略
      </div>
      <div class="one">
        <!-- 上边框 -->
        <div class="van-hairline--top"></div>

        <!-- 下边框 -->
        <div class="van-hairline--bottom"></div>

        <!-- 左边框 -->
        <div class="van-hairline--left"></div>

        <!-- 右边框 -->
        <div class="van-hairline--right"></div>
      </div>
      <div class="one">

      </div>
    </div>
    <div class="one">
      <van-calendar v-model="show" type="range" confirm-text="完成" confirm-disabled-text="请选择结束时间" />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    clickOne() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner'
      })
    }
  }
}
</script>
