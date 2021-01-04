module.exports = {
  devServer: {
    proxy: {
      // 检测到以/article开头的请求，转发到http://localhost:7001
      // ws 允许websocket
      // changeOrigin 开启虚拟服务器，相当于两台服务器交互
      "/article": {
        target: "http://localhost:7001",
        ws: true,
        changeOrigin: true
      }
    }
  }
}