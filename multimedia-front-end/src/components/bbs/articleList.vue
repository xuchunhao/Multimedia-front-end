<template>
  <div class="article-list">
    sadasda 
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  data () {
    return {
      item:[]
    }
  },
  mounted () {
    this.item = this.$route.params.item
  }
  // mounted () {
  //   api.getArticleList({
      
  //   }).then(res => {
  //     console.log(res,res.data.data.list);
  //     this.articleList = res.data.data.list;
  //   })
  // }
}
</script>