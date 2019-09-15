<template>
  <div class="bbs">
    <h2 style="text-align:center">游客论坛</h2>
    <div class="user">
      <div>
        <router-link to="/personal">
          <el-button>个人中心</el-button>
        </router-link>
        <router-link to="/login">
          <el-button>切换账号</el-button>
        </router-link>
      </div>
    </div>
    <div class="bbs-content" v-for="(item,index) in articleList" :key="index">
      <router-link :to="{name:'article',params:{ name:item.article_id ,item:item}}" class="bbs-every" tag="div">
        <img :src="'https://dmt.lcworkroom.cn/api/get/portrait/' + item.user_id" alt />
        <div>
          <h3>{{item.title}}</h3>
          <span>{{item.user_id}}</span>
          <p>{{item.content}}</p>
        </div>
      </router-link>
      <el-button class="btn-submit">发布文章</el-button>
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
      articleList :[],
    }
  },
  methods: {
    getCookie(cname) {
			var name = cname + '=';
      var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
				if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
			}
			return '';
		}
  },
  mounted () {
    // console.log(this.getCookie('token'))
    // this.getCookie('token')
    // console.log(getCookie('token'))
    if(this.getCookie('token') == ''){
      this.$router.push({path:'/login'})
    }
    // console.log(222)
    // console.log(this.$store.state.token)
    api.getArticleList({
      
    }).then(res => {
      // console.log(res)
      this.articleList = res.data.data.list;
    })
  }
};
</script>

<style lang="sass">
  @import '@/assets/css/bbs.scss'
</style>