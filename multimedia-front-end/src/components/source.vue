<template>
  <div class="source">
    <h2 style="text-align:center">溯源</h2>
    <div class="time-line">
      <div class="first">
        <div v-if="dynasty == ''" class="img1"></div>
      </div>
      <div class="tang" @mouseenter="changeDynasty('tang')" @mouseleave="change">
        <div v-if="dynasty == 'tang' && click == 'first'" class="img1"></div>
        <div v-else-if="dynasty == 'tang' && click == 'last'" class="img2"></div>
        <el-button v-else>唐</el-button>
      </div>
      <div class="ming" @mouseenter="changeDynasty('ming')" @mouseleave="change">
        <div v-if="dynasty == 'ming' && click == 'first'" class="img1"></div>
        <div v-else-if="dynasty == 'ming' && click == 'last'" class="img2"></div>
        <el-button v-else>明</el-button>
      </div>
      <div class="qing" @mouseenter="changeDynasty('qing')" @mouseleave="change">
        <div v-if="dynasty == 'qing' && click == 'first'" class="img1"></div>
        <div v-else-if="dynasty == 'qing' && click == 'last'" class="img2"></div>
        <el-button v-else>清</el-button>
      </div>
      <div class="jin" @mouseenter="changeDynasty('jin')" @mouseleave="change">
        <div v-if="dynasty == 'jin' && click == 'first'" class="img1"></div>
        <div v-else-if="dynasty == 'jin' && click == 'last'" class="img2"></div>
        <el-button v-else>今</el-button>
      </div>
    </div>
    <div class="dynasty-content">
      <el-row>
        <el-col :span="5">
          <transition name="el-zoom-in-top">
            <div v-if="dynasty == 'tang'" class="transition-box">枧桥董村的制鼓业肇始，开启制鼓的先朝。</div>
          </transition>
        </el-col>
        <el-col :span="5">
          <transition name="el-zoom-in-top">
            <div
              v-if="dynasty == 'ming'"
              class="transition-box"
            >这里的人民经常受到倭寇的袭击，战争不断。据说当时人们为了抵御倭寇，曾在修建的南长城上放置枧桥鼓，待敌人来袭时击打之，以起到报警的作用，所以当时鼓的需求量很大，而邵家渡枧桥董村自然就成为鼓的供货地。</div>
          </transition>
        </el-col>
        <el-col :span="5">
          <transition name="el-zoom-in-top">
            <div
              v-if="dynasty == 'qing'"
              class="transition-box"
            >枧桥鼓不再只有御敌示警之能，制鼓成为养家糊口的技艺，此时的制鼓已发展至鼎盛时期。</div>
          </transition>
        </el-col>
        <el-col :span="5">
          <transition name="el-zoom-in-top">
            <div
              v-if="dynasty == 'jin'"
              class="transition-box"
            >民国期间，每到农闲，村民各挑工具，四处奔走为各家寺院和戏班订制修理各种鼓；二十世纪六七十年代，全村制鼓业收到限制，八十年代各地佛教信仰兴起，至今全村制鼓业达五十多家。至今，枧桥鼓已成为浙江省非物质文化遗产之一。</div>
          </transition>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynasty: "",
      click: ""
    };
  },
  methods: {
    changeDynasty(str) {
      this.dynasty = str;
      this.click = "last";
    },
    change() {
      this.click = "first";
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/source.scss";
</style>