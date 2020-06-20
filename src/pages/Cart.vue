<template>
  <div class="cart">
    <!-- 顶部导航按钮 -->
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="underway-o" />
      </template>
    </van-nav-bar>
    <!-- <h1>购物车</h1> -->
    <van-row>
      <van-col span="20">
        <div class="text"></div>
      </van-col>
      <van-col span="4">
        <div class="text"></div>
      </van-col>
    </van-row>

    <!-- 商品展示 -->
    <div class="cart-good" v-for="item in cartList" :key="item._id">
      <van-row type="flex" justify="center" align="center">
        <van-col span="4">
          <van-cell>
            <van-checkbox v-model="checked" />
          </van-cell>
        </van-col>
        <van-col span="20">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="item.good.img"
          >
            <template #footer>
              <van-button size="mini">-</van-button>
              <van-button size="mini">+</van-button>
            </template>
          </van-card>
        </van-col>
      </van-row>
    </div>

    <!-- 底部提交 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span class="edit" @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>

    <TabBar></TabBar>
  </div>
</template>

<script>
import {
  SubmitBar,
  Checkbox,
  NavBar,
  Toast,
  icon,
  Card,
  tag,
  button,
  Row,
  Col,
  Cell
} from "vant";

export default {
  name: "Cart",
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [NavBar.name]: NavBar,
    [icon.name]: icon,
    [Card.name]: Card,
    [tag.name]: tag,
    [button.name]: button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Cell.name]: Cell,
    // [checkbox.name]:checkbox,
    TabBar: () => import("@/components/common/TabBar.vue")
  },
  data() {
    return {
      checked: true,
      cartList: []
    };
  },
  methods: {
    //点击提交订单按钮
    onSubmit() {},
    onClickEditAddress() {
      //跳转到地址修改页面
    },
    onClickLeft() {
      this.$router.back();
      // this.$router.push('/')
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    //刷新页面数据
    getCartList() {
      // console.log(this.$http.getCart);
      this.$http.getCart({}).then(res => {
        console.log(res);
        this.cartList = res.data;
      });
    }
  },

  mounted() {
    this.getCartList()
  }
};
</script>

<style lang = 'scss' scored>
.cart {
  padding: 1.4634rem 0;
}
.edit {
  color: blue;
}
/* .van-col {
  display: inline-block;
  border: 1px solid red;
  height: 20px;
} */
</style>