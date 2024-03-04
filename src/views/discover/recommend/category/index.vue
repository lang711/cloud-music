<template>
  <div class="category">
    <div class="head">
      <div class="head-left">
        <h2 class="title">
          <i class="icon icon-circle"></i>
          <a href="#" @click.prevent="$emit('getMore')">{{ title }}</a>
        </h2>
        <div class="navs">
          <slot name="navs"></slot>
        </div>
      </div>
      <div class="head-right">
        <a href="#" @click.prevent="$emit('getMore')" class="more">更多</a>
        <i class="icon icon-arrow"></i>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.category {
  .head {
    display: flex;
    padding: 0 10px 0 34px;
    height: 33px;
    border-bottom: 2px solid #c10d0c;
    justify-content: space-between;
    color: #666;
    .head-left {
      display: flex;
      .title {
        font-size: 20px;
        color: #333;
        line-height: 28px;
        font-weight: normal;
        position: relative;
        .icon {
          position: absolute;
          width: 20px;
          height: 20px;
          left: -26px;
          top: 4px;
          background: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
          background-position: 180px -160px;
        }
      }
    }
    .head-right {
      margin-top: 9px;
      position: relative;
      .icon {
        position: absolute;
        width: 12px;
        height: 12px;
        background: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
        background-position: 0 -240px;
        right: 1px;
        top: 4px;
      }
      .more {
        display: block;
        margin: 2px 17px 0 0;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
