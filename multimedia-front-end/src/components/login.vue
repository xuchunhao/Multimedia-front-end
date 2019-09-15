<template>
  <div class="login" :class="{'img1':!phoneClick && !passwordClick ,'img2':phoneClick || passwordClick}">
    <!-- <h1 style="text-align:center">登录</h1> -->
    <el-row type="flex" justify="center">
      <!-- <el-col :span="1">
        <label>账号：</label>
      </el-col> -->
      <el-col :span="6" class="top">
        <el-input @focus="handleClick('phone')" @blur="blur" v-model="phone" placeholder="手机号"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <!-- <el-col :span="1">
        <label>密码：</label>
      </el-col> -->
      <el-col :span="6">
        <el-input @focus="handleClick('password')" @blur="blur" type="password" v-model="password" placeholder="密码"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <el-button @click="login">登 录</el-button>
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
      password: "",
      phoneClick:false,
      passwordClick:false
    };
  },
  methods: {
    handleClick(type) {
      if(type == 'phone'){
        this.phoneClick = true;
      }else if(type == 'password'){
        this.passwordClick = true;
      }
    },
    blur() {
      this.phoneClick = false;
      this.passwordClick = false;
    },
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
          // console.log(res)
          if(res.data.status == 0){
            const expires = 10 * 60 * 1000;
            const date = new Date( +new Date() + expires);
            document.cookie = `token=${res.data.data.token};expires=${date.toUTCString()}`
            // console.log(res.data.data.token)
            // var x = document.cookie;
            //     console.log(x)
            // this.$store.state.token = res.data.data.token;
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