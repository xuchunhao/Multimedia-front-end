<template>
  <div class="card">
    <transition name="el-zoom-in-top">
      <ul v-show="show1" class="transition-box">
        <router-link to="introduce" tag="li">
          <span>纵 览</span>
          <span>Brief Introduction</span>
        </router-link>
        <router-link to="technology" tag="li">
          <span>匠 心</span>
          <span>Technological Process</span>
        </router-link>
        <router-link to="source" tag="li">
          <span>溯 源</span>
          <span>Trace to the Source</span>
        </router-link>
        <router-link to="inherit" tag="li">
          <span>薪 传</span>
          <span>Cultural Inheritance</span>
        </router-link>
        <router-link to="bbs" tag="li">
          <span>众 云</span>
          <span>Tourists BBS</span>
        </router-link>
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