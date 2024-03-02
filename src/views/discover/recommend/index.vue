<template>
  <div class="recommend">
    <cloud-home-swiper></cloud-home-swiper>
    <div class="body">
      <div class="inner">
        <div class="content">
          <hot-recommend></hot-recommend>
        </div>
        <div class="aside"></div>
      </div>
    </div>
  </div>
</template>

<script>
import cloudHomeSwiper from "./cloud-home-swiper";
import hotRecommend from "./hot-recommend";
export default {
  components: {
    cloudHomeSwiper,
    hotRecommend,
  },
};
</script>

<style lang="less" scoped>
.recommend {
  width: 100%;
  .body {
    .inner {
      width: 980px;
      height: 500px;
      border-left: 1px solid #d3d3d3;
      border-right: 1px solid #d3d3d3;
      margin: 0 auto;
      background: url(https://s2.music.126.net/style/web2/img/frame/wrap1.png?50cad31c735fbc6a35049112b2de5bb6)
        repeat-y 100% 100%;
      display: flex;

      .content {
        padding: 20px 20px 40px;
        flex: 1;
      }
      .aside {
        width: 250px;
      }
    }
  }
}
</style>
