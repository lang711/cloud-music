<template>
  <div class="singer">
    <div class="aside">
      <div class="wrap">
        <h2>推荐</h2>
        <ul class="cates">
          <li>
            <router-link to="/discover/artist" exact active-class="active"
              >推荐歌手</router-link
            >
          </li>
          <li>
            <router-link
              to="/discover/artist/signed"
              exact
              active-class="active"
              >入驻歌手</router-link
            >
          </li>
        </ul>
      </div>
      <div class="wrap" v-for="(nav, i) in navs" :key="i">
        <h2>{{ nav.value }}</h2>
        <ul class="cates">
          <li v-for="(cat, index) in nav.cats" :key="index">
            <a
              href="#"
              :class="{ active: matchNav(cat) }"
              @click.prevent="goTo(cat)"
              >{{ nav.value
              }}{{
                index === 0 ? "男歌手" : index === 1 ? "女歌手" : "组合/乐队"
              }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          value: "华语",
          path: "/cat",
          cats: ["1001", "1002", "1003"],
        },
        {
          value: "欧美",
          path: "/cat",
          cats: ["2001", "2002", "2003"],
        },
        {
          value: "日本",
          path: "/cat",
          cats: ["6001", "6002", "6003"],
        },
        {
          value: "韩国",
          path: "/cat",
          cats: ["7001", "7002", "7003"],
        },
        {
          value: "其他",
          path: "/cat",
          cats: ["4001", "4002", "4003"],
        },
      ],
      cat: "",
      defaultPath: "/discover/artist/cat",
    };
  },
  
  methods: {
    goTo(id) {
      this.$router.push(`/discover/artist/cat?id=${id}`);
    },
    matchNav(cat) {
      let { path, query } = this.$route;
      return path === this.defaultPath && query.id == cat;
    },
  },
};
</script>

<style lang="less" scoped>
.singer {
  width: 980px;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  margin: 0 auto;
  background: url(https://s2.music.126.net/style/web2/img/frame/wrap2.png?1060a33878e24fe451f98ca418cd9124);
  display: flex;
  .aside {
    width: 180px;
    box-sizing: border-box;
    padding: 35px 10px 40px;
    .wrap {
      margin-bottom: 7px;
      padding-top: 14px;
      border-top: 1px solid #d3d3d3;
      color: #333;

      &:first-child {
        border: none;
      }
      h2 {
        line-height: 25px;
        font-size: 16px;
        padding-left: 14px;
      }
      .cates {
        margin-top: 2px;
        a {
          display: block;
          height: 29px;
          line-height: 27px;
          padding-left: 27px;
          background-image: url(https://s2.music.126.net/style/web2/img/singer.png?173ba7984a363c5601974f4da8cb3eab);
          background-position: 0 -30px;
          margin-bottom: 2px;
          &:hover {
            text-decoration: underline;
          }
          &.active {
            background-position: 0 0;
            text-decoration: none;
            color: #c20c0c;
          }
        }
      }
    }
  }
  .content {
    flex: 1;
    padding: 40px;
  }
}
</style>
