<template>
  <div class="header">
    <div class="wrap">
      <div class="inner">
        <div class="wrap-left">
          <h1>
            <a href="#" class="logo">网易云音乐</a>
          </h1>
          <ul class="nav">
            <li><a href="#" class="active">发现音乐</a></li>
            <li><a href="#">我的音乐</a></li>
            <li><a href="#">关注</a></li>
            <li><a href="#">商城</a></li>
            <li><a href="#">音乐人</a></li>
            <li><a href="#">云推歌</a></li>
            <li><a href="#">下载客户端</a></li>
          </ul>
        </div>
        <div class="wrap-right">
          <div class="search">
            <input type="text" class="input" />
            <label for="input">音乐/视频/电台/用户</label>
          </div>
          <a href="#" class="author">创作者中心</a>
          <div class="login">
            <a href="#">登录</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bar">
      <div class="inner">
        <ul class="nav">
          <li>
            <a href="#" class="active">
              <span>推荐</span>
            </a>
          </li>
          <li>
            <a href="#"><span>排行榜</span></a>
          </li>
          <li>
            <a href="#"><span>歌单</span></a>
          </li>
          <li>
            <a href="#"><span>主播电台</span></a>
          </li>
          <li>
            <a href="#"><span>歌手</span></a>
          </li>
          <li>
            <a href="#"><span>新碟上架</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
h1 {
  padding: 0;
  margin: 0;
}
.inner {
  margin: 0 auto;
  width: 1100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.header {
  font-size: 12px;
  .wrap {
    height: 70px;
    width: 100%;
    background: #242424;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
    .wrap-left {
      display: flex;
      .logo {
        display: block;
        width: 176px;
        height: 100%;
        background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?70d5ce6f1ee210ec98c45773eca88a52);
        background-position: 0 0;
        text-indent: -9999px;
      }
      .nav {
        display: flex;
        color: #ccc;
        height: 100%;
        font-size: 14px;
        a {
          display: block;
          padding: 0 19px;
          height: 100%;
          line-height: 69px;
          &.active,
          &:hover {
            color: #fff;
            background: #000;
          }
          &.active {
            position: relative;
            &::after {
              content: "";
              display: block;
              position: absolute;
              width: 12px;
              height: 7px;
              background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?70d5ce6f1ee210ec98c45773eca88a52);
              background-position: -226px 0;
              bottom: -2px;
              left: 50%;
              margin-left: -6px;
            }
          }
        }
      }
    }
    .wrap-right {
      display: flex;
      .search {
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
        .input {
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
      }
      .author {
        display: block;
        width: 90px;
        height: 32px;
        box-sizing: border-box;
        margin: 19px 0 0 12px;
        color: #ccc;
        border-radius: 20px;
        border: 1px solid #4f4f4f;

        line-height: 33px;
        padding-left: 16px;
        &:hover {
          border-color: #fff;
          color: #fff;
        }
      }
      .login {
        color: #787878;
        margin: 28px 0 0 20px;
        padding-right: 26px;
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .bar {
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    border-bottom: 1px solid #a40011;
    background-color: #c20c0c;
    .nav {
      color: #fff;
      display: flex;
      padding-left: 180px;
      a {
        display: block;
        height: 100%;
        overflow: hidden;
        &:hover,
        &.active {
          span {
            background: #9b0909;
          }
        }
      }
      span {
        display: block;
        padding: 0 13px;
        line-height: 20px;
        margin: 7px 17px 0;
        border-radius: 20px;
      }
    }
  }
}
</style>
