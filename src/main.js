import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './store/index'

// console.log(Vue);

//全局引入vantUI组件
// import { Tabbar, TabbarItem } from 'vant';

// Vue.use(Tabbar);
// Vue.use(TabbarItem);

import router from './router.js'

//封装$http 作为axios请求
import http from '@/utils/api.js'
Vue.prototype.$http = http


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
