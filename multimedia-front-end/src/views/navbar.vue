<template lang="zh">
  <div class="navbar">
    <el-row type="flex" justify="center" class="align-center">
      <el-col :xs="24" :sm="24" :md="21" :lg="18" :xl="18">
        <card/>
      </el-col>
    </el-row>
    <img draggable="false" src="~@/assets/img/navbar/cloud1.webp" alt="" class="cloud1">
    <img draggable="false" src="~@/assets/img/navbar/cloud2.webp" alt="" class="cloud2">
    <img draggable="false" src="~@/assets/img/navbar/cloud3.webp" alt="" class="cloud3">
    <img draggable="false" src="~@/assets/img/navbar/cloud4.webp" alt="" class="cloud4">
    <img draggable="false" src="~@/assets/img/navbar/btn-close.png" alt="" class="btn-close">
  </div>
</template>

<script>
import card from '@/components/card.vue'
export default {
  name:'navbar',
  components:{
    card
  }
}
</script>

<style lang="sass">
  @import '@/assets/css/navbar.scss'
</style>