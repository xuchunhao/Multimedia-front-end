<template>
  <div class="active-list">
    <div
      class="bbs-content"
      v-for="(item,index) in sliceActiveList[activeCurrentPage - 1]"
      :key="index"
    >
      <router-link
        :to="{name:'activity',params:{ name:item.active_id ,item:item}}"
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
    <el-row type="flex" justify="end">
      <el-col :span="4">
      <el-pagination
        @current-change="activeCurrentPage"
        layout="prev, pager, next"
        :total="activityTotal * 10"
      ></el-pagination>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      activeList: [],
      sliceActiveList: [],
      activeCurrentPage: 1,
      activityTotal: 0
    };
  },
  mounted() {
    api.getActiveList(
      
    ).then(res => {
      this.activeList = res.data.data.list;
      console.log(this.activeList)
      let chunk = 4; //每3个分一组
      this.activityTotal = Math.ceil(this.activeList.length / chunk);
      for (let i = 0, j = this.activeList.length; i < j; i += chunk) {
        this.sliceActiveList.push(this.activeList.slice(i, i + chunk));
      }
    });
  }
};
</script>