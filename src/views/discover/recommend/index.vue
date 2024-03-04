<template>
  <div class="recommend">
    <cloud-home-swiper></cloud-home-swiper>
    <div class="body">
      <div class="inner">
        <div class="content">
          <hot-recommend class="hot-recommend"></hot-recommend>
          <new-disc></new-disc>
          <top-rank></top-rank>
        </div>
        <div class="aside">
          <div class="ad">
            <p class="dec">
              登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </p>
            <router-link to="/login">用户登录</router-link>
          </div>
          <hot-singer></hot-singer>
          <hot-anchor></hot-anchor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cloudHomeSwiper from "./cloud-home-swiper";
import hotRecommend from "./hot-recommend";
import newDisc from "./new-disc";
import topRank from "./top-rank";
import hotSinger from "./hot-singer";
import hotAnchor from "./hot-anchor";
export default {
  components: {
    cloudHomeSwiper,
    hotRecommend,
    newDisc,
    topRank,
    hotSinger,
    hotAnchor,
  },
};
</script>

<style lang="less" scoped>
.recommend {
  width: 100%;
  .body {
    .inner {
      width: 980px;
      border-left: 1px solid #d3d3d3;
      border-right: 1px solid #d3d3d3;
      margin: 0 auto;
      background: url(https://s2.music.126.net/style/web2/img/frame/wrap1.png?50cad31c735fbc6a35049112b2de5bb6)
        repeat-y 100% 100%;
      display: flex;

      .content {
        padding: 20px 20px 40px;
        flex: 1;
        .hot-recommend {
          margin-bottom: 35px;
        }
      }
      .aside {
        width: 250px;
        flex-shrink: 0;
        .ad {
          color: #666;
          height: 126px;
          background: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
          background-position: 0 0;
          p {
            padding: 16px 0;
            line-height: 22px;
            margin: 0 auto;
            width: 205px;
          }
          a {
            display: block;
            width: 100px;
            line-height: 31px;
            height: 31px;
            background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
            background-position: 0 -195px;
            text-align: center;
            color: #fff;
            margin: 0 auto;
            text-shadow: 0 1px 0 #8a060b;
            &:hover {
              background-position: -110px -195px;
            }
          }
        }
      }
    }
  }
}
</style>
