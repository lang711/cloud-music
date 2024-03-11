<template>
  <div class="home">
    <Container title="入驻歌手">
      <template #right>
        <router-link class="more" to="/discover/artist/signed"
          >更多 ></router-link
        >
      </template>
      <template #content>
        <ul class="singers">
          <li v-for="singer in enterSingers" :key="singer.id">
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
          </li>
        </ul>
      </template>
    </Container>
    <Container title="热门歌手">
      <template #content>
        <ul class="singers">
          <li v-for="singer in hotSingers.slice(0, 10)" :key="singer.id">
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
          </li>
        </ul>
        <ul class="artists">
          <li v-for="singer in hotSingers.slice(10)" :key="singer.id">
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
      </template>
    </Container>
  </div>
</template>

<script>
// 10个随机数字
let randomNums = [];
while (randomNums.length != 10) {
  let num = Math.floor(Math.random() * 100);
  randomNums.includes(num) || randomNums.push(num);
}
export default {
  data() {
    return {
      enterSingers: [],
      hotSingers: [],
    };
  },
  mounted() {
    let singers = this.$store.state.hotSingers;
    if (!singers.length) {
      this.$api.getHotSinger(0, 100).then((res) => {
        if (res.code === 200) {
          this.hotSingers = res.artists;
          this.enterSingers = res.artists.filter((singer, index) =>
            randomNums.includes(index)
          );
        }
      });
    } else {
      this.hotSingers = singers;
      this.enterSingers = singers.filter((singer, index) =>
        randomNums.includes(index)
      );
    }
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
.home {
  .more {
    margin-top: 14px;
    line-height: 16px;
    display: block;
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
        margin-top: 2px;
        margin-left: 2px;
      }
    }
  }
}
</style>
