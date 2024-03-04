<template>
  <div class="new-disc">
    <Category title="新碟上架" @getMore="goTo()">
      <template #content>
        <div class="content">
          <div class="swiper-container imglist">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="album in albums" :key="album.id">
                <div class="imgBox">
                  <img :src="album.picUrl" alt="" />
                  <a
                    href="#"
                    class="mask"
                    :title="album.name"
                    @click.prevent="goTo('album', album)"></a>
                  <a href="#" class="icon icon-play" title="播放"></a>
                </div>
                <p class="name" :title="album.name">
                  <a href="#" @click.prevent="goTo('album', album)">{{
                    album.name
                  }}</a>
                </p>
                <p class="author" :title="getArtist(album.artists)">
                  <a href="#" @click.prevent="goTo('artist', album)">{{
                    getArtist(album.artists)
                  }}</a>
                </p>
              </div>
            </div>
          </div>
          <a class="left-btn btn"></a>
          <a class="right-btn btn"></a>
        </div>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "../category";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
// 缓存作者姓名
let cache = new Map();
export default {
  components: {
    Category,
  },
  data() {
    return {
      albums: [],
    };
  },
  mounted() {
    this.$api.getNewAlbum().then((res) => {
      if (res.code === 200) {
        this.albums = res.albums;
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            spaceBetween: 11,
            slidesPerView: 5,
            slidesPerGroup: 5,
            allowTouchMove: false,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
              nextEl: ".right-btn",
              prevEl: ".left-btn",
            },
          });
        });
      }
    });
  },
  methods: {
    goTo(target, album) {
      if (!arguments.length) {
        this.$router.push("/discover/album");
      } else if (target === "album") {
        this.$router.push(`/discover/${target}?id=${album.id}`);
      } else if (target === "artist") {
        this.$router.push(`/${target}?id=${album.artist.id}`);
      }
    },
    getArtist(artists) {
      if (cache.has(artists)) {
        return cache.get(artists);
      } else {
        let val = artists.map((artist) => artist.name).join(" ");
        cache.set(artists, val);
        return val;
      }
    },
  },
  beforeDestroy() {
    cache = new Map();
  },
};
</script>

<style lang="less" scoped>
.new-disc {
  .content {
    margin: 20px 0 37px;
    height: 184px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
    position: relative;
    .imglist {
      width: 645px;
      display: flex;
      margin-top: 29px;
      /deep/.swiper-slide {
        background: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1)
          no-repeat 0 9999px;
        width: 118px;
        height: 150px;
        background-position: -260px 100px;
      }
      .imgBox {
        position: relative;
        width: 100px;
        height: 100px;
        margin-bottom: 6px;
        &:hover {
          .icon {
            opacity: 1;
            transform: scale(1);
          }
        }
        .mask {
          position: absolute;
          width: 118px;
          height: 100%;
          background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?cd3b03e08f3a62252a97dd9e9b04e994);
          background-position: 0 -570px;
          left: 0;
          top: 0;
          z-index: 2;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .icon {
          // display: none;
          opacity: 0;
          transform: scale(0.6);
          transform-origin: center;
          transition: opacity 0.25s, transform 0.25s;
          background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?f3095f34778533f3afe29d01904d9687);
          width: 22px;
          height: 22px;
          position: absolute;
          background-position: 0 -85px;
          right: 6px;
          bottom: 5px;
          z-index: 3;
          &:hover {
            background-position: 0 -110px;
          }
        }
        &:hover {
          .icon {
            display: block;
          }
        }
      }

      p {
        line-height: 18px;
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        a:hover {
          text-decoration: underline;
        }
        &.author {
          color: #666;
        }
        &.name {
          color: #000;
        }
      }
    }

    .btn {
      width: 17px;
      height: 17px;
      background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
      position: absolute;
      top: 71px;
      z-index: 99;
    }
    .left-btn {
      left: 4px;
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .right-btn {
      right: 8px;
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
  }
}
</style>
