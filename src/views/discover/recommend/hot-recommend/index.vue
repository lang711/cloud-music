<template>
  <div class="hot-recommend">
    <Category title="热门推荐" @getMore="goTo()">
      <template #navs>
        <ul class="navs">
          <li
            v-for="tag in tags"
            :key="tag.id"
            @click="goTo('discover/playlist', tag)">
            <a>{{ tag.name }}</a>
          </li>
        </ul>
      </template>
      <template #content>
        <div class="content">
          <ul class="imglist">
            <li v-for="playlist in playlists" :key="playlist.id">
              <div class="imgBox">
                <a
                  href="#"
                  class="mask"
                  :title="playlist.name"
                  @click.prevent="goTo('playlist', playlist)"></a>
                <img :src="playlist.picUrl" />
                <div class="bar">
                  <div class="bar-left">
                    <i class="icon icon-erji"></i>
                    <span>{{ playlist.playCount | count }}</span>
                  </div>
                  <a href="#" class="play" title="播放"></a>
                </div>
              </div>
              <p class="detail" :title="playlist.name">
                <a href="#" @click.prevent="goTo('playlist', playlist)">{{
                  playlist.name
                }}</a>
              </p>
            </li>
          </ul>
        </div>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "../category";
export default {
  data() {
    return {
      playlists: [],
      tags: [],
    };
  },
  mounted() {
    this.$api.getHotPlaylist().then((res) => {
      console.log(res);
      if (res.code === 200) {
        this.playlists = res.result;
      }
    });
    this.$api.getHotCategory().then((res) => {
      if (res.code === 200) {
        this.tags = res.tags.slice(0, 5);
      }
    });
  },
  filters: {
    count(num) {
      if (num > 100000) {
        return Math.floor(num / 10000) + "万";
      } else {
        return num;
      }
    },
  },
  methods: {
    goTo(target, obj) {
      if (!arguments.length) {
        this.$router.push("/discover/playlist");
      } else if (target === "discover/playlist") {
        this.$router.push(`/${target}/?cat=${obj.name}`);
      } else if (target === "playlist") {
        this.$router.push(`/${target}?id=${obj.id}`);
      }
    },
  },
  components: {
    Category,
  },
};
</script>

<style lang="less" scoped>
.hot-recommend {
  width: 100%;
  .head {
    display: flex;
    padding: 0 10px 0 34px;
    height: 33px;
    border-bottom: 2px solid #c10d0c;
    justify-content: space-between;
    color: #666;
    .head-left {
      display: flex;
      .title {
        font-size: 20px;
        color: #333;
        line-height: 28px;
        font-weight: normal;
        position: relative;
        .icon {
          position: absolute;
          width: 20px;
          height: 20px;
          left: -26px;
          top: 4px;
          background: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
          background-position: 180px -160px;
        }
      }
      .navs {
        display: flex;
        margin: 8px 0 0 6px;

        li:last-child {
          a::after {
            content: "";
            display: none;
          }
        }
        a {
          display: block;
          margin: 0 16px 0 14px;
          line-height: 14px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            display: block;
            right: -15px;
            top: 1px;
            height: 100%;
            width: 2px;
            background: #ccc;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .head-right {
      margin-top: 9px;
      position: relative;
      .icon {
        position: absolute;
        width: 12px;
        height: 12px;
        background: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
        background-position: 0 -240px;
        right: 1px;
        top: 4px;
      }
      .more {
        display: block;
        margin: 2px 17px 0 0;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .content {
    .imglist {
      display: flex;
      margin: 20px 0 0 -43px;
      flex-wrap: wrap;
      li {
        flex-shrink: 0;
        padding: 0 0 30px 43px;
        height: 204px;
        width: 140px;
        .imgBox {
          position: relative;
          width: 140px;
          height: 140px;
          .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?cd3b03e08f3a62252a97dd9e9b04e994);
            background-position: 0 0;
            z-index: 1;
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
          .bar {
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            z-index: 2;
            bottom: 0;
            left: 0;
            height: 27px;
            background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?cd3b03e08f3a62252a97dd9e9b04e994);
            background-position: 0 -537px;

            .bar-left {
              display: flex;
              align-items: center;
              color: #ccc;
              .icon {
                display: block;
                width: 29px;
                height: 26px;
                background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?f3095f34778533f3afe29d01904d9687);
                background-position: 10px -16px;
              }
              span {
                display: block;
                margin-top: 4px;
              }
            }
            .play {
              background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?f3095f34778533f3afe29d01904d9687);
              width: 16px;
              height: 17px;
              background-position: 0 0;
              margin: 5px 10px;
              &:hover {
                background-position: 0 -60px;
              }
            }
          }
        }

        .detail {
          margin: 8px 0 3px;
          font-size: 14px;
          line-height: 1.4;
          color: #333;
          width: 100%;
          &:hover {
            a {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
