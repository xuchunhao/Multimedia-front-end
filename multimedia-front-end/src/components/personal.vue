<template>
  <div class="personal">
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <img
          class="porotrait-img"
          :src=" 'https://dmt.lcworkroom.cn/api/get/portrait/' + userInfo.phone"
          alt
        />
        <porotrait />
      </el-col>
      <el-col :span="14">2</el-col>
    </el-row>
    <el-row type="flex" justify="center" class="info">
      <el-col :span="10">
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
          <el-col :span="4">
            <span class="change-info" @click="dialogVisible=true">编辑资料</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="14">3</el-col>
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
      dialogVisible: false
    };
  },
  mounted() {
    api.getUserInfo({}).then(res => {
      // console.log(res);
      this.userInfo = res.data.data;
    });
  },
  components: {
    porotrait
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    change() {
      api.changeInfo({
        id: 0,
        type: "info",
        subtype: "update",
        data: {
          phone: this.userInfo.phone,
          name: this.userInfo.name,
          nickname: this.userInfo.nickname,
          email: this.userInfo.email
        }
      }).then(res => {
        this.$router.go(0)
      })
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/personal.scss";
</style>