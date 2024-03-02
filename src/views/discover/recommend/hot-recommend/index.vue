<template>
  <div class="hot-recommend">
    <div class="head">
      <div class="head-left">
        <h2 class="title">
          <i class="icon icon-circle"></i>
          <a href="#">热门推荐</a>
        </h2>
        <ul class="navs">
          <li><a href="#">华语</a></li>
          <li><a href="#">流行</a></li>
          <li><a href="#">摇滚</a></li>
          <li><a href="#">民谣</a></li>
          <li><a href="#">电子</a></li>
        </ul>
      </div>
      <div class="head-right">
        <a href="#" class="more">更多</a>
        <i class="icon icon-arrow"></i>
      </div>
    </div>
    <div class="content">
      <ul class="imglist">
        <li>
          <div class="imgBox">
            <a href="#" class="mask"></a>
            <img
              src="https://p1.music.126.net/dMlINUxUskjYg30JTRYexw==/19221662277102979.jpg?param=140y140"
              alt="" />
            <div class="bar">
              <div class="bar-left">
                <i class="icon icon-erji"></i>
                <span>3600万</span>
              </div>
              <a href="#" class="play"></a>
            </div>
          </div>
          <p class="detail"><a href="#">奥宇女生：永远的神</a></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.hot-recommend {
  width: 100%;
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
      .navs {
        display: flex;
        margin: 8px 0 0 6px;

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
  .content {
    .imglist {
      display: flex;
      margin: 20px 0 0 -42px;
      li {
        padding: 0 0 30px 42px;
        .imgBox {
          position: relative;
          width: 140px;
          height: 140px;
          .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?cd3b03e08f3a62252a97dd9e9b04e994);
            background-position: 0 0;
            z-index: 1;
          }
          img {
            display: block;
          }
          .bar {
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            z-index: 2;
            bottom: 0;
            left: 0;
            height: 27px;
            background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?cd3b03e08f3a62252a97dd9e9b04e994);
            background-position: 0 -537px;

            .bar-left {
              display: flex;
              align-items: center;
              color: #ccc;
              .icon {
                display: block;
                width: 29px;
                height: 26px;
                background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?f3095f34778533f3afe29d01904d9687);
                background-position: 10px -16px;
              }
              span {
                display: block;
                margin-top: 4px;
              }
            }
            .play {
              background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?f3095f34778533f3afe29d01904d9687);
              width: 16px;
              height: 17px;
              background-position: 0 0;
              margin: 5px 10px;
              &:hover {
                background-position: 0 -60px;
              }
            }
          }
        }

        .detail {
          margin: 9px 0 3px;
          font-size: 14px;
          line-height: 1.4;
          color: #333;
          &:hover {
            a {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
