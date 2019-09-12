<template>
  <div class="register">
    <h1 style="text-align:center">注册</h1>
    <el-row type="flex" justify="center">
      <el-col :span="1"></el-col>
      <el-col :span="6">
        <el-input v-model="phone" placeholder="请输入手机号"></el-input>
      </el-col>
    </el-row>
    <!-- <el-row type="flex" justify="center">
      <el-col :span="1">
        <el-button @click="getPhoneCaptcha">获取验证码</el-button>
      </el-col>
    </el-row>-->
    <el-row type="flex" justify="center">
      <el-col :span="1">
        <el-button @click="getPhoneCaptcha">获取验证码</el-button>
      </el-col>
      <el-col :span="4" style="margin-left:80px">
        <el-input v-model="phoneCaptcha" placeholder="请输入验证码"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="1"></el-col>
      <el-col :span="6">
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="1">
        <el-button @click="register">注册</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="4" class="to-register">
        <router-link to="/login">已有账号，点击登录</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
import md5 from "js-md5";

export default {
  data() {
    return {
      phone: "",
      phoneCaptcha: "",
      password: "",
      rand: ""
    };
  },
  methods: {
    getPhoneCaptcha() {
      api
        .getPhoneCaptcha({
          id: 1,
          type: "sms",
          subtype: "generate",
          data: {
            phone: this.phone
          }
        })
        .then(res => {
          this.rand = res.data.data.rand;
          alert("已发送验证码");
        });
    },
    register() {
      api
        .register({
          id: 0,
          status: 0,
          type: "register",
          subtype: "phone",
          data: {
            phone: this.phone,
            hash: md5(this.phoneCaptcha + this.rand),
            pass: this.password
          }
        })
        .then(res => {
          alert("注册成功");

          api
            .login({
              id: 1234,
              type: "login",
              subtype: "pass",
              data: {
                phone: this.phone,
                pass: this.password,
                enduring: false
              }
            })
            .then(res => {
              if (res.data.status == 0) {
                alert("欢迎您");
                this.$store.state.token = res.data.data.token;
                this.$router.push({ path: "/bbs" });
              }
            });
        },error => {
          alert('输入错误，请重试')
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register.scss";
</style>