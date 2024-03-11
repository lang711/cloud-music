<template>
  <div class="hotSinger">
    <Container title="入驻歌手">
      <template #content>
        <ul class="singers">
          <li v-for="singer in singers" :key="singer.id">
            <img-box :singer="singer"></img-box>
          </li>
        </ul>
      </template>
    </Container>
  </div>
</template>

<script>
import { throttle } from "@/utils";
import imgBox from "../imgBox/index.vue";
export default {
  components: {
    imgBox,
  },
  data() {
    return {
      singers: [],
      limit: 50,
      page: 0,
      isOver: false,
      bottom: 500,
    };
  },
  mounted() {
    let singers = this.$store.state.hotSingers;
    if (!singers.length) {
      this.getSinger();
    } else {
      this.singers = singers;
    }
    window.addEventListener("scroll", this.reachBottom);
  },
  methods: {
    getSinger() {
      this.$api.getHotSinger(this.page, this.limit).then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.isOver = !res.more;
          this.singers = this.singers.concat(res.artists);
        }
      });
    },
    reachBottom: throttle(function () {
      if (this.isOver) {
        window.removeEventListener("scroll", this.reachBottom);
      }
      if (
        window.innerHeight + window.scrollY + this.bottom >=
        document.body.offsetHeight
      ) {
        this.page += 1;
        this.getSinger();
      }
    }, 500),
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.reachBottom);
  },
};
</script>

<style lang="less" scoped>
.hotSinger {
  .singers {
    display: flex;
    margin: 20px 0 0 -17px;
    flex-wrap: wrap;
    li {
      padding: 0 0 30px 17px;
    }
  }
}
</style>
