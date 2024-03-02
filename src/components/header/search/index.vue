<template>
  <div class="search">
    <form @submit="search">
      <input
        type="text"
        id="input"
        v-model="keyword"
        @compositionstart="flag = false"
        @compositionend="flag = true"
        @input="search"
        @blur.stop="blur"
        @focus="focus" />
      <label for="input" v-show="placeholder">音乐/视频/电台/用户</label>
    </form>
    <div class="result" v-show="result">
      <p class="title">
        <a href="#" style="white-space: pre"
          >搜“<span class="strong">{{ keyword }}</span
          >”相关用户 >
        </a>
      </p>
      <div class="item" v-for="(name, i) in results.order" :key="i">
        <div class="cate">
          <i class="icon" :class="order[name].icon"></i>
          <span>{{ order[name].label }}</span>
        </div>
        <ul class="list">
          <li
            v-for="res in results[name]"
            :key="res.id"
            @mousedown="goTo(name, res)">
            <a href="#"><span v-html="getArtist(res)"></span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      placeholder: true,
      result: false,
      results: [],
      flag: true,
      order: {
        songs: {
          icon: "icon-song",
          label: "单曲",
        },
        artists: {
          icon: "icon-singer",
          label: "歌手",
        },
        albums: {
          icon: "icon-disc",
          label: "专辑",
        },
        playlists: {
          icon: "icon-menu",
          label: "歌单",
        },
      },
    };
  },
  methods: {
    search() {
      this.$nextTick(() => {
        if (this.flag) {
          this.result = !!this.keyword.trim();
          this.$api.getSearchAdvice(this.keyword).then((res) => {
            if (res.code === 200) {
              console.log(res.result);
              this.results = res.result;
            }
          });
        }
      });
    },
    focus() {
      this.placeholder = false;
      this.result = !!this.keyword.trim();
    },
    blur() {
      this.placeholder = !this.keyword;
      this.result = false;
    },
    getArtist(res) {
      let str = "";
      if (res.artists) {
        str = res.artists.map((ar) => ar.name).join("");
      } else if (res.artist) {
        str = res.artist.name;
      }
      str = res.name + (str ? "-" + str : "");
      return str.replace(new RegExp(`(${this.keyword})`, "g"), (m, _) => {
        return `<span class='strong'>${_}</span>`;
      });
    },
    goTo(name, res) {
      name = name.slice(0, -1);
      this.$router.push(`/${name}?id=${res.id}`);
      this.$emit("initNav");
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
p {
  margin: 0;
}
.search {
  /deep/ .strong {
    color: #0c73c2;
  }
  position: relative;
  width: 158px;
  height: 32px;
  border-radius: 32px;
  background: #fff;
  position: relative;
  box-sizing: border-box;
  padding: 8px 0 0 30px;
  background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?70d5ce6f1ee210ec98c45773eca88a52);
  background-position: 0 -99px;
  margin-top: 19px;
  #input {
    width: 95%;
    border: none;
    outline: none;
    line-height: 16px;
    height: 14px;
  }
  label {
    color: #9b9b9b;
    position: absolute;
    left: 30px;
    top: 10px;
  }

  .result {
    position: absolute;
    z-index: 99;
    top: 40px;
    left: 0;
    width: 240px;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    border-radius: 4px;
    box-shadow: 0 4px 7px #555;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
    background: #fff;

    .title {
      width: 100%;
      padding: 11px 10px;
      color: #666;
      border-bottom: 1px solid #e2e2e2;
      line-height: 17px;
      .strong {
        display: inline-block;
        max-width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
    }
    .item {
      display: flex;
      &:nth-of-type(1) {
        .list {
          border-top: none;
        }
      }
      &:nth-of-type(even) .list {
        background: #f9f8f8;
      }
      .cate {
        flex: 1;
        color: #333;
        padding: 11px 0 0px 10px;
        .icon {
          background: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
          width: 14px;
          height: 15px;
          display: inline-block;
          vertical-align: middle;
          margin: -2px 4px 0 0;
        }
        .icon-song {
          background-position: -35px -300px;
        }
        .icon-singer {
          background-position: -50px -300px;
        }
        .icon-disc {
          background-position: -35px -320px;
        }
        .icon-menu {
          background-position: -50px -320px;
        }
      }
      .list {
        width: 175px;
        padding: 6px 0 5px;
        border-top: 1px solid #e2e2e2;
        border-left: 1px solid #e2e2e2;

        a {
          color: #000;
          display: block;
          line-height: 24px;
          text-indent: 12px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:hover {
            background: #e3e5e7;
          }
        }
      }
    }
  }
}
</style>
