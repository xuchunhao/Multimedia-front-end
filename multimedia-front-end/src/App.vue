<template lang="zh-cn">
<div id="canvas">
  <div id="app">
    <div id="spig" class="spig">
      <div id="message"></div>
      <div id="mumu" class="mumu"></div>
    </div>
    
    <!-- <div>
      <router-link to="/navbar">
        导航栏
      </router-link>
    </div> -->
    <router-view></router-view>
  </div>
</div>
  
</template>

<script>
import $ from './plugins/jquery-vendor.js'
import './plugins/spig.js'
export default {
  name: 'app',
  data () {
    return {
      title:'',
      isindex:true
    }
  },
}
</script>

<style lang="scss" scope>
@import '@/assets/css/app.scss';

*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.spig {
    display:block;
    width:100px;
    height:246px;
    position:absolute;
    bottom: 300px;
    left:180px;
    z-index:9999;
}

#message{
  color :#191919;
  border: 1px solid #c4c4c4;
  background:transparent;
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
  border-radius:5px;
  min-height:1em;
  padding:5px;
  top:0px;
  right: -350px;
  position:absolute;
  text-align:center;
  width:300px !important;
  z-index:10000;
  -moz-box-shadow:0 0 15px #eeeeee;
  -webkit-box-shadow:0 0 15px #eeeeee;
  border-color:#eeeeee;
  box-shadow:0 0 15px #eeeeee;
  outline:none;
  .fl{
    float: left;
    cursor: pointer;
  }
  .big-logo{
    display: block;
    color:rgb(165, 42, 26);
    text-decoration: none;
    line-height: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url('~@/assets/img/spig/big.webp');
    background-size: 100% 100%;
    font-size: 12px;
  }
  .pages{
    display: none;
    .small-logo{
    font-size: 10px;
    float: left;
    display: block;
    color:rgb(165, 42, 26);
    text-decoration: none;
    margin-top: 5px;
    line-height: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url('~@/assets/img/spig/big.webp');
    background-size: 100% 100%;
    }
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
