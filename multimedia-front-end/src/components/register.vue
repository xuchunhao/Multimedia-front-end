<template>
  <div class="register">
    <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    <el-button @click="getPhoneCaptcha">获取验证码</el-button>
    <el-input v-model="phoneCaptcha" placeholder="请输入验证码"></el-input>
    <el-input v-model="password" placeholder="请输入密码"></el-input>
    <el-button @click="register">注册</el-button>
  </div>
</template>

<script>
import api from '@/api/index.js';
import md5 from 'js-md5';

export default {
  data() {
    return {
      phone:'',
      phoneCaptcha:'',
      password:'',
      rand:''
    }
  },
  methods: {
    getPhoneCaptcha() {
      api.getPhoneCaptcha({
        "id":1,
        "type":"sms",
        "subtype":"generate",
        "data":{
        "phone":this.phone
        }
      }).then(res => {
        this.rand = res.data.data.rand
        alert('已发送验证码');
      })
    },
    register() {
      api.register({
        "id":0,
        "status":0,
        "type":"register",
        "subtype":"phone",
        "data":{
          "phone":this.phone,
          "hash":md5(this.phoneCaptcha + this.rand),
          "pass":this.password
        }
      }).then(res => {
        alert('注册成功')
        console.log(res)
      })
    }
  }
}
</script>