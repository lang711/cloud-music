<template>
  <div id="app">
    <music-header></music-header>
    <router-view></router-view>
  </div>
</template>

<script>
import musicHeader from "components/header";
export default {
  name: "App",
  components: {
    musicHeader,
  },
};
</script>

<style lang="less">
#app {
  color: red;
  height: 2000px;
  background: #f5f5f5;
}
</style>
