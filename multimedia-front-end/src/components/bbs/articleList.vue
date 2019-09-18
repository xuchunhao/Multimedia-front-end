<template>
  <div class="article-list">
    <div class="article-index">
      <el-row type="flex" class="title-line">
        <el-col :span="24">
          <img :src="'https://dmt.lcworkroom.cn/api/get/portrait/' + articleInfo.user_id" alt />
          <span>{{articleInfo.user_id}}</span>
          <span>【{{articleInfo.title}}】</span>
        </el-col>
      </el-row>
      <el-row v-if="currentPage == 1" type="flex" class="iframe-index">
        <el-col :span="24">
          <div v-html="articleInfo.content">

          </div>
        </el-col>
      </el-row>
    </div>
    <div
      class="comment-content"
      v-for="(comment,index) in sliceCommentList[currentPage-2]"
      :key="index"
    >
      <div class="comment-every">
        <img :src="'https://dmt.lcworkroom.cn/api/get/portrait/' + comment.user_id" alt />
        <div>
          <el-row>
            <span>{{comment.user_id}}</span>
          </el-row>
          <el-row>
            <div v-html="comment.content" class="comment-every-list">

            </div>
          </el-row>
        </div>
      </div>
    </div>
    <el-dialog
      class="window"
      title="发布评论"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <wangediter :catchData="catchData" />
        </el-col>
      </el-row>
      <el-row class="foot" type="flex" justify="center">
        <el-col :span="8">
          <el-button class="btn-content" type="primary" @click="addComment">确定</el-button>
          <el-button class="btn-content" type="primary" @click="handleClose">取消</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <el-row type="flex" justify="end"  class="finally">
      <el-col :span="4">
        <el-button @click="dialogVisible=true">发布评论</el-button>
      </el-col>
      <el-col :span="4">
        <router-link to="/bbs">
          <el-button class="back-bbs">返回论坛</el-button>
        </router-link>
      </el-col>
    </el-row>
    
    <el-row type="flex" justify="end" style="margin-top:15px">
      <el-col :span="4">
        <el-pagination
          @current-change="currentChange"
          layout="prev, pager, next"
          :total="total * 10"
        ></el-pagination>
      </el-col>
    </el-row>
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
      item: [],
      articleInfo: "",
      dialogVisible: false,
      reply: "",
      commentList: "",
      sliceCommentList: [],
      currentPage: 1,
      total: 0
    };
  },
  methods: {
    catchData(e) {
      this.reply = e;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    addComment() {
      api
        .addComment({
          id: 1234,
          type: "comment",
          subtype: "add",
          data: {
            article_id: this.articleInfo.article_id,
            content: this.reply
          }
        })
        .then(res => {
          alert("添加成功");
          this.$router.push({ path: "/bbs" });
        });
    },
    currentChange(e) {
      this.currentPage = e;
    }
  },
  mounted() {
    this.item = this.$route.params.item;
    // console.log(this.item)
    // console.log(this.item.article_id)
    api
      .getArticleListMore({
        article_id: this.item.article_id
      })
      .then(res => {
        // console.log(res)
        this.articleInfo = res.data.data.list[0];
        // console.log(this.articleInfo)
        api
          .getCommentList({
            article_id: this.item.article_id
          })
          .then(res => {
            this.commentList = res.data.data.list;
            // console.log(this.commentList)
            let chunk = 3; //每3个分一组
            this.total = Math.ceil(this.commentList.length / chunk) + 1;
            for (let i = 0, j = this.commentList.length; i < j; i += chunk) {
              this.sliceCommentList.push(this.commentList.slice(i, i + chunk));
            }
            // console.log(this.sliceCommentList)
          });
      });

    api
      .getCommentList({
        article_id: this.item.article_id
      })
      .then(res => {
        this.commentList = res.data.data.list;
        // console.log(this.commentList)
        let chunk = 3; //每3个分一组
        this.total = Math.ceil(this.commentList.length / chunk) + 1;
        for (let i = 0, j = this.commentList.length; i < j; i += chunk) {
          this.sliceCommentList.push(this.commentList.slice(i, i + chunk));
        }
        // console.log(this.sliceCommentList)
      });
  }
  // mounted () {
  //   api.getArticleList({

  //   }).then(res => {
  //     console.log(res,res.data.data.list);
  //     this.articleList = res.data.data.list;
  //   })
  // }
};
</script>

<style lang="sass">
  @import '@/assets/css/articleList.scss'
</style>