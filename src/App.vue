<template>
  <div id="app">
    <music-header></music-header>
    <div class="content"><router-view></router-view></div>
    <music-footer></music-footer>
    <a href="#" class="top">回到顶部</a>
  </div>
</template>

<script>
import musicHeader from "components/header";
import musicFooter from "components/footer";
export default {
  name: "App",
  components: {
    musicHeader,
    musicFooter,
  },
};
</script>

<style lang="less" scoped>
#app {
  color: red;
  background: #f5f5f5;
  .content {
    min-width: 1110px;
    min-height: 900px;
    margin: 0 auto;
  }
  .top {
    position: fixed;
    width: 49px;
    height: 44px;
    background-image: url(https://s2.music.126.net/style/web2/img/sprite.png?fbf4c3a9a899110ba1654847f6136a55);
    background-position: -265px -47px;
    left: 50%;
    bottom: 160px;
    text-indent: -9999px;
    z-index: 999;
    margin-left: 500px;
  }
}
</style>
