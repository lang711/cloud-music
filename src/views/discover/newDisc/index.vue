<template>
  <div class="newDisc">
    <Container title="热门新碟">
      <template #content>
        <ul class="albums">
          <li v-for="album in hotAlbums" :key="album.id">
            <div class="imgBox">
              <img :src="`${album.picUrl}?param=130y130`" alt="" />
              <a
                href="#"
                class="mask"
                :title="album.name"
                @click.prevent="goTo('album', album)"></a>
              <a href="#" class="icon icon-play" title="播放"></a>
            </div>
            <p class="name">
              <a
                href="#"
                :title="album.name"
                @click.prevent="goTo('album', album)"
                >{{ album.name }}</a
              >
            </p>
            <p class="author">
              <a
                href="#"
                :title="album.artist.name"
                @click.prevent="goTo('artist', album.artist)"
                >{{ album.artist.name }}</a
              >
            </p>
          </li>
        </ul>
      </template>
    </Container>
    <Container title="全部新碟">
      <template #navs>
        <ul class="navs">
          <li v-for="(area, index) in areas" :key="index">
            <a href="#" @click.prevent="goTo('discover/album', area)">{{
              area.chinese
            }}</a>
          </li>
        </ul>
      </template>
      <template #content>
        <ul class="albums">
          <li v-for="album in allAlbums" :key="album.id">
            <div class="imgBox">
              <img :src="`${album.picUrl}?param=130y130`" alt="" />
              <a
                href="#"
                class="mask"
                :title="album.name"
                @click.prevent="goTo('album', album)"></a>
              <a href="#" class="icon icon-play" title="播放"></a>
            </div>
            <p class="name">
              <a
                href="#"
                :title="album.name"
                @click.prevent="goTo('album', album)"
                >{{ album.name }}</a
              >
            </p>
            <p class="author">
              <span v-for="(artist, i) in album.artists" :key="artist.id">
                <a
                  href="#"
                  :title="artist.name"
                  @click.prevent="goTo('artist', artist)"
                  >{{ artist.name }}</a
                >
                <span v-show="i !== album.artists.length - 1">/</span>
              </span>
            </p>
          </li>
        </ul>
        <Navigation
          :total="Math.ceil(total / limit)"
          class="navigation"
          :page="page"
          @changePage="
            goTo('discover/album', { english: area, page: $event })
          "></Navigation>
      </template>
    </Container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotAlbums: [],
      allAlbums: [],
      area: "",
      page: 1,
      areas: [
        { english: "ALL", chinese: "全部" },
        { english: "ZH", chinese: "华语" },
        { english: "EA", chinese: "欧美" },
        { english: "KR", chinese: "韩国" },
        { english: "JP", chinese: "日本" },
      ],
      limit: 35,
      total: 0,
    };
  },
  mounted() {
    let hotAlbums = this.$store.state.hotAlbums;
    if (!hotAlbums.length) {
      this.$api.getNewAlbum().then((res) => {
        if (res.code === 200) {
          this.hotAlbums = res.albums;
        }
      });
    } else {
      this.hotAlbums = hotAlbums;
    }
    let query = this.$route.query;
    this.getAllAlbum(query);
  },
  methods: {
    getAllAlbum(query) {
      let { area, page } = query;
      this.area = area;
      this.page = +page || 1;
      this.$api.getAllAlbum(area, page, this.limit).then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.allAlbums = res.albums;
          this.total = res.total;
        }
      });
    },
    goTo(target, obj) {
      if (target === "discover/album") {
        this.$router.push({
          path: `/${target}`,
          query: {
            area: obj.english,
            page: obj.page,
          },
        });
      } else if (target === "album") {
        this.$router.push(`/${target}?id=${obj.id}`);
      } else if (target === "artist") {
        this.$router.push(`/${target}?id=${obj.id}`);
      }
    },
  },
  watch: {
    $route(newVal) {
      this.getAllAlbum(newVal.query);
    },
  },
};
</script>

<style lang="less" scoped>
.newDisc {
  width: 982px;
  box-sizing: border-box;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  background: #fff;
  margin: 0 auto;
  padding: 40px;
  .albums {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 0 -33px;
    li {
      width: 153px;
      height: 178px;
      padding: 0 0 30px 33px;
      .imgBox {
        position: relative;
        width: 130px;
        height: 130px;
        &:hover {
          .icon {
            opacity: 1;
            transform: scale(1);
          }
        }
        .mask {
          position: absolute;
          width: 153px;
          height: 100%;
          background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?a69ded6098dfd9babe02d645d4aab8cc);
          background-position: 0 -845px;
          left: 0;
          top: 0;
          z-index: 2;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .icon {
          opacity: 0;
          transform: scale(0.6);
          transform-origin: center;
          transition: opacity 0.25s, transform 0.25s;
          background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?c6c90633c17935facfcbaa299d1317ec);
          width: 28px;
          height: 28px;
          position: absolute;
          background-position: 0 -140px;
          right: 6px;
          bottom: 5px;
          z-index: 3;
          &:hover {
            background-position: 0 -170px;
          }
        }
        &:hover {
          .icon {
            display: block;
          }
        }
      }

      p {
        line-height: 1.4;
        width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        a:hover {
          text-decoration: underline;
        }
        &.author {
          color: #666;
          a {
            margin: 0 3px;
          }
        }
        &.name {
          font-size: 14px;
          color: #000;
          margin: 9px 0 4px;
        }
      }
    }
  }
  .navigation {
    margin: 20px 0;
  }
  .navs {
    display: flex;
    margin: 13px 0 0 6px;

    li:last-child {
      a::after {
        content: "";
        display: none;
      }
    }
    a {
      display: block;
      margin: 0 16px 0 14px;
      line-height: 14px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        display: block;
        right: -15px;
        top: 1px;
        height: 100%;
        width: 2px;
        background: #ccc;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
