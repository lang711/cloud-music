<template>
  <div class="rank">
    <Container title="节目排行榜">
      <template #navs>
        <span class="nav">最近更新：{{ 0 | timeFormmat }}</span>
      </template>
      <template #content>
        <ul class="programs">
          <li v-for="rank in programRank" :key="rank.id">
            <span class="order" :class="{ top: rank.rank <= 3 }">{{
              rank.rank
            }}</span>
            <a href="#" class="mask" title="播放">
              <img :src="`${rank.program.coverUrl}?param=40x40`" alt="" />
              <i class="icon icon-play"></i>
            </a>
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
            <a
              href="#"
              class="btn"
              @click.prevent="
                goTo('discover/djradio/category', rank.program.radio)
              "
              >{{ rank.program.radio.category }}</a
            >
          </li>
        </ul>
      </template>
    </Container>
  </div>
</template>

<script>
import { parseTimestamp } from "@/utils";
export default {
  data() {
    return {
      programRank: [],
    };
  },
  mounted() {
    this.$api.getProgramRank(100).then((res) => {
      console.log(res);
      if (res.code === 200) {
        this.programRank = res.toplist;
      }
    });
  },
  methods: {
    goTo(target, obj) {
      if (target === "discover/djradio/category") {
        this.$router.push(`/${target}?id=${obj.categoryId}`);
      } else if (target === "program") {
        this.$router.push(`/${target}?id=${obj.id}`);
      }
    },
  },
  filters: {
    timeFormmat(timestamp) {
      return parseTimestamp();
    },
  },
};
</script>

<style lang="less" scoped>
.rank {
  .nav {
    display: block;
    margin: 15px 0 0 10px;
    color: #999;
  }
  .programs {
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

      h3 {
        margin-left: 10px;
        width: 304px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: normal;
        color: #333;
        font-size: 12px;
      }
      .name {
        width: 166px;
        margin-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #666;
      }
      a:hover {
        text-decoration: underline;
      }

      .btn {
        border: 1px solid #999;
        padding: 0 6px;
        line-height: 16px;
        margin-left: 10px;
        &:hover {
          border-color: #000;
          text-decoration: none;
          color: #000;
        }
      }
    }
  }
}
</style>
