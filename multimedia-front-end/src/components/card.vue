<template>
  <div class="card">
    <transition name="el-zoom-in-top">
      <ul v-show="show1" class="transition-box">
        <router-link to="introduce" tag="li">
          <span>简 介</span>
          <span>Brief Introduction</span>
        </router-link>
        <router-link to="technology" tag="li">
          <span>工 艺 流 程</span>
          <span>Technological Process</span>
        </router-link>
        <router-link to="source" tag="li">
          <span>溯 源</span>
          <span>Trace to the Source</span>
        </router-link>
        <router-link to="inherit" tag="li">
          <span>文 化 传 承</span>
          <span>Cultural Inheritance</span>
        </router-link>
        <li>
          <span>娱 乐 互 动</span>
          <span>Entertainment</span>
        </li>
        <router-link to="bbs" tag="li">
          <span>游 客 论 坛</span>
          <span>Tourists BBS</span>
        </router-link>
        <li>
          <span>关 于 我 们</span>
          <span>About Us</span>
        </li>
      </ul>
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show1:false
    }
  },
  mounted () {
    this.show1 = !this.show1;
  }
}
</script>