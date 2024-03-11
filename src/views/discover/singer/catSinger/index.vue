<template>
  <div class="catSinger">
    <Container :title="title">
      <template #content>
        <ul class="navs">
          <li>
            <a
              href="#"
              class="hot"
              :class="{ active: initial == -1 }"
              @click.prevent="goTo('discover/artist/cat', -1)"
              >热门</a
            >
          </li>
          <li v-for="n in 26" :key="n">
            <a
              href="#"
              :class="{ active: initial == n + 64 }"
              @click.prevent="goTo('discover/artist/cat', n + 64)"
              >{{ String.fromCharCode(n + 64) }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="other"
              :class="{ active: initial == 0 }"
              @click.prevent="goTo('discover/artist/cat', 0)"
              >其他</a
            >
          </li>
        </ul>
        <div v-if="singers.length">
          <ul class="singers">
            <li v-for="singer in singers.slice(0, 10)" :key="singer.id">
              <img-box :singer="singer"></img-box>
            </li>
          </ul>
          <ul class="artists">
            <li v-for="singer in singers.slice(10)" :key="singer.id">
              <a
                href="#"
                class="name"
                :title="singer.name + '的音乐'"
                @click.prevent="goTo('artist', singer)"
                >{{ singer.name }}</a
              >
              <a
                href="#"
                class="icon icon-user"
                :title="singer.name + '的个人主页'"
                @click.prevent="goTo('user', singer)"></a>
            </li>
          </ul>
        </div>
        <div class="no-data" v-else>
          <i class="icon"></i>
          <span>暂无数据！</span>
        </div>
      </template>
    </Container>
  </div>
</template>

<script>
import { navs } from "../index.vue";
import imgBox from "../imgBox";
export default {
  data() {
    return {
      singers: [],
      initial: -1,
      id: "",
      limit: 100,
      title: "",
    };
  },
  components: {
    imgBox,
  },
  mounted() {
    let { query } = this.$route;
    this.getSinger(query);
  },
  methods: {
    getSinger(query) {
      let { id, initial } = query;
      this.id = id || "1001";
      this.initial = initial == null ? -1 : initial;
      let type, area;
      navs.forEach((nav) => {
        let index = nav.cats.indexOf(this.id) + 1;
        if (index) {
          type = index;
          area = nav.area;
          this.title = nav.name + ["男歌手", "女歌手", "组合/乐队"][index - 1];
        }
      });

      this.$api
        .getCatSinger(type, area, this.initial, this.limit)
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            this.singers = res.artists;
          }
        });
    },
    goTo(target, obj) {
      if (target === "artist") {
        this.$router.push(`/${target}?id=${obj.id}`);
      } else if (target === "user") {
        this.$router.push(`/${target}?id=${obj.id}`);
      } else if (target === "discover/artist/cat") {
        this.$router.push({
          path: `/${target}`,
          query: {
            id: this.id,
            initial: obj,
          },
        });
      }
    },
  },
  watch: {
    $route(newVal) {
      this.getSinger(newVal.query);
    },
  },
};
</script>

<style lang="less" scoped>
.catSinger {
  .navs {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    a {
      display: block;
      width: 21px;
      margin-left: 3px;
      border-radius: 2px;
      color: #333;
      font-size: 14px;
      text-align: center;
      line-height: 24px;
      &.active {
        background: #c20c0c;
        color: #fff;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    .hot,
    .other {
      width: 45px;
    }
  }
  .singers {
    display: flex;
    margin: 20px 0 0 -17px;
    flex-wrap: wrap;
    li {
      padding: 0 0 30px 17px;
    }
    .imgbox {
      position: relative;
      width: 130px;
      height: 130px;
      .mask {
        position: absolute;
        background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?a69ded6098dfd9babe02d645d4aab8cc);
        background-position: 0 -680px;
        width: 100%;
        height: 100%;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    p {
      display: flex;
      justify-content: space-between;
      margin-top: 7px;
      color: #000;
      align-items: center;
      .name {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .artists {
    display: flex;
    color: #000;
    border-top: 1px dotted #999;
    padding-top: 12px;
    flex-wrap: wrap;
    margin-left: -17px;
    li {
      width: 130px;
      height: 30px;
      line-height: 23px;
      display: flex;
      align-items: center;
      padding-left: 17px;
      .name {
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
          text-decoration: underline;
        }
      }
      .icon {
        width: 17px;
        height: 18px;
        background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
        background-position: 0 -740px;
        margin-top: 2px;
        margin-left: 2px;
      }
    }
  }

  .no-data {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    align-items: center;
    padding: 105px 0;
    justify-content: center;
    .icon {
      width: 64px;
      height: 50px;
      background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
      background-position: 0 -347px;
      margin-right: 17px;
    }
  }
}
</style>
