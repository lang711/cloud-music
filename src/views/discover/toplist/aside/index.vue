<template>
  <div class="aside">
    <h2>云音乐特色榜</h2>
    <ul class="ranks">
      <li v-for="rank in topRanks" :key="rank.id">
        <a
          href="#"
          :class="{ active: rank.id === curRank.id }"
          @click.prevent="goTo(rank)">
          <img :src="`${rank.coverImgUrl}?param=40y40`" alt="" />
          <div class="right">
            <p class="title">{{ rank.name }}</p>
            <p class="update">{{ rank.updateFrequency }}</p>
          </div>
        </a>
      </li>
    </ul>
    <h2>全球媒体榜</h2>
    <ul class="ranks">
      <li v-for="rank in commonRanks" :key="rank.id">
        <a
          href="#"
          :class="{ active: rank.id === curRank.id }"
          @click.prevent="goTo(rank)">
          <img :src="`${rank.coverImgUrl}?param=40y40`" alt="" />
          <div class="right">
            <p class="title">{{ rank.name }}</p>
            <p class="update">{{ rank.updateFrequency }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["rank"],
  data() {
    return {
      commonRanks: [],
      topRanks: [],
      curRank: {},
      ranks: [],
    };
  },
  mounted() {
    let { id } = this.$route.query;
    let ranks = this.$store.state.ranks;
    if (!ranks.length) {
      this.$api.getAllRank().then((res) => {
        if (res.code === 200) {
          this.initData(id, res.list);
        }
      });
    } else {
      this.initData(id, ranks);
    }
  },
  methods: {
    initData(id, ranks) {
      this.topRanks = ranks.slice(0, 4);
      this.commonRanks = ranks.slice(4);
      this.ranks = ranks;
      this.curRank = ranks.find((rank) => rank.id == id) || ranks[0];
      this.$emit("changeRank", this.curRank);
    },
    goTo(rank) {
      this.$router.push(`/discover/toplist?id=${rank.id}`);
    },
  },
  watch: {
    $route(newVal) {
      let { id } = newVal.query;
      this.curRank = this.ranks.find((rank) => rank.id == id) || this.ranks[0];
      this.$emit("changeRank", this.curRank);
    },
  },
};
</script>

<style lang="less" scoped>
.aside {
  width: 240px;
  padding-top: 20px;
  flex-shrink: 0;
  h2 {
    font-size: 14px;
    padding: 2px 10px 13px 15px;
    color: #000;
    margin-top: 20px;
  }
  .ranks {
    a {
      display: flex;
      height: 42px;
      padding: 12px 0 8px 20px;

      &.active {
        background: #e6e6e6;
      }
      img {
        width: 40px;
        height: 40px;
      }
      .right {
        padding-left: 10px;
        .title {
          width: 150px;
          color: #000;
          margin: 4px 0 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .update {
          color: #999;
        }
      }
    }
  }
}
</style>
