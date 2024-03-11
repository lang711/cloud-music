<template>
  <div class="wrap">
    <div class="imgbox">
      <a
        href="#"
        class="mask"
        :title="singer.name + '的音乐'"
        @click.prevent="goTo('artist', singer)"></a>
      <img :src="`${singer.picUrl}?param=130y130`" alt="" />
    </div>
    <p class="des">
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
    </p>
  </div>
</template>

<script>
export default {
  props: {
    singer: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    goTo(target, obj) {
      if (target === "artist") {
        this.$router.push(`/${target}?id=${obj.id}`);
      } else if (target === "user") {
        this.$router.push(`/${target}?id=${obj.id}`);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
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
    .icon {
      width: 17px;
      height: 18px;
      background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
      background-position: 0 -740px;
    }
  }
}
</style>
