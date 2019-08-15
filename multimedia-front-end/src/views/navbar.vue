<template>
  <div class="navbar">
    <div class="card">
      <card/>
    </div>
    <img src="~@/assets/img/navbar/cloud1.png" alt="" class="cloud1">
    <img src="~@/assets/img/navbar/cloud2.png" alt="" class="cloud2">
    <img src="~@/assets/img/navbar/cloud3.png" alt="" class="cloud3">
    <img src="~@/assets/img/navbar/cloud4.png" alt="" class="cloud4">
    <img src="~@/assets/img/navbar/btn-close.png" alt="" class="btn-close">
  </div>
</template>

<script>
import card from '@/components/card.vue'
export default {
  name:'navbar',
  components:{
    card
  }
}
</script>

<style lang="sass">
  @import '@/assets/css/navbar.scss'
</style>