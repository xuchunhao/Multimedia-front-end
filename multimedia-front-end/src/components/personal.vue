<template>
  <div class = "personal">
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <img class="porotrait-img" :src=" 'https://dmt.lcworkroom.cn/api/get/portrait/' + userInfo.phone" alt="">
        <porotrait/>
      </el-col>
      <el-col :span="14">2</el-col>
    </el-row>
  </div> 
</template>

<script>
import api from "@/api/index.js";
import porotrait from '@/components/porotrait.vue'

export default {
  data() {
    return {
      userInfo:{}
    }
  },
  mounted () {
    api.
      getUserInfo({

      }).then(res => {
        this.userInfo = res.data.data;
        
      })
  },
  components:{
    porotrait
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/personal.scss'
</style>