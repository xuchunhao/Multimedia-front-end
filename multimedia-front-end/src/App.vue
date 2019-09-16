<template lang="zh-cn">
  <div id="app">
    <!-- <div id="spig" class="spig">
      <div id="message"></div>
      <div id="mumu" class="mumu"></div>
    </div> -->
    <!-- <div>
      <router-link to="/navbar">
        导航栏
      </router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import $ from './plugins/jquery-vendor.js'
import './plugins/spig.js'
export default {
  name: 'app',
  data () {
    return {
      visitor:'帅哥',
      title:'',
      isindex:true
    }
  },
  beforeCreate () {
    // var isindex=true;
    // var title="";
    // var visitor="这位怪蜀黍";
  },
  mounted () {
    // var isindex=true;
    // var title="";
    // var visitor="这位怪蜀黍";
  },
  created () {
    // setTimeout(() => {
    //   window.L2Dwidget.init({
    //     pluginRootPath: './plugins/live2dw/',
    //     pluginJsPath: 'lib/',
    //     pluginModelPath: 'live2d-widget-model-koharu/assets/',
    //     tagMode: false,
    //     debug: false,
    //     model: { jsonPath: './plugins/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
    //     display: { position: 'left', width: 150, height: 300 },
    //     mobile: { show: true },
    //     log: false
    //   })
    // }, 1000)
  }
}
</script>

<style lang="scss" scope>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.spig {
    display:block;
    width:175px;
    height:246px;
    position:absolute;
    bottom: 300px;
    left:180px;
    z-index:9999;
}

#message{
    color :#191919;
    border: 1px solid #c4c4c4;
    background:#ddd;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
    border-radius:5px;
    min-height:1em;
    padding:5px;
    top:-45px;
    position:absolute;
    text-align:center;
    width:auto !important;
    z-index:10000;
    -moz-box-shadow:0 0 15px #eeeeee;
    -webkit-box-shadow:0 0 15px #eeeeee;
    border-color:#eeeeee;
    box-shadow:0 0 15px #eeeeee;
    outline:none;
    a{
      color:red;
      text-decoration: none;
    }
}
.mumu{
    width:175px;
    height:125px;
    cursor:move;
    background:url(~@/assets/img/home/logo.webp) no-repeat;
    background-size: 100% 100%;
}
</style>
