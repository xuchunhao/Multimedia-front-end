<template>
  <div id="floating-content" v-on:onmousedown="onPressed" v-on:onmouseup="onReleased">
  </div>
</template>

<script>
export default {
  name: "mascot",
  data: {
    userPressed: false
  },
  methods: {
    onPressed: function(event) {
      alert("NMSL");
    },
    onReleased: function(event) {
      console.log("Released");
    }
  }
};
</script>

<style scoped>
@media (orientation: landscape) {
  #floating-content {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 99;

    overflow: hidden;

    width: 175px;
    height: 125px;
    background-size: 100% auto;
    background-image: url("~@/assets/img/home/logo.webp");
    background-repeat: no-repeat;
  }
}

@media (orientation: portrait) {
  #floating-content {
    display: none;
  }
}
</style>