<template>
  <div class="navigation">
    <a href="#" class="pre btn">
      <span>上一页</span>
    </a>
    <div class="navs">
      <a href="#" class="first">1</a>
      <span class="more">...</span>
      <ul class="nav">
        <li><a href="#">3</a></li>
        <li><a href="#" class="select">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
      </ul>
      <span class="more">...</span>
      <a href="#" class="end">10</a>
    </div>
    <a href="#" class="next btn">
      <span>下一页</span>
    </a>
  </div>
</template>

<script>
export default {};
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
  .pre {
    background-position: 0 -560px;
    &:hover {
      background-position: 0 -590px;
    }
    span {
      margin-left: 22px;
    }
  }
  .next {
    &:hover {
      background-position: -75px -590px;
    }
    background-position: -75px -560px;
    span {
      margin-left: 12px;
    }
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
