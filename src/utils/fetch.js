import axios from 'axios'
import { Toast } from 'vant'

// cnode
// let baseURL_dev = 'https://cnodejs.org/api/v1'  // 开发环境

// 周杰伦音乐列表
let baseURL_dev = 'http://localhost:8080'  // 解决跨域问题

// let baseURL_pro = ''  // 公司域名
// let baseURL_test = '' // 内网地址

// 创建axios实例
const fetch = axios.create({
  baseURL: baseURL_dev,
  timeout: 5000,  // 超时设置
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 封装请求拦截器
fetch.interceptors.request.use((config) => {
  // 在这里做一些检测或者包装等处理
  // console.log('请求拦截', config)
  // 鉴权 token添加
  config.headers.Authorization = localStorage.getItem('token') || ''
  return config
})

// 封装响应拦截器
fetch.interceptors.response.use((response) => {
  // 请求成功
  // console.log('响应拦截', response)
  // 数据过滤，根据后端标识字符来进行数据
  if(response.data && response.data.err ==0){
    return response.data
  }else{
    Toast(response.data.msg)
  }
}, (error) => {
  // 请求失败
  console.log(333);
  return Promise.reject(error)
})

export default fetch
