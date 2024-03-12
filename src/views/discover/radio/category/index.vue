<template>
  <div class="category">
    <Nav :catId="curId"></Nav>
    <Container title="优秀新电台">
      <template #content>
        <ul class="imglist">
          <li v-for="radio in newRadios" :key="radio.id">
            <a href="#" class="mask" @click.prevent="goTo('radio', radio)">
              <img :src="`${radio.picUrl}?param=200y200`" alt="" />
            </a>
            <p class="name">
              <a href="#" @click.prevent="goTo('radio', radio)">{{
                radio.name
              }}</a>
            </p>
            <p class="dec">{{ radio.rcmdtext }}</p>
          </li>
        </ul>
      </template>
    </Container>
    <Container title="电台排行榜">
      <template #right>
        <div class="right">
          <a
            href="#"
            class="fast"
            :class="{ active: order == 0 }"
            @click.prevent="change(0)"
            >上升最快</a
          >
          <span class="line">|</span>
          <a
            href="#"
            class="hot"
            :class="{ active: order == 1 }"
            @click.prevent="change(1)"
            >最热电台</a
          >
        </div>
      </template>
      <template #content>
        <ul class="rank">
          <li v-for="radio in hotRadios" :key="radio.id">
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
              <p class="author">
                <i class="icon icon-user"></i>
                <a
                  href="#"
                  class="name"
                  :title="radio.dj.nickname"
                  @click.prevent="goTo('user', radio.dj)"
                  >{{ radio.dj.nickname }}</a
                >
              </p>
              <p class="detail">
                <span>共{{ radio.programCount }}期</span>
                <span>订阅{{ radio.subCount }}次</span>
              </p>
            </div>
          </li>
        </ul>
        <Navigation
          :total="Math.ceil(total / limit)"
          :page="page"
          @changePage="changePage($event)"></Navigation>
      </template>
    </Container>
  </div>
</template>

<script>
import Nav from "../nav";
// 缓存
let cache = new Map();
export default {
  components: {
    Nav,
  },
  data() {
    return {
      curId: "",
      newRadios: [],
      hotRadios: [],
      page: 1,
      limit: 30,
      total: 0,
      order: 0,
    };
  },
  mounted() {
    let { id, page, order } = this.$route.query;
    this.curId = id;
    this.page = +page || 1;
    this.order = +order || 0;
    this.getNewRadio();
    this.order ? this.getHotRadio() : this.getRiseRadio();
  },
  methods: {
    getNewRadio() {
      if (cache.has(this.curId)) {
        this.newRadios = cache.get(this.curId);
      } else {
        this.$api.getNewRadio(this.curId).then((res) => {
          if (res.code === 200) {
            this.newRadios = res.djRadios.slice(0, 5);
            cache.set(this.curId, this.newRadios);
          }
        });
      }
    },
    getHotRadio() {
      this.$api.getHotRadio(this.curId, this.limit, this.page).then((res) => {
        if (res.code == 200) {
          this.total = res.count;
          this.hotRadios = res.djRadios;
        }
      });
    },
    getRiseRadio() {
      this.$api.getRiseRadio(this.limit, this.page).then((res) => {
        if (res.code === 200) {
          this.total = res.count || 1000;
          this.hotRadios = res.toplist;
        }
      });
    },
    changePage(page) {
      this.page = page;
      this.$router.push({
        path: "/discover/djradio/category",
        query: {
          id: this.curId,
          page: this.page,
          order: this.order,
        },
      });
    },
    change(order) {
      this.order = order;
      this.changePage(1);
    },
    goTo(target, obj) {
      if (target === "radio") {
        this.$router.push(`/${target}?id=${obj.id}`);
      } else if (target === "user") {
        this.$router.push(`/${target}?id=${obj.userId}`);
      }
    },
  },
  watch: {
    $route(newVal) {
      let { id, page, order } = newVal.query;
      this.curId = id;
      this.page = +page || 1;
      this.order = +order || 0;
      this.getNewRadio();
      this.order ? this.getHotRadio() : this.getRiseRadio();
    },
  },
  beforeDestroy() {
    cache = new Map();
  },
};
</script>

<style lang="less" scoped>
.category {
  .imglist {
    display: flex;
    margin: 16px 0 0 -37px;
    li {
      width: 150px;
      margin-left: 37px;
    }
    .mask,
    img {
      display: block;
      width: 150px;
      height: 150px;
    }
    .name {
      margin: 13px 0 6px;
      color: #333;
      line-height: 16px;
      font-size: 14px;
      a:hover {
        text-decoration: underline;
      }
    }
    .dec {
      color: #999;
      line-height: 18px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
  }
  .container {
    margin-bottom: 35px;
  }
  .right {
    margin-top: 12px;
    .line {
      color: #c7c7c7;
      margin: 0 10px;
    }
    a:hover {
      text-decoration: underline;
    }
    .active {
      color: #c20c0c;
    }
  }
  .rank {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    li {
      display: flex;
      width: 435px;
      height: 120px;
      border-bottom: 1px solid #e7e7e7;
      padding: 12px 0;
      margin-left: 30px;
      .mask {
        width: 120px;
        height: 120px;
        img {
          display: block;
          width: 120px;
          height: 120px;
        }
      }
      .dec {
        margin-left: 20px;
        color: #333;
        h3 {
          padding: 10px 0;
          font-size: 18px;
        }
        a:hover {
          text-decoration: underline;
        }
        .author {
          line-height: 20px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          .icon {
            width: 14px;
            height: 15px;
            background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
            background-position: -50px -300px;
            margin-right: 5px;
          }
        }
        .detail {
          line-height: 16px;
          color: #999;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .navigation {
    margin: 20px 0;
  }
}
</style>
