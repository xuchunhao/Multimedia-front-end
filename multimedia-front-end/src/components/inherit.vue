<template>
  <div class="inherit">
    <h2 style="text-align:center">文化传承</h2>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="VR馆" name="first">
        <vr />
      </el-tab-pane>
      <el-tab-pane label="传承人" name="second">
        <inherit-people />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import vr from '@/components/vr.vue'
import inheritPeople from '@/components/inheritPeople.vue'
export default {
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {

    },
    components:{
      vr,
      inheritPeople
    }
}
</script>

<style lang="scss">
  .el-tabs__item{
    background-color: #eee;
    color: #000;

  }
</style>