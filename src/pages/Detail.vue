<template>
  <div class="detail">
        <!-- 顶部导航按钮 -->
    <van-nav-bar
      :title="shop.name"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div>
      <img :src="shop.img" alt="">
      <van-button plain hairline type="primary" @click="addToCart">添加到购物车</van-button>
    </div>
  </div>
</template>

<script>
import {button , Toast ,NavBar} from 'vant'
export default {
  components: {
    [button.name] : button,
    [Toast.name] : Toast,
    [NavBar.name] : NavBar
  },
  data() {
    return {
      shop: ""
    };
  },
  methods: {
    addToCart() {
      //调接口添加到购物车
    //   console.log(123);
        let data = {
            num: 1 ,
            good_id: this.$route.params.id
        }
        console.log(data);
        
        this.$http.addToCart(data).then(res=>{
            console.log(res);
            this.$router.push('/cart')
        })
    },
    onClickLeft(){
      this.$router.go(-1)
    }
  },
  mounted() {
    //调接口获取数据
    console.log(this.$route.params.id);
    let params = {
        good_id : this.$route.params.id
    }
    this.$http.getDetail(params).then(res=>{
        console.log(res);
        this.shop = res.data
    })
  }
};
</script>

<style lang='scss' scored>
.van-button {
  display: block;
  margin: 0 auto;
}
.detail img{
    width:7.3171rem
}
</style>