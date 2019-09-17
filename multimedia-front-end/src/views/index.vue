<template>
  <div id="content-background">
    <div id="decoration_cloud_container">
        <img id="decoration_cloud_1" src="~@/assets/img/home/cloud1.webp" />
        <img id="decoration_cloud_2" src="~@/assets/img/home/cloud2.webp" />
        <img id="decoration_cloud_3" src="~@/assets/img/home/cloud3.webp" />
        <img id="decoration_cloud_4" src="~@/assets/img/home/cloud4.webp" />
      </div>
    <div id="content">
      
      <div id="center-content">
        <div id="content-title">
          <img src="~@/assets/img/home/title.webp" alt id="title" draggable="false" />
          <img src="~@/assets/img/home/seal.webp" alt id="seal" draggable="false" />
        </div>
        <div id="content-logo">
          <img src="~@/assets/img/home/logo.webp" alt id="logo" draggable="false" />
        </div>
      </div>
      <router-link to="/navbar">
        <img src="~@/assets/img/home/btn-threeline.png" alt id="btn-threeline" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="sass">
  @import '@/assets/css/home.scss'
</style>