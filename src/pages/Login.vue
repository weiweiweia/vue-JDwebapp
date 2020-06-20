<template>
  <div>
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" @click.native="goRigiste">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, field, button } from "vant";
export default {
  components: {
    [Form.name]: Form,
    [field.name]: field,
    [button.name]: button
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      console.log(123);

      let data = {
        username: this.username,
        password: this.password
      };
      this.$http
        .login(data)
        .then(res => {
          if (res.err == 0) {
            console.log(res, "登录成功");
            //将token存在localStorage中
            // console.log(res);
            localStorage.setItem("token", res.data.token);
            this.$router.replace("/home");
          } else {
            alert("用户名或密码错误");
          }
        })
        .catch(err => {
          console.log(err, "登录失败");
        });
    },
    goRigiste() {
      this.$router.push("/rigiste");
    }
  }
};
</script>

<style>
</style>