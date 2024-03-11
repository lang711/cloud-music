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
  }
}
</style>
