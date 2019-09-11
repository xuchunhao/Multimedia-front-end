<template>
  <div class="vr">
    <div v-if="currentPage == 1">
      <iframe src="https://720yun.com/t/6dvkn7rqrrh" frameborder="0"></iframe>
      <p>拍摄地点：枧桥董村枧桥鼓展览馆</p>
      <p>地点介绍：枧桥鼓发祥地-枧桥董村里的枧桥鼓展览馆</p>
    </div>
    <div v-else-if="currentPage == 2">
      <iframe src="https://720yun.com/t/75vkn71w0p9" frameborder="0"></iframe>
      <p>拍摄地点：紫阳街-邵家渡大鼓景区</p>
      <p>地点介绍：CCTV历史频道《华夏文明》栏目组曾在临海做过枧桥鼓系列纪录片，并在紫阳街留下一枧桥大鼓作为风景景点</p>
    </div>
    <div v-else-if="currentPage == 3">
      <iframe src="https://720yun.com/t/fevknqfldiw" frameborder="0"></iframe>
      <p>拍摄地点：临海三峰寺</p>
      <p>地点介绍：临海一禅寺院，内有用于佛教法师的枧桥鼓</p>
    </div>
    <div v-else-if="currentPage == 4">
      <iframe src="https://720yun.com/t/0bvknqfl5fb" frameborder="0"></iframe>
      <p>拍摄地点：台州府文庙</p>
      <p>地点介绍：位于临海老城区，曾是当时台州最大的文庙府学，内有用于供奉等活动的枧桥鼓
</p>
    </div>
    <div class="block">
  <el-pagination
    @current-change="currentChange"
    layout="prev, pager, next"
    :total="40">
  </el-pagination>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage:1
    }
  },
  methods: {
    currentChange (e) {
      this.currentPage = e
    }
  },
};
</script>

<style lang="sass">
  @import '@/assets/css/vr.scss'
</style>