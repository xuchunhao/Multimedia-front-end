<template>
  <div class="default">
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
  </div>
</template>

<script>
import defaultHeader from '@/components/defaultHeader.vue'

export default {
  name:'default',
  components:{
    defaultHeader
  }
}
</script>

<style lang="sass">
  @import '@/assets/css/default.scss'
</style>