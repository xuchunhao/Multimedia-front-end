<template>
  <div class="bbs">
    <div class="user">
      <div class="bbs-top">
        <el-row type="flex" justify="end">
          <el-col :span="12">
            <el-button
              @click="dialogVisible=true"
              icon="el-icon-edit-outline"
              class="btn-submit"
              round
            ></el-button>
            <router-link to="/personal">
              <el-button>个人中心</el-button>
            </router-link>
            <router-link to="/login">
              <el-button>切换账号</el-button>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="bbs-content" v-for="(item,index) in sliceArticleList[currentPage - 1]" :key="index">
      <router-link
        :to="{name:'article',params:{ name:item.article_id ,item:item}}"
        class="bbs-every"
        tag="div"
      >
        <img :src="'https://dmt.lcworkroom.cn/api/get/portrait/' + item.user_id" alt />
        <div>
          <h3>{{item.title}}</h3>
          <span>{{item.user_id}}</span>
          <p>{{item.content}}</p>
        </div>
      </router-link>
      <!-- <el-button class="btn-submit">发布文章</el-button> -->
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
      </div>-->
    </div>
    <el-row type="flex" justify="end" style="margin-top:15px">
      <el-col :span="4">
        <el-pagination
          @current-change="currentChange"
          layout="prev, pager, next"
          :total="total * 10"
        ></el-pagination>
      </el-col>
    </el-row>
    <el-dialog
      class="window"
      title="发布文章"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <el-row type="flex">
        <el-col :span="4" :offset="4">
          <label for>标题:</label>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-input placeholder="标题" v-model="title"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="4" :offset="4">
          <label for>正文:</label>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <!-- <el-col :span="2">
          <label for="">
            正文:
          </label>
        </el-col>-->
        <el-col :span="16">
          <wangediter :catchData="catchData" />
        </el-col>
      </el-row>
      <el-row class="foot" align="center">
        <el-button class="btn-content" type="primary" @click="addArticle">确定</el-button>
        <el-button class="btn-content" type="primary" @click="handleClose">取消</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/index.js";
import wangediter from "@/components/wangediter.vue";
export default {
  components: {
    wangediter
  },
  data() {
    return {
      articleList: [],
      sliceArticleList: [],
      dialogVisible: false,
      title: "",
      content: "",
      total: 0,
      currentPage: 1,
      content: ""
    };
  },
  methods: {
    // reinitIframe() {
    //   var iframe = document.getElementById("test");
    //   try {
    //     var bHeight = iframe.contentWindow.document.body.scrollHeight;
    //     var dHeight =
    //       iframe.contentWindow.document.documentElement.scrollHeight;
    //     var height = Math.max(bHeight, dHeight);
    //     iframe.height = height;
    //     console.log(height);
    //   } catch (ex) {}
    // }
    // window.setInterval("reinitIframe()", 200);
    currentChange(e) {
      this.currentPage = e;
    },
    getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    },
    handleClose() {
      this.dialogVisible = false;
    },
    catchData(e) {
      this.content = e;
    },
    addArticle() {
      api
        .addArticle({
          id: 1,
          type: "article",
          subtype: "add",
          data: {
            title: this.title,
            content: this.content
          }
        })
        .then(res => {
          this.$router.go(0);
        });
    }
  },
  mounted() {
    // console.log(this.getCookie('token'))
    // this.getCookie('token')
    // console.log(getCookie('token'))
    if (this.getCookie("token") == "") {
      this.$router.push({ path: "/login" });
    }
    // console.log(222)
    // console.log(this.$store.state.token)
    api.getArticleList({}).then(res => {
      this.articleList = res.data.data.list;
      // console.log(this.articleList)

      let chunk = 4; //每3个分一组
      this.total = Math.ceil(this.articleList.length / chunk);
      for (let i = 0, j = this.articleList.length; i < j; i += chunk) {
        this.sliceArticleList.push(this.articleList.slice(i, i + chunk));
        // console.log(this.sliceArticleList[1],this.sliceArticleList[0])
        // api.getNickname({
        //   id: 0,
        //   type: "info",
        //   subtype: "nickname",
        //   data: {
        //     user_id:
        //   }
        // });
        // var reg = /<p>(.*?)</g;
        // console.log(reg.exec(this.sliceArticleList[i][content]));
        // this.content = reg.exec(this.sliceArticleList.content);
        // console.log(this.sliceArticleList);
      }
    });

    // console.log(this.sliceArticleList);
  }
};
</script>

<style lang="sass">
  @import '@/assets/css/bbs.scss'
</style>