<template>
  <div
    class="home-swiper"
    style="
      background-image: url(http://p1.music.126.net/-JnGj7SHGvDZ3thi-dCSLw==/109951169375333650.jpg?imageView&blur=40x20);
    ">
    <div class="inner">
      <div class="swiper">
        <div class="swiper-item">
          <img
            src="https://p1.music.126.net/-JnGj7SHGvDZ3thi-dCSLw==/109951169375333650.jpg?imageView&quality=89"
            alt="" />
        </div>
        <ul class="dots">
          <li><a href="#" class="active"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
        <a href="#" class="left-btn btn">&lt;</a>
        <a href="#" class="right-btn btn">></a>
      </div>
      <div class="download">
        <a href="#">广告</a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home-swiper {
  font-size: 12px;
  width: 100%;
  background-size: 6000px;
  background-position: center;
  .inner {
    width: 982px;
    height: 285px;
    margin: 0 auto;
    position: relative;
    .swiper {
      .swiper-item {
        width: 730px;
        img {
          display: block;
          width: 100%;
        }
      }

      .btn {
        position: absolute;
        background: url(https://s2.music.126.net/style/web2/img/index/banner.png?c09a60e7001a00532cff1ade2c04683e);
        width: 37px;
        height: 63px;
        top: 50%;
        text-indent: -9999px;
        // transform: translateY(-50%);
        transform: translateY(-31px);
      }
      .left-btn {
        left: -68px;
        background-position: 0 -360px;
        &:hover {
          background-position-y: -430px;
        }
      }
      .right-btn {
        right: -68px;
        background-position: 0 -508px;
        &:hover {
          background-position-y: -578px;
        }
      }
      .dots {
        position: absolute;
        width: 730px;
        bottom: 6px;
        left: 0;
        display: flex;
        margin-right: -254px;
        justify-content: center;
        a {
          display: block;
          width: 20px;
          height: 20px;
          background: url(https://s2.music.126.net/style/web2/img/index/banner.png?c09a60e7001a00532cff1ade2c04683e);
          background-position: 3px -343px;
          margin: 0 2px;
          &:hover,
          &.active {
            background-position-x: -16px;
          }
        }
      }
    }
    .download {
      width: 254px;
      height: 100%;
      background-image: url(https://s2.music.126.net/style/web2/img/index/download.png?540c40f6562a75e309d724978515c86d);
      // background-color: rgba(255, 255, 255, 0.1);
      background-color: transparent;
      position: absolute;
      right: -1px;
      top: 0;
      z-index: 20;
      margin-left: -2px;
      &::after,
      &::before {
        content: "";
        position: absolute;
        background: url(https://s2.music.126.net/style/web2/img/index/banner.png?c09a60e7001a00532cff1ade2c04683e);
        width: 20px;
        height: 285px;
        top: 0;
      }
      &::after {
        left: -20px;
      }
      &::before {
        right: -20px;
        transform: rotate(180deg);
      }
      a {
        background: url(https://s2.music.126.net/style/web2/img/index/download.png?540c40f6562a75e309d724978515c86d);
        width: 215px;
        height: 56px;
        background-position: -19px 168px;
        text-indent: -9999px;
        position: absolute;
        top: 185px;
        left: 19px;
        &:hover {
          background-position: 0 64px;
        }
      }
      p {
        position: absolute;
        bottom: 7px;
        left: 0;
        width: 100%;
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
        line-height: 16px;
      }
    }
  }
}
</style>
