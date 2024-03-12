<template>
  <div class="recommend">
    <Container title="推荐节目">
      <template #navs>
        <span class="nav">(每日更新)</span>
      </template>
      <template #content>
        <ul class="programs">
          <li v-for="program in programs" :key="program.id">
            <a href="#" class="mask" title="播放">
              <img :src="`${program.coverUrl}?param=40x40`" alt="" />
              <i class="icon icon-play"></i>
            </a>
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
            <span class="play">播放{{ program.listenerCount }}</span>
            <span class="approve">暂{{ program.likedCount }}</span>
            <a
              href="#"
              class="btn"
              @click.prevent="goTo('discover/djradio/category', program)"
              >{{ program.radio.category }}</a
            >
          </li>
        </ul>
      </template>
    </Container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programs: [],
    };
  },
  mounted() {
    this.$api.getRecommendProgram(100).then((res) => {
      console.log(res);
      if (res.code === 200) {
        this.programs = res.programs;
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
};
</script>

<style lang="less" scoped>
.recommend {
  .nav {
    display: block;
    margin: 15px 0 0 18px;
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
      .play {
        width: 90px;
        margin-left: 10px;
      }
      .approve {
        width: 126px;
        margin-left: 10px;
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
          color: #000;
        }
      }
    }
  }
}
</style>
