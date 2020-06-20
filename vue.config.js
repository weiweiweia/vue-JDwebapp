// 只要改变vue.config.js文件后，必须重启项目才能生效

// node.js代码风格
module.exports = {
  devServer: {
    proxy: {
      // 代理，转发
      // 当请求URL中包含 '/soso' 字符串时，才执行代理转发
      '/soso': {
        target: 'https://c.y.qq.com',  // 目标（远程）服务器地址
        ws: true,
        changeOrigin: true
      },
      '/user': {
        target: 'http://10.36.147.164:9999',
        ws: true,
        changeOrigin: true,
      },
      '/jd': {
        target: 'http://10.36.147.164:9999',
        ws: true,
        changeOrigin: true,
      },
    }
  }
}
