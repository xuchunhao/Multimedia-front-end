<template>
  <div class="wheel">
    <!-- <div v-if="this.materialList.length>1" class="arrow-left" @click="materialKeyEdit(-1)"><img src="../../assets/image/arrow-left.png" alt=""></div> -->

    <div class="material-scroll" ref="material-scroll" @mousewheel="scrollEvent">
      <div class="material-left" id="material-scroll">
        <div
          class="material-box"
          v-for="(item,index) in materialList"
          :key="index"
          @click="materialKeyEdit(index)"
          :class="{'blue':index==materialKey}"
        >
          <div>
            <img style="max-width:100%;max-height:100%" class :src="item" alt />
          </div>
          <!-- <div v-if="item.match(/((http|https):\/\/)/ig) && item.match(/((.jpg|.png|.gif|.webp))/ig)">
              <img style="max-width:100%;max-height:100%" class :src="item" alt />
            </div>

            <div
              v-else-if="item.match(/((http|https):\/\/)/ig) && item.match(/((.mp4|.rmvb|.rm|.3gp|.mov|.avi))/ig)"
            >
              <video style="max-width:100%;max-height:100%" :src="item" alt></video>
            </div>

          <div style="width:80%" v-else>{{item}}</div>-->
        </div>
      </div>
    </div>

    <div
      class="material-right"
      style
      v-for="(item,index) in materialList"
      :key="index"
      v-show="index==materialKey"
    >
      <!-- <div class="arrow-left" @click="materialKeyAdd(-1)">
        <i class="el-icon-arrow-up"></i>
      </div> -->

      <div>
        <img class :src="item" alt style="max-height:45vh" />
      </div>
      <!-- <div v-if="item.match(/((http|https):\/\/)/ig) && item.match(/((.jpg|.png|.gif|.webp))/ig)">
          <img class :src="item" alt style="max-height:45vh" />
        </div>

        <div
          v-else-if="item.match(/((http|https):\/\/)/ig) && item.match(/((.mp4|.rmvb|.rm|.3gp|.mov|.avi))/ig)"
        >
          <video style="max-height:45vh" :src="item" alt controls="controls"></video>
        </div>

        <div v-else>{{item}}
      </div>-->
      <!-- 
      <div class="arrow-right" @click="materialKeyAdd(1)">
        <i class="el-icon-arrow-down"></i>
      </div> -->

      <!-- <p style="text-align:center">{{index+1}} / {{materialList.length}}</p> -->
    </div>

    <!-- <div v-if="this.materialList.length>1" class="arrow-right" @click="materialKeyEdit(1)"><img src="../../assets/image/arrow-right.png" alt=""></div> -->
  </div>
</template>

<script>
export default {
  name: "wheel",
  data() {
    return {
      showMaterial: true,
      materialList: [
        require("@/assets/img/home/cloud1.webp"),
        require("@/assets/img/home/cloud2.webp"),
        require("@/assets/img/home/cloud3.webp"),
        require("@/assets/img/home/cloud4.webp"),
        require("@/assets/img/home/cloud1.webp")
      ],
      materialKey: 0
    };
  },
  methods: {
    // 素材弹框
    
    scrollEvent(e){
      if(e.deltaY > 0) {
        this.materialKey++;
        let box = this.$refs["material-scroll"];
        box.style.marginTop += '75px'; 
        if(this.materialKey > this.materialList.length - 1){
          this.materialKey = 1;
        }

      }
      if(e.deltaY < 0) {
        this.materialKey--;
        let box = this.$refs["material-scroll"];
        box.style.transform = "translateY(" + -75 + "px)";
        if(this.materialKey <= 0){
          this.materialKey = this.materialList.length - 1;
        }
      }
      
      console.log(e)
      // if(e.srcElement.scrollTop+e.srcElement.offsetHeight>e.srcElement.scrollHeight-100 && !this.moreLoading && !this.noMore){
      //   alert(111)
      // }
    },
    materialKeyEdit(num) {
      // console.log(this.materialKey)

      this.materialKey = num;
    },
    materialKeyAdd(num) {
      //上下键函数
      let box = this.$refs["material-scroll"];
      // console.log(this.$refs['material-scroll'])
      //console.log(window.getComputedStyle(box).height);
      let px = window.getComputedStyle(box).height; //可视范围的高度
      let height = Number(px.substring(0, px.length - 2)); //截取字符串，移除px
      // console.log(height);
      let number = Math.round(height / 150); //一个图片75px,获取高度一半需要多少图片，让其居中
      // console.log(number);
      // box.scrollTop = 500
      


      // if (this.materialList.length > 1) {
      //   if (
      //     (this.materialKey == 0 && num > 0) ||
      //     (this.materialKey == this.materialList.length - 1 &&
      //       this.materialList.length - 1 > 0 &&
      //       num < 0) ||
      //     (this.materialKey > 0 &&
      //       this.materialKey < this.materialList.length - 1)
      //   ) {
      //     this.materialKey += num;
      //     if (
      //       this.materialKey < number ||
      //       this.materialKey + (number + 1) > this.materialList.length
      //     ) {
      //       //开始或结尾不滚动
      //       if (this.materialKey < number) {
      //         box.scrollTop = 0;
      //       }
      //       if (this.materialKey + (number + 1) > this.materialList.length) {
      //         box.scrollTop = this.materialList.length * 75;
      //       }
      //     } else {
      //       box.scrollTop += 75 * num; //一次滚动一个图片的高度
      //     }
      //   }
      // }
    }
  }
};
</script>

<style lang="scss" scoped>

.material-scroll {
  //滚动div
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
  float: left;
  width: 25%;
  overflow-y: auto;
  // background: #ddd;
}

.material-left {
  width: 80%;
  max-height: 70vh;
  //  overflow-y: auto;
  //  display:flex;
  //  justify-content: center;
  //  align-items: center;

  //  float: left;
  //  max-height: 300px;
  .material-box {
    margin-bottom: 5px;

    > div {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      width: 95%;
      // border: 1px solid #ddd;
      //background: #fff;
      overflow: hidden;
    }
  }

}
.material-right {
  height: 70vh;
  text-align: center;
  margin-left: 26%;
  position: relative;
  margin-right: 10px;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  > div {
    height: 66vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow-left {
    position: absolute;
    top: -0%;
    left: 2%;
    cursor: pointer;
    // background: #dcdfe6;
    width: 95%;
    height: 6vh;
    font-size: 50px;
    font-weight: bold;
  }
  .arrow-right {
    position: absolute;
    bottom: 5%;
    left: 2%;
    cursor: pointer;
    // background: #dcdfe6;
    width: 95%;
    height: 6vh;
    font-size: 50px;
    font-weight: bold;
  }
  .arrow-left:hover {
    background: #dcdfe6;
    opacity: 0.5;
    color: #fff;
  }
  .arrow-right:hover {
    background: #dcdfe6;
    opacity: 0.5;
    color: #fff;
  }
}
</style>