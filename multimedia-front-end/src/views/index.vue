<template>
  <div id="content">
    <div id="center-content">
      <div id="decoration-cloud-container">
        <img id="decoration-cloud-1" src="~@/assets/img/home/cloud1.webp" />
        <img id="decoration-cloud-2" src="~@/assets/img/home/cloud2.webp" />
        <img id="decoration-cloud-3" src="~@/assets/img/home/cloud3.webp" />
        <img id="decoration-cloud-4" src="~@/assets/img/home/cloud4.webp" />
      </div>
      <div id="main-footer" />
      <div id="main-text">
        <div id="main-title">
          <img src="~@/assets/img/home/title.webp" alt id="title" draggable="false" />
          <img src="~@/assets/img/home/seal.webp" alt id="seal" draggable="false" />
        </div>
        <div id="main-logo">
          <img src="~@/assets/img/home/logo.webp" alt id="logo" draggable="false" />
        </div>
      </div>
    </div>
    <router-link to="/navbar" id="main-navbar-button">
      <img src="~@/assets/img/home/btn-threeline.webp" />
    </router-link>
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