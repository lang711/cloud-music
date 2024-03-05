<template>
  <div class="header">
    <div class="wrap">
      <div class="inner">
        <div class="wrap-left">
          <h1 @click="curNav = 0">
            <router-link to="/" class="logo">网易云音乐</router-link>
          </h1>
          <ul class="nav">
            <li v-for="(nav, i) in topNavs" :key="i" @click="curNav = i">
              <router-link :to="nav.path" :class="{ active: matchUrl(nav) }">{{
                nav.value
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="wrap-right">
          <Search @initNav="curNav = -1"></Search>
          <div @click="curNav = -1">
            <router-link to="/author" class="author">创作者中心</router-link>
          </div>
          <div class="login" @click="curNav = -1">
            <router-link to="/login">登录</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bar">
      <div class="inner">
        <ul class="nav">
          <li v-for="(nav, i) in childNavs" :key="i">
            <router-link :to="nav.totalPath" :class="{ active: matchUrl(nav) }"
              ><span>{{ nav.value }}</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./search";
export default {
  data() {
    return {
      topNavs: [
        {
          path: "/",
          alias: "/discover",
          value: "发现音乐",
          children: [
            {
              path: "",
              value: "推荐",
            },
            {
              path: "/toplist",
              value: "排行榜",
            },
            {
              path: "/playlist",
              value: "歌单",
            },
            {
              path: "/djradio",
              value: "主播电台",
            },
            {
              path: "/artist",
              value: "歌手",
            },
            {
              path: "/album",
              value: "新碟上架",
            },
          ],
        },
        {
          path: "/my",
          value: "我的音乐",
        },
        {
          path: "/friend",
          value: "关注",
        },
        {
          path: "/store",
          value: "商城",
        },
        {
          path: "/musician",
          value: "音乐人",
        },
        {
          path: "/adSong",
          value: "云推歌",
        },
        {
          path: "/download",
          value: "下载客户端",
        },
      ],
      curNav: 0,
    };
  },
  computed: {
    childNavs() {
      let parent = this.topNavs[this.curNav] || {};
      let children = parent.children || [];
      return children.map((nav) => {
        nav.totalPath = parent.alias + nav.path;
        return nav;
      });
    },
  },
  methods: {
    matchUrl(nav) {
      let match = this.$route.matched;
      let path = nav.totalPath || nav.path;
      return match.some((m) => {
        if (m.alias.length) {
          return m.alias.some((a) => a === nav.path);
        } else {
          return m.regex.test(path);
        }
      });
    },
  },
  components: {
    Search,
  },
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
h1 {
  padding: 0;
  margin: 0;
}
.inner {
  margin: 0 auto;
  width: 1100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.header {
  font-size: 12px;
  min-width: 1110px;
  .wrap {
    height: 70px;
    width: 100%;
    background: #242424;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
    .wrap-left {
      display: flex;
      .logo {
        display: block;
        width: 176px;
        height: 100%;
        background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?70d5ce6f1ee210ec98c45773eca88a52);
        background-position: 0 0;
        text-indent: -9999px;
      }
      .nav {
        display: flex;
        color: #ccc;
        height: 100%;
        font-size: 14px;
        a {
          display: block;
          padding: 0 19px;
          height: 100%;
          line-height: 69px;
          &.active,
          &:hover {
            color: #fff;
            background: #000;
          }
          &.active {
            position: relative;
            &::after {
              content: "";
              display: block;
              position: absolute;
              width: 12px;
              height: 7px;
              background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?70d5ce6f1ee210ec98c45773eca88a52);
              background-position: -226px 0;
              bottom: -2px;
              left: 50%;
              margin-left: -6px;
            }
          }
        }
      }
    }
    .wrap-right {
      display: flex;
      .author {
        display: block;
        width: 90px;
        height: 32px;
        box-sizing: border-box;
        margin: 19px 0 0 12px;
        color: #ccc;
        border-radius: 20px;
        border: 1px solid #4f4f4f;

        line-height: 33px;
        padding-left: 16px;
        &:hover {
          border-color: #fff;
          color: #fff;
        }
      }
      .login {
        color: #787878;
        margin: 28px 0 0 20px;
        padding-right: 26px;
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .bar {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #a40011;
    background-color: #c20c0c;
    padding: 4px 0 0 0;
    .nav {
      color: #fff;
      display: flex;
      padding-left: 180px;
      a {
        display: block;
        height: 100%;
        overflow: hidden;
        &:hover,
        &.active {
          span {
            background: #9b0909;
          }
        }
      }
      span {
        display: block;
        padding: 0 13px;
        line-height: 20px;
        margin: 3px 17px 7px;
        border-radius: 20px;
      }
    }
  }
}
</style>
