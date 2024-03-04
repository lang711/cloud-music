<template>
  <div class="hot-anchor">
    <h4 class="head">热门主播</h4>
    <ul class="anchors">
      <li v-for="anchor in anchors" :key="anchor.id">
        <a href="#" class="mask" @click.prevent="goTo(anchor)">
          <img :src="`${anchor.avatarUrl}?param=40y40`" alt="" />
        </a>
        <div class="mes">
          <p class="name">
            <a
              href="#"
              :title="anchor.nickName"
              @click.prevent="goTo(anchor)"
              >{{ anchor.nickName }}</a
            >
          </p>
          <p class="dec">{{ anchor.nickName }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anchors: [],
    };
  },
  mounted() {
    this.$api.getHotAnchor().then((res) => {
      console.log(res);
      if (res.code === 200) {
        this.anchors = res.data.list.slice(0, 5);
      }
    });
  },
  methods: {
    goTo(anchor) {
      this.$router.push(`/user?id=${anchor.id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.hot-anchor {
  margin-top: 30px;
  padding: 0 20px;
  .head {
    height: 23px;
    border-bottom: 1px solid #ccc;
    line-height: 16px;
    color: #333;
  }
  .anchors {
    margin-top: 20px;
    li {
      display: flex;
      margin-bottom: 10px;
    }
    img {
      display: block;
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .mes {
      padding-top: 1px;
      p {
        width: 100%;
        text-overflow: ellipsis;
        white-space: no;
        overflow: hidden;
        line-height: 21px;
      }
      .name {
        color: #000;
        a:hover {
          text-decoration: underline;
        }
      }
      .dec {
        color: #666;
      }
    }
  }
}
</style>
