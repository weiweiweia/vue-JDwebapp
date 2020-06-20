<template lang="html">
<div class="regist">
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="password2"
      type="password"
      name="密码"
      label="密码"
      placeholder="确认密码"
      :rules="[{ required: true, message: '请确认密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>
</div>
</template>

<script>
import { Form, Field, Button } from "vant";

export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data: function() {
    return {
      username: "",
      password: "",
      password2: ""
    };
  },
  mounted() {
    // console.log('$http',this.$http)
  },
  methods: {
    onSubmit() {
      // 提交注册
      let data = {
        username: this.username,
        password: this.password,
        password2: this.password2
      };
      this.$http.rigiste(data).then(res => {
        if (res.err == 0) {
          console.log("注册成功", res);
          this.$router.push("/login");
        }else{
          alert(res.msg)
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.regist {
}
</style>
