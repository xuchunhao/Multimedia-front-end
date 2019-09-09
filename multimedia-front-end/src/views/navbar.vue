<template lang="zh">
  <transition name="el-fade-in-linear">
    <div v-show="show" class="transition-box">
      <div class="navbar">
        <el-row type="flex" justify="center" class="align-center">
          <el-col :xs="24" :sm="24" :md="21" :lg="18" :xl="18">
            <card/>
          </el-col>
        </el-row>
    <cloud/>
    <img draggable="false" src="~@/assets/img/navbar/btn-close.png" alt="" class="btn-close">
  </div>
    </div>
  </transition>
  <!-- <div class="navbar">
    <el-row type="flex" justify="center" class="align-center">
      <el-col :xs="24" :sm="24" :md="21" :lg="18" :xl="18">
        <card/>
      </el-col>
    </el-row>
    <cloud/>
    <img draggable="false" src="~@/assets/img/navbar/btn-close.png" alt="" class="btn-close">
  </div> -->
</template>

<script>
import card from '@/components/card.vue'
import cloud from '@/components/cloud.vue'
export default {
  name:'navbar',
  components:{
    card,
    cloud
  },
  data() {
    return {
      show:false
    }
  },
  mounted () {
    this.show = !this.show;
  }
}
</script>

<style lang="sass">
  @import '@/assets/css/navbar.scss'
</style>