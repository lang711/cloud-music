<template>
  <div class="nav">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(cats, index) in categorys"
          :key="index">
          <ul class="navs">
            <li v-for="cat in cats" :key="cat.id">
              <a
                href="#"
                class="cat"
                :class="{ active: curCat.id === cat.id }"
                @click.prevent="goTo(cat)">
                <i
                  class="icon"
                  :style="{ backgroundImage: `url(${cat.picWebUrl})` }"></i>
                <span>{{ cat.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="#" class="btn pre" @click.prevent></a>
      <a href="#" class="btn next" @click.prevent></a>
      <div class="dots"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
// 缓存
let cache = null;
export default {
  props: ["catId"],
  data() {
    return {
      cats: [],
      curCat: {},
    };
  },
  computed: {
    categorys() {
      return [this.cats.slice(0, 18), this.cats.slice(18)];
    },
  },
  mounted() {
    this.getRadioCat().then((res) => {
      this.$nextTick(() => {
        var mySwiper = new Swiper(".mySwiper", {
          allowTouchMove: false,
          pagination: {
            el: ".dots",
            clickable: true,
          },
          navigation: {
            nextEl: ".next",
            prevEl: ".pre",
          },
        });
        this.swiper = mySwiper;
      });
    });
  },
  methods: {
    goTo(cat) {
      this.curCat = cat;
      this.$router.push(`/discover/djradio/category?id=${cat.id}`);
    },
    getRadioCat() {
      return new Promise((resolve, reject) => {
        if (cache) {
          this.$emit("getCat", cache);
          this.cats = cache;
          resolve(cache);
        } else {
          this.$api
            .getRadioCat()
            .then((res) => {
              if (res.code === 200) {
                cache = res.categories;
                this.$emit("getCat", res.categories);
                this.cats = res.categories;
                resolve(res.categories);
              }
            })
            .catch(reject);
        }
      });
    },
  },
  watch: {
    catId(newVal) {
      this.getRadioCat().then(
        (cats) =>
          (this.curCat = cats.find((cat, index) => {
            if (cat.id == newVal) {
              this.swiper.slideTo(Math.floor(index / 18), 0, false);
              return true;
            }
            return cat.id == newVal;
          }))
      );
    },
  },
  beforeDestroy() {
    cache = null;
  },
};
</script>

<style lang="less" scoped>
.nav {
  position: relative;
  height: 194px;
  margin-bottom: 20px;
  .swiper {
    overflow: hidden;
  }
  .navs {
    display: flex;
    flex-wrap: wrap;
    margin-left: -33px;
    .cat {
      display: block;
      width: 70px;
      height: 70px;
      text-align: center;
      color: #888;
      margin: 0 0 25px 33px;
      &.active {
        color: #d35757;
        background-position: -70px 0;
        background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_bg.png?f0ca8fa18f9cee771b75422c496b8675);
        .icon {
          background-position: -48px 0;
        }
      }
      &:not(.active):hover {
        background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_bg.png?f0ca8fa18f9cee771b75422c496b8675);
        background-position: 0 0;
      }
      .icon {
        display: block;
        width: 48px;
        height: 48px;
        background-image: url(https://p4.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg);
        background-position: 0 0;
        margin: 2px auto 2px;
      }
    }
  }
  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 30px;
    background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_slide.png?d100da177300019621eed2a6f76be61e);
    opacity: 0.25;
    z-index: 999;
    &:hover {
      opacity: 0.4;
    }
  }
  .pre {
    left: -26px;
    background-position: 0 -30px;
  }
  .next {
    right: -26px;
    background-position: -30px -30px;
  }
  /deep/.swiper-button-disabled {
    opacity: 0.08;
    cursor: default;
    &:hover {
      opacity: 0.08;
    }
  }
  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    width: 100%;
    /deep/ .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_slide.png?64118a7f06a72ba17b2decdefc54e0cf);
      background-position: 0px 0px;
      background-color: transparent;
      opacity: 1;
      &:hover {
        background-position: -30px 0px;
        opacity: 1;
      }
    }
    /deep/.swiper-pagination-bullet-active {
      background-position: -30px 0px;
    }
  }
}
</style>
