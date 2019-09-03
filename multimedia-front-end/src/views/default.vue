<template>
  <div class="default">
    <img src="~@/assets/img/default/btn-index.webp" alt="" draggable="false" class="btn-index">
    <img src="~@/assets/img/default/btn-return.webp" alt="" draggable="false" class="btn-return">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="21" :lg="18" :xl="18">
        <default-header/>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="21" :lg="18" :xl="18">
        <div class="default-card">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
    <cloud/>
  </div>
</template>

<script>
import defaultHeader from '@/components/defaultHeader.vue'
import cloud from '@/components/cloud.vue'

export default {
  name:'default',
  components:{
    defaultHeader,
    cloud
  }
}
</script>

<style lang="sass">
  @import '@/assets/css/default.scss'
</style>