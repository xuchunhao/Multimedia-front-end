<template>
  <div class="home">
    <!-- <el-row type="flex" justify="center" class="test">
      <el-col :span="5" class="test1">
        <el-row type="flex" justify="space-between">
          <el-col :span="19">
            <img src="~@/assets/img/home/title.png" alt="" class="title">
          </el-col>
          <el-col :span="3">
            <img src="~@/assets/img/home/seal.png" alt="" class="seal">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="logo-content">
      <el-col :span="8">
        <img src="~@/assets/img/home/logo.png" alt="" class="logo">
      </el-col>
    </el-row> -->
    <div class="content">
      <div class="box">
        <img src="~@/assets/img/home/title.webp" alt="" class="title" draggable="false">
        <img src="~@/assets/img/home/seal.webp" alt="" class="seal" draggable="false">
      </div>
      <div class="logo-content">
        <img src="~@/assets/img/home/logo.webp" alt="" class="logo" draggable="false">
      </div>
    </div>
    <router-link to="/navbar">
      <img src="~@/assets/img/home/btn-threeline.png" alt="" class="btn-threeline">
    </router-link>
    <img draggable="false" src="~@/assets/img/home/cloud1.webp" alt="" class="cloud1">
    <img draggable="false" src="~@/assets/img/home/cloud2.webp" alt="" class="cloud2">
    <img draggable="false" src="~@/assets/img/home/cloud3.webp" alt="" class="cloud3">
    <img draggable="false" src="~@/assets/img/home/cloud4.webp" alt="" class="cloud4">
    <img src="~@/assets/img/home/footer.webp" alt="" class="footer" draggable="false">
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style lang="sass">
  @import '@/assets/css/home.scss'
</style>