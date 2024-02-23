<template>
  <div id="app">
    <music-header></music-header>
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

<style lang="less" scoped>
#app {
  color: red;
  height: 2000px;
}
</style>
