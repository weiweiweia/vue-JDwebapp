<template>
  <van-tabbar v-model="active" :route="true">
    <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
    <van-tabbar-item icon="search" dot to='/find'>发现</van-tabbar-item>
    <van-tabbar-item icon="friends-o" badge="5" to='/cart'>购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" badge="20" to='/user'>我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
//局部引入vant组件
import { Tabbar, TabbarItem } from 'vant';

export default {
  data(){
    return {
      active:0
    }
  },
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
  }
};
</script>

<style>
</style>