<template>
  <div class="login">
    <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    <el-input v-model="password" placeholder="请输入密码"></el-input>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
import api from '@/api/index.js';

export default {
  data() {
    return {
      phone:'',
      password:''
    }
  },
  methods: {
    login() {
      api.login({
        "id":1234,
        "type":"login",
        "subtype":"pass",
        "data":{
          "phone":this.phone,
          "pass":this.password,
          "enduring":false,
        }
      }).then(res => {
        console.log(res);
        alert('登录成功')
      })
    }
  }

}
</script>