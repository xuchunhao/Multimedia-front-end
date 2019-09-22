<template>
  <div class="personal">
    <el-row type="flex" class="info">
      <el-col :span="10">
        <el-row class="info-box" type="flex" justify="center">
          <el-col :span="18">
            <img
              class="porotrait-img"
              :src=" 'https://dmt.lcworkroom.cn/api/get/portrait/' + userInfo.phone"
              alt
            />
            <porotrait />
          </el-col>
        </el-row>
        <el-row class="info-box" type="flex" justify="center">
          <el-col :span="12">
            <h1 v-if="!userInfo.nickname">暂无昵称</h1>
            <h1 v-else>昵称:{{userInfo.nickname}}</h1>
          </el-col>
        </el-row>
        <el-row class="info-box" type="flex" justify="center">
          <el-col :span="8">
            <span v-if="!userInfo.name">(暂无姓名)</span>
            <span v-else>姓名:{{userInfo.name}}</span>
          </el-col>
        </el-row>
        <el-row class="info-box" type="flex" justify="center">
          <el-col :span="16">
            <span v-if="!userInfo.phone">(暂无账号)</span>
            <span v-else>账号(手机号):{{userInfo.phone}}</span>
          </el-col>
        </el-row>
        <el-row class="info-box" type="flex" justify="center">
          <el-col :span="16">
            <span v-if="!userInfo.email">(暂无邮箱)</span>
            <span v-else>邮箱:{{userInfo.email}}</span>
          </el-col>
        </el-row>
        <el-row class="info-box" type="flex" justify="center">
          <el-col :span="6">
            <span class="change-info" @click="dialogVisible=true">编辑资料</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="14">
        <el-row class="kind">
          <el-col
            :span="11"
            :class="{'btn-active': isShow != 'article'}"
          >
            <span @click="isShow = 'article'">帖 子</span>
          </el-col>
          <el-col
            :span="11"
            :class="{'btn-active': isShow != 'activity'}"
          >
            <span @click="isShow = 'activity'">活 动</span>
          </el-col>
        </el-row>
        <el-row v-if="isShow == 'article'">
          <div
            class="comment-content"
            v-for="(comment,index) in sliceCommentList[currentPage - 1]"
            :key="index"
          >
            <router-link
              :to="{name:'article',params:{ name:comment.article_id ,item:comment}}"
              class="comment-every"
              tag="div"
            >
              <div>
                <el-row>
                  <span>{{comment.title}}</span>
                </el-row>
                <el-row>
                  <div v-html="comment.content" class="personal-comment"></div>
                </el-row>
              </div>
            </router-link>
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
        </el-row>
        <el-row v-if="isShow == 'activity'">
          <div
            class="comment-content"
            v-for="(active,index) in sliceActiveList[currentActivePage - 1]"
            :key="index"
          >
            <router-link
              :to="{name:'activity',params:{ name:active.active_id ,item:active}}"
              class="comment-every"
              tag="div"
            >
              <div>
                <el-row>
                  <span>{{active.title}}</span>
                </el-row>
                <el-row>
                  <div v-html="active.content" class="personal-comment"></div>
                </el-row>
              </div>
            </router-link>
          </div>
          <el-row type="flex" justify="end" style="margin-top:15px">
            <el-col :span="4">
              <el-pagination
                @current-change="currentActiveChange"
                layout="prev, pager, next"
                :total="activeTotal * 10"
              ></el-pagination>
            </el-col>
          </el-row>
        </el-row>
        <el-row type="flex" justify="end">
          <el-col :span="4">
            <router-link to="/bbs">
              <el-button class="back-bbs">返回论坛</el-button>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog
      class="window"
      title="编辑资料"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <el-row type="flex" justify="center">
        <el-col :span="2">
          <label for>手机号:</label>
        </el-col>
        <el-col :span="12">
          <el-input v-model="userInfo.phone" placeholder="请输入手机号" :value="userInfo.phone"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="2">
          <label for>昵称:</label>
        </el-col>
        <el-col :span="12">
          <el-input v-model="userInfo.nickname" placeholder="请输入昵称" :value="userInfo.nickname"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="2">
          <label for>姓名:</label>
        </el-col>
        <el-col :span="12">
          <el-input v-model="userInfo.name" placeholder="请输入姓名" :value="userInfo.name"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="2">
          <label for>邮箱:</label>
        </el-col>
        <el-col :span="12">
          <el-input v-model="userInfo.email" placeholder="请输入邮箱" :value="userInfo.email"></el-input>
        </el-col>
      </el-row>
      <el-row class="foot" align="center">
        <el-button class="btn-content" type="primary" @click="change">确认</el-button>
        <el-button class="btn-content" type="primary" @click="handleClose">取消</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/index.js";
import porotrait from "@/components/porotrait.vue";

export default {
  data() {
    return {
      userInfo: {},
      dialogVisible: false,
      commentList: "",
      activeList:"",
      sliceCommentList: [],
      sliceActiveList: [],
      currentPage: 1,
      currentActivePage: 1,
      total: 0,
      activeTotal: 0,
      isShow: "article"
    };
  },
  mounted() {
    api
      .getUserInfo({})
      .then(res => {
        // console.log(res);
        this.userInfo = res.data.data;
      })
      .then(res => {
        api
          .getArticleListMore({
            user_id: this.userInfo.phone,
            mode: 1
          })
          .then(res => {
            this.commentList = res.data.data.list;
            let chunk = 4; //每3个分一组
            this.total = Math.ceil(this.commentList.length / chunk);
            for (let i = 0, j = this.commentList.length; i < j; i += chunk) {
              this.sliceCommentList.push(this.commentList.slice(i, i + chunk));
            }
            // console.log(this.commentList)
          });
      });
    
    api
      .getUserInfo({})
      .then(res => {
        // console.log(res);
        this.userInfo = res.data.data;
      })
      .then(res => {
        api
          .getActive({
            user_id: this.userInfo.phone,
            mode: 1
          })
          .then(res => {
            console.log(res)
            this.activeList = res.data.data.list;
            let chunk = 4; //每3个分一组
            this.activeTotal = Math.ceil(this.activeList.length / chunk);
            for (let i = 0, j = this.activeList.length; i < j; i += chunk) {
              this.sliceActiveList.push(this.activeList.slice(i, i + chunk));
            }
            // console.log(this.commentList)
          });
      });
  },
  components: {
    porotrait
  },
  methods: {
    currentChange(e) {
      this.currentPage = e;
    },
    currentActiveChange(e) {
      this.currentActivePage = e;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    change() {
      api
        .changeInfo({
          id: 0,
          type: "info",
          subtype: "update",
          data: {
            phone: this.userInfo.phone,
            name: this.userInfo.name,
            nickname: this.userInfo.nickname,
            email: this.userInfo.email
          }
        })
        .then(res => {
          this.$router.go(0);
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/personal.scss";
</style>