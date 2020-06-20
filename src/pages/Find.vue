<template>
  <div class="find">
    <div class="find-left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="个人清洁" />
        <van-sidebar-item title="汽车生活" />
        <van-sidebar-item title="男装女装" />
        <van-sidebar-item title="个人清洁" />
        <van-sidebar-item title="汽车生活" />
        <van-sidebar-item title="男装女装" />
        <van-sidebar-item title="个人清洁" />
        <van-sidebar-item title="汽车生活" />
        <van-sidebar-item title="男装女装" />
        <van-sidebar-item title="个人清洁" />
        <van-sidebar-item title="汽车生活" />
        <van-sidebar-item title="男装女装" />
        <van-sidebar-item title="个人清洁" />
        <van-sidebar-item title="汽车生活" />
        <van-sidebar-item title="男装女装" />
        <van-sidebar-item title="个人清洁" />
        <van-sidebar-item title="汽车生活" />
        <van-sidebar-item title="男装女装" />
      </van-sidebar>
    </div>

    <div class="find-right">
      <div class="find-right">
        <div v-for="i in 20" :key="i">
          <van-grid column-num="3">
            <van-grid-item>
              <template>
                <div class="find-good">
                  <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  <div>名字</div>
                </div>
              </template>
            </van-grid-item>
            <van-grid-item>
              <template>
                <div class="find-good">
                  <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  <div>名字</div>
                </div>
              </template>
            </van-grid-item>
            <van-grid-item>
              <template>
                <div class="find-good">
                  <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  <div>名字</div>
                </div>
              </template>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>

    <TabBar></TabBar>
  </div>
</template>

<script>
import {
  Sidebar,
  SidebarItem,
  Grid,
  GridItem,
  Image
} from 'vant'
export default {
  name: "Find",
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Grid.name] : Grid,
    [Image.name] : Image,
    [GridItem.name] : GridItem,
    TabBar: () => import("@/components/common/TabBar.vue")
  },
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {}
};
</script>

<style lang='scss' scored>
.find-left {
  position: absolute;
  left: 0;
  bottom: 0.8rem;
  top: 0;
  width: 2.27rem;
  overflow: scroll;
  // 在移动端有absolute产生滚动条，使用下面这个属性，可以更加流畅
  overflow-scrolling: touch;
}

.find-right {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .6rem;
  left: 2.27rem;
  background-color: orange;
  overflow: scroll;
  overflow-scrolling: touch;
}

.find-good {
  & > div {
    font-size: 0.4rem;
    text-align: center;
  }
}
</style>