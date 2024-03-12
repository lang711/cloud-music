<template>
  <div class="home">
    <Nav @getCat="staticCats = $event"></Nav>
    <div class="program">
      <Container title="推荐节目">
        <template #right>
          <router-link to="/discover/djradio/recommend" class="more"
            >更多 ></router-link
          >
        </template>
        <template #content>
          <ul class="rank">
            <li v-for="program in programs" :key="program.id">
              <a href="#" class="mask" title="播放">
                <img :src="`${program.coverUrl}?param=40x40`" alt="" />
                <i class="icon icon-play"></i>
              </a>
              <div class="cont">
                <h3>
                  <a
                    href="#"
                    :title="program.name"
                    @click.prevent="goTo('program', program)"
                    >{{ program.name }}</a
                  >
                </h3>
                <p class="name">
                  <a
                    href="#"
                    :title="program.radio.name"
                    @click.prevent="goTo('program', program)"
                    >{{ program.radio.name }}</a
                  >
                </p>
              </div>
              <a href="#" class="btn">音乐播客</a>
            </li>
          </ul>
        </template>
      </Container>
      <Container title="节目排行榜">
        <template #right>
          <router-link to="/discover/djradio/rank" class="more"
            >更多 ></router-link
          >
        </template>
        <template #content>
          <ul class="rank">
            <li v-for="rank in programRank" :key="rank.rank">
              <span class="order" :class="{ top: rank.rank <= 3 }">{{
                rank.rank
              }}</span>
              <a href="#" class="mask" title="播放">
                <img :src="`${rank.program.coverUrl}?param=40x40`" alt="" />
                <i class="icon icon-play"></i>
              </a>
              <div class="cont">
                <h3>
                  <a
                    href="#"
                    :title="rank.program.name"
                    @click.prevent="goTo('program', rank.program)"
                    >{{ rank.program.name }}</a
                  >
                </h3>
                <p class="name">
                  <a
                    href="#"
                    :title="rank.program.radio.name"
                    @click.prevent="goTo('program', rank.program)"
                    >{{ rank.program.radio.name }}</a
                  >
                </p>
              </div>
              <a href="#" class="btn">音乐播客</a>
            </li>
          </ul>
        </template>
      </Container>
    </div>
    <ul class="category">
      <li v-for="(cat, index) in cats" :key="index">
        <Container :title="`${cat.name} · 电台`">
          <template #right>
            <a
              href="#"
              class="more"
              @click.prevent="goTo('discover/djradio/category', cat)"
              >更多 ></a
            >
          </template>
          <template #content>
            <ul class="list">
              <li v-for="radio in radios[index]" :key="radio.id">
                <a href="#" class="mask" @click.prevent="goTo('radio', radio)">
                  <img :src="`${radio.picUrl}?param=200y200`" alt="" />
                </a>
                <div class="dec">
                  <h3>
                    <a
                      href="#"
                      :title="radio.name"
                      @click.prevent="goTo('radio', radio)"
                      >{{ radio.name }}</a
                    >
                  </h3>
                  <p class="detail">{{ radio.rcmdtext }}</p>
                </div>
              </li>
            </ul>
          </template>
        </Container>
      </li>
    </ul>
  </div>
</template>

<script>
import Nav from "../nav";
import { randomNums } from "@/utils";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      programs: [],
      programRank: [],
      cats: [],
      staticCats: [],
      radios: [],
    };
  },
  mounted() {
    this.$api.getRecommendProgram().then((res) => {
      console.log(res);
      if (res.code === 200) {
        this.programs = res.programs;
      }
    });
    this.$api.getProgramRank().then((res) => {
      console.log(res);
      if (res.code === 200) {
        this.programRank = res.toplist;
      }
    });
  },
  methods: {
    getRadio(type) {
      return new Promise((resolve, reject) => {
        this.$api
          .getNewRadio(type)
          .then((res) => {
            if (res.code === 200) {
              resolve(res.djRadios);
            }
          })
          .catch(reject);
      });
    },
    goTo(target, obj) {
      if (target === "radio") {
        this.$router.push(`/${target}?id=${obj.id}`);
      } else if (target === "discover/djradio/category") {
        this.$router.push(`/${target}?id=${obj.id}`);
      } else if (target === "program") {
        this.$router.push(`/${target}?id=${obj.id}`);
      }
    },
  },
  watch: {
    staticCats(newVal) {
      let nums = randomNums(newVal.length - 1, 5);
      this.cats = nums.map((num) => newVal[num]);
      Promise.all(this.cats.map((cat) => this.getRadio(cat.id))).then((res) => {
        this.radios = res.map((radio) => radio.slice(0, 4));
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  .more {
    display: block;
    margin-top: 16px;
    &:hover {
      text-decoration: underline;
    }
  }
  .program {
    display: flex;
    justify-content: space-between;
    .rank {
      width: 426px;
      border: 1px solid #e2e2e2;
      border-top: none;
      li {
        display: flex;
        align-items: center;
        padding: 10px 0;
        color: #999;
        &:nth-child(even) {
          background: #f7f7f7;
        }
        &:hover {
          background: #eee;
          .mask .icon {
            display: block;
          }
        }
        .order {
          width: 26px;
          text-align: right;
        }
        .top {
          color: #da4545;
        }
        .mask {
          position: relative;
          margin-left: 20px;
          img {
            display: block;
            width: 40px;
            height: 40px;
          }
          .icon {
            display: none;
            position: absolute;
            width: 22px;
            height: 22px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-position: 0 -85px;
            background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?c6c90633c17935facfcbaa299d1317ec);
          }
        }
        .cont {
          line-height: 20px;
          margin-left: 10px;
          h3 {
            width: 254px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: normal;
            color: #333;
            font-size: 12px;
          }
          a:hover {
            text-decoration: underline;
          }
        }
        .btn {
          border: 1px solid #999;
          padding: 0 6px;
          line-height: 16px;
          margin-left: 10px;
          &:hover {
            border-color: #000;
            color: #000;
          }
        }
      }
    }
  }
  .category {
    .container {
      margin-top: 35px;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      margin-left: -30px;
      li {
        display: flex;
        width: 435px;
        height: 120px;
        border-bottom: 1px solid #e7e7e7;
        padding: 20px 0;
        margin-left: 30px;
        &:nth-child(n + 3) {
          border: none;
        }
        .mask {
          width: 120px;
          height: 120px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .dec {
          margin-left: 20px;
          color: #333;
          h3 {
            margin: 16px 0 20px;
            font-size: 18px;
            line-height: 24px;
          }
          a:hover {
            text-decoration: underline;
          }
          .detail {
            line-height: 20px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
