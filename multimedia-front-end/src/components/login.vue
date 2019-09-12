<template>
  <div class="login">
    <h1 style="text-align:center">登录</h1>
    <el-row type="flex" justify="center">
      <el-col :span="1">
        <label>账号：</label>
      </el-col>
      <el-col :span="6">
        <el-input v-model="phone" placeholder="请输入手机号"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="1">
        <label>密码：</label>
      </el-col>
      <el-col :span="6">
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="1">
        <el-button @click="login">登录</el-button>
      </el-col>
    </el-row><el-row type="flex" justify="center">
      <el-col :span="4" class="to-register">
        <router-link to="/register">还没账号？点击注册</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    login() {
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
          console.log(res)
          if(res.data.status == 0){
            this.$store.state.token = res.data.data.token;
            alert("欢迎您");
            this.$router.push({path : '/bbs'})
          }
        },error => {
          alert('输入错误')
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login.scss";
</style>