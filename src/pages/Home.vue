<template>
  <div class="home">
    <!-- 商品列表 -->
    <van-pull-refresh :finished="finished" v-model="refreshing" @refresh="onRefresh">
      <!-- 顶部通知栏 -->
      <van-notice-bar mode="closeable" background="#B20D07" scrollable>京东618,抢618元大红包</van-notice-bar>
      <!-- 搜索框 -->
      <van-search
        v-model="value"
        show-action
        label
        placeholder="笔记本电脑"
        @search="onSearch"
        background="#B20D07"
        shape="round"
      >
        <template #action>
          <div class="login" @click="onLogin">登录</div>
        </template>
      </van-search>

      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/138865/29/866/241872/5ee9bb9aE5c4606a3/c5ab3a82b260eb7c.jpg!q70.jpg.dpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/124308/39/5156/125681/5ee9d276E77315ab2/141e35f9f60448eb.jpg!cr_1125x445_0_171!q70.jpg.dpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/110828/13/12868/84949/5ee71b38Eab1c17aa/92e6aac0af2dc139.jpg!cr_1125x445_0_171!q70.jpg.dpg"
            alt
          />
        </van-swipe-item>
      </van-swipe>

      <!-- 分割线 -->
      <van-divider :style="{ color: '#B20D07', borderColor: '#B20D07' }">为你推荐</van-divider>

      <van-list offset="200" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <template>
          <Good v-for="item in list" :key="item._id">
            <img @click="goDetail(item._id)" :src="item.img" alt />
          </Good>
        </template>
      </van-list>
    </van-pull-refresh>

    <TabBar></TabBar>
  </div>
</template>

<script>
//局部引入vant组件

import {
  Search,
  Swipe,
  SwipeItem,
  NoticeBar,
  Divider,
  List,
  PullRefresh,
  cell
} from "vant";
export default {
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [NoticeBar.name]: NoticeBar,
    [Divider.name]: Divider,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [cell.name]: cell,
    Good: () => import("@/components/common/Good.vue"),
    TabBar: () => import("@/components/common/TabBar.vue")
  },
  name: "Home",
  data() {
    return {
      value: "",
      list: [
      
      ],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1
    };
  },
  methods: {
    onSearch() {},
    onLogin() {
      this.$router.push("./login");
    },
    onRefresh() {
      // 在这里调接口，刷新当前页面的数据
      setTimeout(() => {
        this.refreshing = false;
        this.getList();
      }, 2000);
    },
    onLoad() {
      // 调接口，请求下一页数据
      // this.loading = true;
      // this.page++;
      // this.getList();
      console.log("快要到底了，赶紧请求接口吧");
    },
    getList() {
      //   console.log(Search);
      let params = {
        hot: true,
        page: this.page,
        size: 20
      };
      this.$http.getHomeList(params).then(res => {
        console.log(res);
        this.list = res.data;
        this.page++;
      });
    },
    //点击商品跳转到详情页面
    goDetail(id){
      console.log(id);
      
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style  lang='scss'>
.van-notice-bar {
  color: #fff;
}
.login {
  color: #fff;
}
.my-swipe {
  color: #fff;
  font-size: 0.2667rem;
  height: 4.2667rem;
  line-height: 2rem;
  text-align: center;
  .van-swipe-item {
    img {
      display: block;
      width: 100%;
      height: 4.2667rem;
    }
  }
}

.van-divider {
  font-size: 0.4rem;
  font-weight: bold;
}
.van-list {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>