<template>
  <div id="container" ref="container">
    <div
      id="content" ref="content"
      v-bind:style="{left: elementX + 'px', top: elementY + 'px'}"
      v-on:mousedown="onPressed" v-on:mouseover="onMoveThrought"
    ></div>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  name: "mascot",
  data() {
    return {
      userPressed: false,
      userPressedX: -1,
      userPressedY: -1,
      baseElementX: -1,
      baseElementY: -1,
      elementX: 0,
      elementY: 0
    };
  },
  methods: {
    onPressed: function(event) {
      this.userPressed = true;
      this.userPressedX = event.pageX;
      this.userPressedY = event.pageY;
      this.baseElementX = this.elementX;
      this.baseElementY = this.elementY;

      event.preventDefault();
    },
    onReleased: function(event) {
      if (this.userPressed) {
        event.preventDefault();
        this.userPressed = false;

        if ( Math.abs(event.pageX - this.userPressedX) <= 10 && Math.abs(event.pageY - this.userPressedY) <= 10 )
          this.onClicked(event);
      }
    },
    onMoving: function(event) {
      if (this.userPressed) {
        event.preventDefault();

        this.setElementPosition(
          this.baseElementX + event.pageX - this.userPressedX,
          this.baseElementY + event.pageY - this.userPressedY
        );
      }
    },
    onResize: function(event) {
      this.setElementPosition(this.elementX, this.elementY);
    },
    setElementPosition: function(x, y) {
      this.elementX = Math.max(0, Math.min(this.$refs.container.clientWidth - this.$refs.content.clientWidth, x));
      this.elementY = Math.max(0, Math.min(this.$refs.container.clientHeight - this.$refs.content.clientHeight, y));
    },
    onClicked: function(event) {
      console.log("Clicked");
    },
    onMoveThrought: function(event) {
      console.log("Throught");
    }
  },
  mounted: function() {
    window.addEventListener("mousemove", this.onMoving);
    window.addEventListener("mouseup", this.onReleased);
    window.addEventListener("resize", this.onResize);
  }
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}

#content {
  position: absolute;
  z-index: 99;
  left: 0px;
  top: 0px;

  overflow: hidden;

  width: 175px;
  height: 125px;
  background-size: 100% auto;
  background-image: url("~@/assets/img/home/logo.webp");
  background-repeat: no-repeat;
}

@media (max-width: 500px) {
  #content {
    display: none;
  }
}
</style>