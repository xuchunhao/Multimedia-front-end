<template>
  <div class="article-list">
    <div class="article-index">
      <el-row type="flex" class="title-line">
        <el-col :span="16">
          <img :src="'https://dmt.lcworkroom.cn/api/get/portrait/' + activeInfo.user_id" alt />
          <span>{{activeInfo.nickname}}</span>
          <span>【{{activeInfo.title}}】</span>
        </el-col>
        <el-col :span="8">
          <span>{{activeInfo.start_time}}</span>
          <span>{{activeInfo.end_time}}</span>
        </el-col>
      </el-row>
      <el-row type="flex" class="iframe-index">
        <el-col :span="24">
          <div v-html="activeInfo.content"></div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="activity-button">
        <el-col :span="3">
          <el-button @click="joinActivity">加入</el-button>
        </el-col>
        <el-col :span="3">
          <el-button @click="exitActivity" class="exit-btn">退出</el-button>
        </el-col>
      </el-row>
    </div>
    <el-row class="portrait-list">
      <el-col :span="2" v-for="(item,index) in portraitList" :key="index">
        <img :src="'https://dmt.lcworkroom.cn/api/get/portrait/' + item" alt />
      </el-col>
    </el-row>
    <el-row type="flex" justify="end" class="finally">
      <el-col :span="3">
        <router-link to="/bbs">
          <el-button class="back-bbs">返回论坛</el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
// import wangediter from "@/components/wangediter.vue";
export default {
  components: {},
  data() {
    return {
      item: [],
      activeInfo: "",
      commentList: "",
      sliceCommentList: [],
      portraitList: []
    };
  },
  methods: {
    joinActivity() {
      api.joinActivity({
        id: 1,
        type: "active",
        subtype: "join",
        data: {
          active_id: this.item.active_id
        }
      }).then(res => {
        this.$router.push({ path: "/bbs" });
      });
    },
    exitActivity() {
      api.exitActivity({
        id: 1,
        type: "active",
        subtype: "exit",
        data: {
          active_id: this.item.active_id
        }
      }).then(res => {
        this.$router.push({ path: "/bbs" });
      });
    }
  },
  mounted() {
    this.item = this.$route.params.item;
    api
      .getActive({
        active_id: this.item.active_id
      })
      .then(res => {
        this.activeInfo = res.data.data.list[0];
      });

    api
      .getActivityPeople({
        active_id: this.item.active_id
      })
      .then(res => {
        this.portraitList = res.data.data.list;
      });
  }
};
</script>

<style lang="sass">
  @import '@/assets/css/articleList.scss'
</style>