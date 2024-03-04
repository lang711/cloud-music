<template>
  <div class="footer">
    <ul class="icons">
      <li>
        <a href="#" class="icon icon1"></a>
        <p>音乐开放平台</p>
      </li>
      <li>
        <a href="#" class="icon icon2"></a>
        <p>云村交易所</p>
      </li>
      <li>
        <a href="#" class="icon icon3"></a>
        <p>Amped Studio</p>
      </li>
      <li>
        <a href="#" class="icon icon4"></a>
        <p>X StudioAI歌手</p>
      </li>
      <li>
        <a href="#" class="icon icon5"></a>
        <p>用户认证</p>
      </li>
      <li>
        <a href="#" class="icon icon6"></a>
        <p>音乐交易平台</p>
      </li>
      <li>
        <a href="#" class="icon icon7"></a>
        <p>云推歌</p>
      </li>
      <li>
        <a href="#" class="icon icon8"></a>
        <p>赞赏</p>
      </li>
    </ul>
    <div class="copy">
      <p class="links">
        <a href="#">服务条款</a>
        <span class="line">|</span>
        <a href="#">隐私政策</a>
        <span class="line">|</span>
        <a href="#">儿童隐私政策</a>
        <span class="line">|</span>
        <a href="#">版权投诉</a>
        <span class="line">|</span>
        <a href="#">投资者关系</a>
        <span class="line">|</span>
        <a href="#">广告合作</a>
        <span class="line">|</span>
        <a href="#">联系我们</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  height: 325px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;

  .icons {
    margin: 33px auto;
    display: flex;
    width: 980px;
    justify-content: center;
    li {
      text-align: center;
      flex: 1;
      .icon {
        background-image: url(https://s2.music.126.net/style/web2/img/foot_enter_new2.png?f39ff59d7ab7cbb97cf0ca860297f262);
        display: block;
        width: 45px;
        height: 45px;
        background-size: 220px 220px;
        margin: 0 auto 10px;
      }
      .icon1 {
        background-position: -170px -5px;
        &:hover {
          background-position: -5px -115px;
        }
      }
      .icon2 {
        background-position: -5px -170px;
        &:hover {
          background-position: -60px -170px;
        }
      }
      .icon3 {
        background-position: -5px -60px;
        &:hover {
          background-position: -60px -5px;
        }
      }
      .icon4 {
        background-image: url(https://s2.music.126.net/style/web2/img/xStudio.png?3601425b720badc147c8cac237807a24);
        background-size: 45px;
        &:hover {
          background-image: url(https://s2.music.126.net/style/web2/img/xStudioHover.png?4664cb4d7e454a18d829c3892ed57713);
        }
      }
      .icon5 {
        background-position: -60px -60px;
        &:hover {
          background-position: -115px -5px;
        }
      }
      .icon6 {
        background-position: -115px -115px;
        &:hover {
          background-position: -5px -5px;
        }
      }
      .icon7 {
        background-image: url(https://s2.music.126.net/style/web2/img/cloudSong.png?71a4bee731dfd5496fee886ad8f132f5);
        background-size: 45px;
        &:hover {
          background-image: url(https://s2.music.126.net/style/web2/img/cloudSongHover.png?f1a30c83e468492fe5a82f4e8c731831);
        }
      }
      .icon8 {
        background-position: -170px -115px;
        &:hover {
          background-position: -60px -115px;
        }
      }
      p {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .copy {
    padding-top: 60px;
    text-align: center;
    line-height: 24px;
    margin: 0 auto;
    width: 980px;
    .links {
      a {
        color: #666;
        &:hover {
          text-decoration: underline;
        }
      }
      .line {
        margin: 0 8px;
        color: #d9d9d9;
      }
    }
  }
}
</style>
