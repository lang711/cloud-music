<template>
  <div class="navigation">
    <a
      href="#"
      class="btn"
      @click.prevent="changeSelect(-1, true)"
      :class="curSelect !== 1 ? 'pre' : 'disabled'">
      <span>上一页</span>
    </a>
    <div class="navs">
      <a
        href="#"
        class="first"
        :class="{ select: curSelect === 1 }"
        @click.prevent="changeSelect(1)"
        >1</a
      >
      <span class="more" v-show="start > 1">...</span>
      <ul class="nav">
        <li v-for="n in end" :key="n">
          <a
            href="#"
            :class="{ select: n + start === curSelect }"
            @click.prevent="changeSelect(n + start)"
            >{{ n + start }}</a
          >
        </li>
      </ul>
      <span class="more" v-show="start + step < total - 1">...</span>
      <a
        href="#"
        class="end"
        :class="{ select: curSelect === total }"
        @click.prevent="changeSelect(total)"
        >{{ total }}</a
      >
    </div>
    <a
      href="#"
      class="btn"
      @click.prevent="changeSelect(1, true)"
      :class="curSelect !== total ? 'next' : 'disable'">
      <span>下一页</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    step: {
      default: 5,
    },
    page: {
      default: 1,
      type: Number,
    },
  },
  data() {
    return {
      // total: 5,
      // step: 5,
      curSelect: this.page,
    };
  },
  computed: {
    start() {
      let gap = Math.ceil(this.step / 2);
      if (this.curSelect - gap <= 0 || this.end < this.step) {
        return 1;
      } else if (this.curSelect + gap > this.total) {
        return this.total - this.step - 1;
      } else {
        return this.curSelect - gap;
      }
    },
    end() {
      if (this.total === 0) return 0;
      if (this.total - 2 < this.step) {
        return this.total - 2;
      } else {
        return this.step;
      }
    },
  },
  methods: {
    changeSelect(n, flag) {
      if (flag) {
        if (this.curSelect + n < 1 || this.curSelect + n > this.total) {
          return;
        }
        this.curSelect += n;
      } else {
        this.curSelect = n;
      }
      this.$emit("changePage", this.curSelect);
    },
  },
  watch: {
    page(newVal) {
      this.curSelect = newVal;
    },
  },
};
</script>

<style lang="less" scoped>
.navigation {
  display: flex;
  justify-content: center;
  color: #333;
  align-items: center;
  .btn {
    width: 69px;
    background-image: url(https://s2.music.126.net/style/web2/img/button.png?b6e1fb7484daba5f3939b8cabe282f8e);
    height: 24px;
    line-height: 24px;
    border-radius: 2px;
    border: 1px solid #ccc;
  }

  .disabled,
  .pre {
    background-position: 0 -560px;
    &:hover {
      background-position: 0 -590px;
    }
    span {
      margin-left: 22px;
    }
  }
  .disable,
  .next {
    &:hover {
      background-position: -75px -590px;
    }
    background-position: -75px -560px;
    span {
      margin-left: 12px;
    }
  }
  .disabled,
  .disable {
    color: #cacaca;
    cursor: default;
    background-position: 0 -590px;
  }
  .disable {
    background-position: -75px -620px;
  }
  .navs {
    display: flex;
    margin: 0 2px;
    a {
      display: block;
      border: 1px solid #ccc;
      line-height: 22px;
      height: 22px;
      padding: 0 8px;
      margin: 0 4px;
      border-radius: 2px;

      &:not(.select):hover {
        border-color: #000;
      }
      &.select {
        background-image: url(https://s2.music.126.net/style/web2/img/button.png?b6e1fb7484daba5f3939b8cabe282f8e);
        border-color: #a2161b;
        cursor: default;
        background-position: 0 -650px;
        color: #fff;
      }
    }
    .more {
      line-height: 22px;
      margin: 0 3px;
    }
    .nav {
      display: flex;
    }
  }
}
</style>
