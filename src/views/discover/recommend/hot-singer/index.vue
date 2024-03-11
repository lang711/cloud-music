<template>
  <div class="hot-singer">
    <div class="head">
      <h4>热门歌手</h4>
      <a href="#" @click.prevent="goTo()">查看全部 ></a>
    </div>
    <ul class="singers">
      <li v-for="singer in singers" :key="singer.id">
        <a href="#" @click.prevent="goTo(singer)">
          <img :src="`${singer.picUrl}?param=62y62`" alt="" />
          <div class="mes">
            <p class="name">{{ singer.name }}</p>
            <p class="dec">{{ singer.alias.join("-") || singer.name }}</p>
          </div>
        </a>
      </li>
    </ul>
    <router-link to="/musician" class="apply">申请成为网易音乐人</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singers: {},
    };
  },
  mounted() {
    this.$api.getHotSinger(0, 100).then((res) => {
      if (res.code === 200) {
        this.singers = res.artists.slice(0, 5);
        this.$store.commit("SETHOTSINGER", res.artists);
      }
    });
  },
  methods: {
    goTo(singer) {
      if (!arguments.length) {
        this.$router.push("/discover/artist");
      } else {
        this.$router.push(`/user?id=${singer.id}`);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.hot-singer {
  padding: 15px 20px 0;
  .head {
    display: flex;
    justify-content: space-between;
    height: 23px;
    line-height: 16px;
    border-bottom: 1px solid #ccc;
    color: #333;
    a {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .singers {
    padding-top: 20px;
    a {
      display: flex;
      margin-bottom: 14px;
      background: #fafafa;
      &:hover {
        background: #f4f4f4;
      }
      img {
        display: block;
        width: 62px;
        height: 62px;
      }
      .mes {
        border: 1px solid #e9e9e9;
        border-left: none;
        padding-left: 14px;
        width: 133px;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          white-space: nowrap;
          margin-top: 8px;
        }
        .name {
          font-size: 14px;
          color: #333;
          font-weight: bold;
          line-height: 19px;
          height: 22px;
        }
        .dec {
          color: #666;
          line-height: 16px;
        }
      }
    }
  }
  .apply {
    display: block;
    background-image: url(https://s2.music.126.net/style/web2/img/button2.png?2cf5dfaf9c1bdcc7e987a4001ac9f5b5);
    background-position: 0 -59px;
    color: #333;
    text-align: center;
    line-height: 31px;
    position: relative;
    font-weight: bold;
    &::before {
      position: absolute;
      content: "";
      background-image: url(https://s2.music.126.net/style/web2/img/button2.png?2cf5dfaf9c1bdcc7e987a4001ac9f5b5);
      background-position: right -100px;
      width: 5px;
      height: 100%;
      right: 0;
      top: 0;
    }
    &:hover {
      background-position: 0 -141px;
      &::before {
        background-position: right -182px;
      }
    }
  }
}
</style>
