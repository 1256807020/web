<template>
  <div class="add">
    <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead" />
    <van-cell-group>
      <van-field label="文章标题" placeholder="文章标题" v-model="title"></van-field>
      <van-field label="文章简介" placeholder="文章简介" v-model="summary"></van-field>
      <van-field label="文章内容" placeholder="文章内容" v-model="content" type="textarea" autosize></van-field>
    </van-cell-group>
    <van-button type="primary" @click="handleAdd" class="add-button">提交</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [],
      title: '',
      summary: '',
      content: '',
      img: ''
    }
  },
  methods: {
    afterRead(file) {
      console.log(file)
      this.img = file.content
    },
    handleAdd() {
      let params = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        img: this.img
      }
      console.log(params)
    }
  }
}
</script>
