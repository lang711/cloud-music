<template>
  <div class="home-swiper">
    <div class="bg">
      <div class="mySwiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(banner, index) in banners"
            :key="index">
            <img :src="`${banners[curIndex]?.imageUrl}?imageView&blur=40x20`" />
          </div>
        </div>
      </div>
    </div>
    <div class="inner">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(banner, index) in banners"
            @click="goTo(banner)"
            :key="index">
            <img :src="banner.imageUrl" alt="" />
          </div>
        </div>
        <a class="left-btn btn">&lt;</a>
        <a class="right-btn btn">></a>
        <div class="dots"></div>
      </div>
      <div class="download">
        <router-link to="/download">广告</router-link>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      banners: [],
      curIndex: 0,
    };
  },
  mounted() {
    this.$api.getBanner().then((res) => {
      if (res.code === 200) {
        this.banners = res.banners;
        this.$nextTick(() => {
          let that = this;
          let bgSwiper=new Swiper(".mySwiper", {
            effect: "fade",
            allowTouchMove: false,
          });
          let swiper = new Swiper(".swiper", {
            effect: "fade",
            initialSlide: 0,
            loop: true,
            autoplay: true,
            allowTouchMove: false,
            pagination: {
              el: ".dots",
              clickable: true,
            },
            navigation: {
              nextEl: ".right-btn",
              prevEl: ".left-btn",
            },
            on: {
              click: function () {
                swiper.autoplay.start();
              },
              slideChange: function () {
                that.curIndex = swiper.realIndex;
              },
            },
          });
          this.swiper = swiper;
        });
      }
    });
  },
  methods: {
    goTo(banner) {
      const target = {
        1000: "playlist",
        1: "song",
        10: "album",
      };
      let { targetType, targetId } = banner;
      this.$router.push(`/${target[targetType]}?id=${targetId}`);
    },
  },
};
</script>

<style lang="less" scoped>
.home-swiper {
  font-size: 12px;
  width: 100%;
  position: relative;
  .inner {
    width: 982px;
    height: 285px;
    margin: 0 auto;
    position: relative;
    .swiper {
      width: 730px;
      height: 100%;
      overflow: hidden;
      .swiper-slide {
        cursor: pointer;
        img {
          display: block;
          width: 100%;
          height: 100%;
          max-height: 285px;
        }
      }

      .btn {
        position: absolute;
        background: url(https://s2.music.126.net/style/web2/img/index/banner.png?c09a60e7001a00532cff1ade2c04683e);
        width: 37px;
        height: 63px;
        top: 50%;
        text-indent: -9999px;
        // transform: translateY(-50%);
        transform: translateY(-31px);
      }
      .left-btn {
        left: -68px;
        background-position: 0 -360px;
        &:hover {
          background-position-y: -430px;
        }
      }
      .right-btn {
        right: -68px;
        background-position: 0 -508px;
        &:hover {
          background-position-y: -578px;
        }
      }
      .dots {
        position: absolute;
        width: 730px;
        bottom: 6px;
        left: 0;
        display: flex;
        margin-right: -254px;
        justify-content: center;
        z-index: 99;
        /deep/.swiper-pagination-bullet {
          display: block;
          width: 20px;
          height: 20px;
          background: url(https://s2.music.126.net/style/web2/img/index/banner.png?c09a60e7001a00532cff1ade2c04683e);
          background-position: 3px -343px;
          margin: 0 2px;
          opacity: 1;
          &:hover {
            background-position-x: -16px;
          }
        }
        /deep/.swiper-pagination-bullet-active {
          background-position-x: -16px;
        }
      }
    }
    .download {
      width: 254px;
      height: 100%;
      background-image: url(https://s2.music.126.net/style/web2/img/index/download.png?540c40f6562a75e309d724978515c86d);
      // background-color: rgba(255, 255, 255, 0.1);
      background-color: transparent;
      position: absolute;
      right: -1px;
      top: 0;
      z-index: 20;
      margin-left: -2px;
      &::after,
      &::before {
        content: "";
        position: absolute;
        background: url(https://s2.music.126.net/style/web2/img/index/banner.png?c09a60e7001a00532cff1ade2c04683e);
        width: 20px;
        height: 285px;
        top: 0;
      }
      &::after {
        left: -20px;
      }
      &::before {
        right: -20px;
        transform: rotate(180deg);
      }
      a {
        background: url(https://s2.music.126.net/style/web2/img/index/download.png?540c40f6562a75e309d724978515c86d);
        width: 215px;
        height: 56px;
        background-position: -19px 168px;
        text-indent: -9999px;
        position: absolute;
        top: 185px;
        left: 19px;
        &:hover {
          background-position: 0 64px;
        }
      }
      p {
        position: absolute;
        bottom: 7px;
        left: 0;
        width: 100%;
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
        line-height: 16px;
      }
    }
  }
}

.bg {
  position: absolute;
  width: 100%;
  height: 285px;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 6000px;
    height: 6000px;
    margin: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
