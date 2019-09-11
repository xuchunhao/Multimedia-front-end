<template>
  <div class="kind">
    <el-row>
      <el-col
        :span="11"
        v-for="(kind, index) in kindList"
        :key="index"
        :offset="(index == 1 || index == 3) ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <el-row>
            <el-col :span="14">
              <img :src="kind.src" class="image" />
            </el-col>
            <el-col :span="8">
              <div class="kind-introduce">
                <h3>名称：【{{ kind.name }}】</h3>
                <p>外观：{{ kind.appearance }}</p>
                <p>音色：{{ kind.voice }}</p>
                <p>用途：{{ kind.purpose }}</p>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["kindList"]
};
</script>

<style lang="sass">
  @import '@/assets/css/kind.scss'
</style>