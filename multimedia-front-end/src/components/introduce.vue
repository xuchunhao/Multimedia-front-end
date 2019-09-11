<template>
  <div class="introduce">
    <h2 style="text-align:center">简介</h2>
    <introduce-main v-if="this.currentPage == 1" />
    <kind v-if="this.currentPage == 2" :kind-list="kindList1" />
    <kind v-if="this.currentPage == 3" :kind-list="kindList2" />
    <el-pagination @current-change="currentChange" layout="prev, pager, next" :total="30"></el-pagination>
  </div>
</template>

<script>
import introduceMain from '@/components/introduceMain.vue'
import kind from '@/components/kind.vue'
export default {
  data () {
    return {
      currentPage:1,
      kindList1:[
        {
          src:require("@/assets/img/kind/waist-drum.webp"),
          name:"腰鼓",
          appearance:"窄径，腰身高且略胖，高约80cm",
          voice:"",
          purpose:"挂在腰间击打，节日活动中使用"
        },
        {
          src:require("@/assets/img/kind/opera-drum.webp"),
          name:"戏鼓",
          appearance:"鼓面略大，腰身略胖",
          voice:"",
          purpose:"戏剧团做戏时中使用"
        },
        {
          src:require("@/assets/img/kind/hand-drum.webp"),
          name:"手鼓",
          appearance:"小巧易拿，腰身略胖，高约28cm",
          voice:"",
          purpose:"掌于手中击打，节日活动中使用"
        },
        {
          src:require("@/assets/img/kind/toys-drum.webp"),
          name:"玩具鼓",
          appearance:"造型小巧，高约15cm",
          voice:"",
          purpose:"孩童玩耍时的玩具鼓"
        },
      ],
      kindList2:[
        {
          src:require("@/assets/img/kind/activity-drum.webp"),
          name:"活动鼓",
          appearance:"鼓身中等，鼓面略大",
          voice:"",
          purpose:"日常风俗活动常用鼓"
        },
        {
          src:require("@/assets/img/kind/big-drum.webp"),
          name:"大鼓",
          appearance:"鼓面庞大，鼓身厚重，直径1m以上，最大可达3.3m，此鼓为直径约1.8m",
          voice:"雄浑",
          purpose:"节目、祭祀等大型活动用鼓"
        },
        {
          src:require("@/assets/img/kind/buddha-drum.webp"),
          name:"佛鼓",
          appearance:"通身木黄，鼓面带毛",
          voice:"",
          purpose:"寺庙法事活动用鼓"
        },
        {
          src:require("@/assets/img/kind/command-drum.webp"),
          name:"指挥鼓",
          appearance:"窄径，腰身高，通身木黄",
          voice:"清脆悦耳",
          purpose:"活动演出中指挥用鼓"
        },
      ]
    }
  },
  methods:{
    currentChange (e) {
      this.currentPage = e
    }
  },
  components:{
    introduceMain,
    kind
  }
};
</script>

<style lang="sass">
  @import '@/assets/css/introduce.scss'
</style>