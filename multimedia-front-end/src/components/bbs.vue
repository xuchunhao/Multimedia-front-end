<template>
  <div class="bbs">
    <div class="bbs-content" v-for="(item,index) in articleList" :key="index">
      <router-link :to="{name:'article',params:{ name:item.article_id ,item:item}}" class="bbs-every" tag="div">
        <img :src="'https://dmt.lcworkroom.cn/api/get/portrait/' + item.user_id" alt />
        <div>
          <h3>{{item.title}}</h3>
          <p>{{item.content}}</p>
        </div>
      </router-link>
      <!-- <div class="bbs-every">
        <img src="~@/assets/img/home/logo.webp" alt />
        <div>
          <h3>标题</h3>
          <p>内容askdbkajssknfklaenfaejklfnklaenklfnlknkfnakendk</p>
        </div>
      </div>
      <div class="bbs-every">
        <img src="~@/assets/img/home/logo.webp" alt />
        <div>
          <h3>标题</h3>
          <p>内容askdbkajssknfklaenfaejklfnklaenklfnlknkfnakendk</p>
        </div>
      </div>
      <div class="bbs-every">
        <img src="~@/assets/img/home/logo.webp" alt />
        <div>
          <h3>标题</h3>
          <p>内容askdbkajssknfklaenfaejklfnklaenklfnlknkfnakendk</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  data () {
    return {
      articleList :[]
    }
  },
  mounted () {
    api.getArticleList({

    }).then(res => {
      this.articleList = res.data.data.list;
    })
  }
};
</script>

<style lang="sass">
  @import '@/assets/css/bbs.scss'
</style>