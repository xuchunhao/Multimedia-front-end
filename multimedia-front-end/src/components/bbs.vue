<template>
  <div class="bbs">
    <div class="user">
      <div class="bbs-top">
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
            <el-row>
              <el-col :span="12">
                <el-button @click="isShow = 'article'" class="btn-article">帖 子</el-button>
              </el-col>
              <el-col :span="12">
                <el-button @click="isShow = 'activity'" class="btn-activity">活 动</el-button>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-button
              v-if="isShow == 'article'"
              @click="dialogVisible=true"
              icon="el-icon-edit-outline"
              class="btn-submit"
              round
            ></el-button>
            <el-button
              v-if="isShow == 'activity'"
              @click="activeVisible=true"
              class="btn-submit"
            >发起活动</el-button>
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
    <div class="article" v-if="isShow == 'article'">
      <div
        class="bbs-content"
        v-for="(item,index) in sliceArticleList[currentPage - 1]"
        :key="index"
      >
        <router-link
          :to="{name:'article',params:{ name:item.article_id ,item:item}}"
          class="bbs-every"
          tag="div"
        >
          <img :src="'https://dmt.lcworkroom.cn/api/get/portrait/' + item.user_id" alt />
          <div>
            <h3>{{item.title}}</h3>
            <span>{{item.nickname}}</span>
            <p>{{item.content}}</p>
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
    <div v-if="isShow == 'activity'" class="activity">
      <activity />
      <el-dialog
        class="window"
        title="发起活动"
        :visible.sync="activeVisible"
        :before-close="activityClose"
      >
        <el-row type="flex">
          <el-col :span="4" :offset="4">
            <label for>标题:</label>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="16">
            <el-input placeholder="标题" v-model="activityTitle"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <span class="demonstration">开始时间:</span>
            <el-date-picker value-format="yyyy-MM-dd hh:mm:ss" v-model="startTime" type="datetime" placeholder="选择开始时间"></el-date-picker>
          </el-col>
          <el-col :span="8">
            <span class="demonstration">结束时间:</span>
            <el-date-picker value-format="yyyy-MM-dd hh:mm:ss" v-model="endTime" type="datetime" placeholder="选择开始时间"></el-date-picker>
          </el-col>
        </el-row>
        <el-row type="flex">
          <el-col :span="4" :offset="4">
            <label for>正文:</label>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="16">
            <wangediter :catchData="catchActivity" />
          </el-col>
        </el-row>
        <el-row class="foot" align="center">
          <el-button class="btn-content" type="primary" @click="addActivity">确定</el-button>
          <el-button class="btn-content" type="primary" @click="activityClose">取消</el-button>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import wangediter from "@/components/wangediter.vue";
import activity from "@/components/bbs/activity.vue";

export default {
  components: {
    wangediter,
    activity
  },
  data() {
    return {
      startTime: "",
      endTime: "",
      isShow: "article",
      articleList: [],
      sliceArticleList: [],
      dialogVisible: false,
      activeVisible: false,
      title: "",
      activityTitle: "",
      content: "",
      activityContent: "",
      total: 0,
      currentPage: 1,
      content: ""
    };
  },
  methods: {
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
    activityClose() {
      this.activeVisible = false;
    },
    catchData(e) {
      this.content = e;
    },
    catchActivity(e) {
      this.activityContent = e;
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
    },
    addActivity() {
      api
        .addActivity({
          id: 1,
          type: "active",
          subtype: "add",
          data: {
            title: this.activityTitle,
            content: this.activityContent,
            start_time: this.startTime,
            end_time: this.endTime
          }
        })
        .then(res => {
          this.$router.go(0);
        });
    }
  },
  mounted() {
    if (this.getCookie("token") == "") {
      this.$router.push({ path: "/login" });
    }
    api.getArticleList({}).then(res => {
      this.articleList = res.data.data.list;
      let chunk = 4; //每3个分一组
      this.total = Math.ceil(this.articleList.length / chunk);
      for (let i = 0, j = this.articleList.length; i < j; i += chunk) {
        this.sliceArticleList.push(this.articleList.slice(i, i + chunk));
      }
    });
  }
};
</script>

<style lang="sass">
  @import '@/assets/css/bbs.scss'
</style>