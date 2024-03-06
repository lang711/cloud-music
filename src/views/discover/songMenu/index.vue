<template>
  <div class="songMenu">
    <div class="head">
      <div class="head-left">
        <h2>全部</h2>
        <div class="select">
          <a href="#" class="btn">
            <span>选择分类</span>
            <i class="icon icon-arrow"></i>
          </a>
          <div class="categorys">
            <i class="icon icon-arrow"></i>
            <h3>
              <a href="#">全部风格</a>
            </h3>
            <ol class="cats">
              <li>
                <h4>
                  <i class="icon icon-cat"></i>
                  <span>语种</span>
                </h4>
                <ul class="category">
                  <li>
                    <a href="#">华语</a>
                    <span class="line">|</span>
                  </li>
                  <li><a href="#">欧美</a><span class="line">|</span></li>
                  <li><a href="#">日本</a><span class="line">|</span></li>
                  <li><a href="#">汉语</a><span class="line">|</span></li>
                  <li><a href="#">粤语</a><span class="line">|</span></li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <a href="#" class="hot">热门</a>
    </div>
    <ul class="songs">
      <li>
        <div class="imgBox">
          <a href="#" class="mask"></a>
          <img
            src="https://p1.music.126.net/8fQ9jzTJnMweLNm7VoyPSw==/6623458045881301.jpg?param=140y140" />
          <div class="bar">
            <div class="bar-left">
              <i class="icon icon-erji"></i>
              <span>11118万</span>
            </div>
            <a href="#" class="play" title="播放"></a>
          </div>
        </div>
        <p class="detail">
          <a href="#">那些你熟悉却又不知道名字的轻音乐</a>
        </p>
        <p class="name">
          <span>by</span>
          <a href="#">Lelow</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="less" scoped>
.songMenu {
  width: 982px;
  height: 1000px;
  padding: 40px;
  box-sizing: border-box;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  background: #fff;
  margin: 0 auto;
  .head {
    display: flex;
    justify-content: space-between;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    color: #333;
    .head-left {
      display: flex;
      h2 {
        font-size: 24px;
        font-weight: normal;
        margin-top: 2px;
      }
      .select {
        position: relative;
        .btn {
          margin: 2px 0 0 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(https://s2.music.126.net/style/web2/img/button2.png?fb6b201d38d683406c517d2416761c4a);
          width: 91px;
          line-height: 31px;
          background-position: 0 -59px;
          text-align: center;
          position: relative;
          color: #0c73c2;
          &:hover {
            background-position: 0 -141px;
            &::after {
              background-position: right -182px;
            }
          }
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            width: 5px;
            height: 100%;
            background-image: url(https://s2.music.126.net/style/web2/img/button2.png?fb6b201d38d683406c517d2416761c4a);
            background-position: right -100px;
          }
          .icon {
            background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
            width: 8px;
            height: 5px;
            background-position: -70px -543px;
            margin: 2px 0 0 5px;
          }
        }
        .categorys {
          display: none;
          background: url(https://s2.music.126.net/style/web2/img/sltlyr.png?5f76f9c7bfd7b9398caef393a69a2d58)
            repeat-y;
          background-position: -720px 0;
          width: 700px;
          height: 500px;
          padding: 0 10px;
          position: absolute;
          top: 67px;
          left: -88px;
          &::before,
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 20px;
            background-image: url(https://s2.music.126.net/style/web2/img/sltlyr.png?5f76f9c7bfd7b9398caef393a69a2d58);
            left: 0;
            z-index: 99;
          }
          &::before {
            background-image: url(https://s2.music.126.net/style/web2/img/sltlyr.png?5f76f9c7bfd7b9398caef393a69a2d58);
            height: 32px;
            top: -32px;
          }
          &::after {
            bottom: -20px;
            background-position: -1440px -12px;
          }
          .icon-arrow {
            position: absolute;
            width: 24px;
            height: 11px;
            background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?03980749585988c2b81388a405751dfd);
            background-position: -48px 0;
            left: 132px;
            top: -30px;
            z-index: 100;
          }

          h3 {
            padding-left: 26px;
            height: 37px;
            font-weight: normal;
            border-bottom: 1px solid #e6e6e6;
            a {
              display: block;
              width: 75px;
              line-height: 26px;
              background-image: url(https://s2.music.126.net/style/web2/img/button.png?b6e1fb7484daba5f3939b8cabe282f8e);
              text-align: center;
              background-position: 0 -64px;
              font-size: 12px;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .cats {
            & > li {
              display: flex;
              h4 {
                display: flex;
                width: 70px;
                height: 27px;
                margin: 15px 0 0 26px;
                align-items: center;
                .icon {
                  background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
                  width: 23px;
                  height: 23px;
                  background-position: -20px -735px;
                  margin: 0 8px 4px 0;
                }
                span {
                  margin-top: -2px;
                }
              }
              .category {
                flex: 1;
                display: flex;
                padding: 16px 15px 0 15px;
                border-left: 1px solid #e6e6e6;
                line-height: 24px;
                .line {
                  color: #d8d8d8;
                  margin: 0 10px;
                }
              }
            }
          }
        }
      }
    }
    .hot {
      background-image: url(https://s2.music.126.net/style/web2/img/button.png?b6e1fb7484daba5f3939b8cabe282f8e);
      width: 46px;
      height: 29px;
      background-position: 0 0;
      text-align: center;
      line-height: 29px;
      color: #fff;
      border-radius: 3px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .songs {
    display: flex;
    margin-top: 30px;
    margin-left: -50px;
    li {
      padding: 0 0 30px 50px;
    }
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
        width: 100%;
        height: 100%;
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
      margin: 9px 0 5px;
      font-size: 14px;
      line-height: 1.4;
      color: #000;
      width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        a {
          text-decoration: underline;
        }
      }
    }
    .name {
      color: #666;

      span {
        color: #999;
        margin-right: 3px;
      }
      &:hover {
        a {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
