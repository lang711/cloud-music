<template>
  <div class="container">
    <div class="head">
      <div class="head-left">
        <h2 class="title">
          {{ title }}
        </h2>
        <div class="navs">
          <slot name="navs"></slot>
        </div>
      </div>
      <div class="head-right">
        <slot name="right"></slot>
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
.container {
  .head {
    display: flex;
    height: 40px;
    border-bottom: 2px solid #c10d0c;
    justify-content: space-between;
    color: #666;
    .head-left {
      display: flex;
      .title {
        font-size: 24px;
        color: #333;
        line-height: 31px;
        font-weight: normal;
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
