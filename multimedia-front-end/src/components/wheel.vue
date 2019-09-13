<template>
  <div class="wheel">
    <!-- <div v-if="this.materialList.length>1" class="arrow-left" @click="materialKeyEdit(-1)"><img src="../../assets/image/arrow-left.png" alt=""></div> -->

    <div class="wheel-box">
      <div class="material-scroll">
        <div class="material-left" id="material-scroll" ref="material-scroll" @mousewheel="scrollEvent">
          <div
            class="material-box"
            v-for="(item,index) in materialList"
            :key="index"
            @click="materialKeyEdit(index)"
          >
            <div> 
              <div class="first-content">
                <img class="first" v-if="index == materialKey - 2" style="max-width:100%;max-height:100%" :src="item.src" alt />
              </div>
              <div class="first-content">
                <img class="second" v-if="index == materialKey - 1" style="max-width:100%;max-height:100%" :src="item.src" alt />
              </div>
              <div class="first-content">
                <img class="thrid" v-if="index == materialKey" style="max-width:100%;max-height:100%" :src="item.src" alt />
              </div>
              <div class="fourth-content">
                <img class="fourth" v-if="index == materialKey + 1" style="max-width:100%;max-height:100%" :src="item.src" alt />
              </div>
              <div class="fifth-content">
                <img class="fifth" v-if="index == materialKey + 2" style="max-width:100%;max-height:100%" :src="item.src" alt />
              </div>
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

        <div class="material-content">
          <h3>{{item.title}}</h3>
          <div>{{item.content}}</div>
          <img class :src="item.realsrc" alt style="max-height:45vh" />
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
  </div>
</template>

<script>
export default {
  name: "wheel",
  data() {
    return {
      lastIndex: 0,
      showMaterial: true,
      materialList: [{
          src:require("@/assets/img/technology/1.webp"),
          realsrc:require("@/assets/img/technology/1.real.webp"),
          title:'牛皮处理',
          content:'做鼓的第一步是牛皮处理，又细分为浸泡和刨皮。最早的时候牛皮都是自己处理的，用石灰水溶液脱毛防蛀，现在则是使用从国外购进已经处理好的牛皮，再用水浸泡一夜使其软化。做鼓强调“一整张牛皮”——选用一整张的牛皮做鼓会使鼓面更加紧密，再用牛皮绷紧以后的声音才会更响，更浑厚。非遗传承人对我们说：“我们做过最大的鼓是现在在杭州灵隐寺的那面，直径有三米三多，用的也是一整张完整的牛皮，是不是‘一整张’声音完全不一样的。”'
        },{
          src:require("@/assets/img/technology/2.webp"),
          realsrc:require("@/assets/img/technology/2.real.webp"),
          title:'刨皮',
          content:'俗话说：皮有多大鼓就有多大。枧桥董的制鼓艺人往往是根据牛皮的大小来决定鼓的大小，因为每一个大鼓鼓面都是用一张完整的牛皮制成的。牛皮越大越难得，而且牛身上不能有任何伤痕，所以大鼓是可遇不可求的。刨牛皮最具技术性，稍不留神就会使整张牛皮报废。刨好的牛皮要薄厚相当，平均4至5毫米左右，过厚声音不脆，过薄则容易坏，只有掌握一个恰当的皮，声音才会好听。'
        },{
          src:require("@/assets/img/technology/3.webp"),
          realsrc:require("@/assets/img/technology/3.real.webp"),
          title:'锯鼓板',
          content:'枧桥鼓大多使用木头制作，因此鼓的木材选用的是优质干燥的东北松木或樟木，而这些木材本身最好是弯曲的，然后根据木材的弧度来制作相应的鼓。一般这个比例是：鼓的直径和它的高度相差10%。每次在拼装前都要把锯好的鼓身坯料放在地上晾干，晒制之后的鼓板更加干燥紧致。然后再对晒干的鼓身坯料进行近一步的修边。他们用刨子在木料的边沿来回刨上几下，直到光滑平整。'
        },{
          src:require("@/assets/img/technology/4.webp"),
          realsrc:require("@/assets/img/technology/4.real.webp"),
          moresrc:require("@/assets/img/technology/4.2.real.webp"),
          title:'盘绕',
          content:'盘绕是整个制鼓过程中最具有技术含量的一个步骤。做鼓最重要的标准就是圆度、平度、紧度，这三个度做好了，鼓的声音才好，而圆度就是在盘绕中完成的，先在平地上用工具画出一个标准的圆，按圆的轮廓摆放好的木料作为底座部分，并再次划线测量，不断调整，直至圆度达到标准，再通过榫卯结构进行衔接加固。'
        },{
          src:require("@/assets/img/technology/5.webp"),
          realsrc:require("@/assets/img/technology/5.real.webp"),
          moresrc:require("@/assets/img/technology/5.2.real.webp"),
          title:'拼鼓板',
          content:'鼓身的拼装就如同给大鼓打上了坚实的骨架。拼鼓板，把一块块以标准弧度弯曲的鼓板相继拼搭在事先做好的鼓的框架上，同时继续多次地检查圆度，保证整个鼓身对称和所有的鼓板紧密相接，不留缝隙，相比较于拥有较高技术含量的盘绕，要求紧度的打磨就是最为费力的一道工序了。然而最绝的是最后一块坯料的安装，因为这关系到整个大鼓的定型，所以他们会跟据最后的宽度来选择适当的坯料完成拼装。大鼓好看与否都在这定型了，鼓身必须密实不能漏气，否则将会影响大鼓的音色。做一个大鼓到底需要多少块坯料，每一块坯料的宽窄是多少似乎没有固定的标准，制作人完全是凭着祖辈传下来的精湛技艺和经验来制作的。'
        },{
          src:require("@/assets/img/technology/6.webp"),
          realsrc:require("@/assets/img/technology/6.real.webp"),
          title:'打磨',
          content:'打磨。第一遍打磨时，手持电刨，顺着鼓板的方向从上而下进行打磨。第一遍的打磨完成之后是再一次固定鼓身，整个人钻入大鼓之内用枪钉在内部打上密密麻麻上百个钉，鼓身也因此更加紧密绵实。而用砂纸机完成进一步的打磨后，严丝合缝的鼓身带着摩擦时的余温，光滑的手感甚至摸不出一丝木板之间的缝隙，摩挲间可以感受到附着在鼓身表面细小的木质粉尘。'
        },{
          src:require("@/assets/img/technology/7.webp"),
          realsrc:require("@/assets/img/technology/7.real.webp"),
          title:'装鼓环',
          content:'鼓环一共有四个，讲究对称、严谨。要做到精品，多次从不同的角度测量鼓面的直径和鼓身周长定点、打洞，内外固定鼓环。鼓环样式多样，种类繁多，丰富美观了鼓的样貌。'
        },{
          src:require("@/assets/img/technology/8.webp"),
          realsrc:require("@/assets/img/technology/8.real.webp"),
          title:'蒙皮绷制',
          content:'蒙皮绷制同样是一个重要的步骤。将整个大鼓搬到院子的底座台上，再在浸泡好的牛皮周边均匀地打洞，最后用筷子粗细的绿色尼龙绳穿过这些小洞，配合若干根的约两指粗的小木棍，交错穿插在底座和牛皮之间，使牛皮紧紧地蒙在鼓面上。随着底座台在千斤顶的压力下上升，同时用手臂粗细的木棍敲击鼓面和牛皮边上紧紧缠绕着尼龙绳的小木棍，使牛皮不断绷紧，最后达到极限。木棒持续敲击不断的“梆梆”的声音持续了很久，漫长而枯燥。在这段时间内牛皮的紧度全凭经验判断，踩上鼓面测试脚下牛皮的松紧度，又在底座台下填上几块木块提升台子。牛皮的绷紧程度是越紧越好，用手按压不不去，不会塌下，声音就会越好。'
        },{
          src:require("@/assets/img/technology/9.webp"),
          realsrc:require("@/assets/img/technology/9.real.webp"),
          title:'钉泡钉',
          content:'牛皮完全拉紧后，用铜制的泡钉开始钉钉固皮，呈三角紧密排列的泡钉只用作装饰，每一个泡钉之下还有长铁钉将牛皮边牢牢地固定在鼓身纸上。钉钉少，空隙大，绷皮不紧，牛皮热胀冷缩以后就会松弛，声音也不再好听。'
        },{
          src:require("@/assets/img/technology/10.webp"),
          realsrc:require("@/assets/img/technology/10.real.webp"),
          title:'切皮上漆',
          content:'切去边缘多余的牛皮，使其平整美观，随后进行最后一道工序——上漆。上漆一共要上上三遍。第一遍上红漆，上完后还要进行补灰，填补鼓身一些坑坑洼洼的地方，使鼓身圆滑，再上第二遍红漆。最后上一层清漆，使鼓的颜色鲜亮，防水防腐。'
        }],
      materialKey: 0
    };
  },
  methods: {
    // 素材弹框
    
    scrollEvent(e){
      if(e.deltaY > 0) {
        
        if(this.materialKey > this.materialList.length - 2){
          //this.materialKey = 0;
          return
        }
        this.materialKey++;
        let box = this.$refs["material-scroll"];
        let px = box.style.marginTop;
        let height = Number(px.substring(0, px.length - 2));
        box.style.marginTop = height - 75 + 'px'; 
      }
      if(e.deltaY < 0) {
        if(this.materialKey <= 0){
          //this.materialKey = this.materialList.length;
          return
        }
        this.materialKey--;
        let box = this.$refs["material-scroll"];
        let px = box.style.marginTop;
        let height = Number(px.substring(0, px.length - 2));
        box.style.marginTop =   height + 75 + 'px'; 
      }
      
      // console.log(e)
      // if(e.srcElement.scrollTop+e.srcElement.offsetHeight>e.srcElement.scrollHeight-100 && !this.moreLoading && !this.noMore){
      //   alert(111)
      // }
    },
    materialKeyEdit(num) {
      // console.log(this.materialKey)
      this.lastIndex = this.materialKey;
      this.materialKey = num;
      let box = this.$refs["material-scroll"];
      let px = box.style.marginTop;
      let height = Number(px.substring(0, px.length - 2));
      box.style.marginTop = height + 75 * (this.lastIndex - this.materialKey) + 'px'; 
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
  @import '@/assets/css/wheel.scss'
</style>