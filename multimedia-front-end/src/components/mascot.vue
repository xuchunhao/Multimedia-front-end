<template>
  <div
    id="floating-content"
    v-bind:style="{left: elementX + 'px', top: elementY + 'px'}"
    v-on:mousedown="onPressed"
  ></div>
</template>

<script>
export default {
  el: "floating-content",
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
      }
    },
    onMoving: function(event) {
      if (this.userPressed) {
        event.preventDefault();

        this.elementX = this.baseElementX + event.pageX - this.userPressedX;
        this.elementY = this.baseElementY + event.pageY - this.userPressedY;
      }
    },
    onResize: function(event) {
      console.log("Resize")
    }
  },
  mounted: function() {
    window.addEventListener("mousemove", this.onMoving);
    window.addEventListener("mouseup", this.onReleased);
  }
};
</script>

<style scoped>
#floating-content {
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
  #floating-content {
    display: none;
  }
}
</style>