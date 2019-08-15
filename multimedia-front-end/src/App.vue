<template>
  <div id="app">
    <!-- <div>
      <router-link to="/navbar">
        导航栏
      </router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
