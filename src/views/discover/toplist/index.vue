<template>
  <div class="toplist">
    <div class="aside">
      <h2>云音乐特色榜</h2>
      <ul class="ranks">
        <li v-for="n in 4" :key="n">
          <a href="#" :class="{ active: n == 1 }">
            <img
              src="https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=40y40"
              alt="" />
            <div class="right">
              <p class="title">飙升榜</p>
              <p class="update">刚刚更新</p>
            </div>
          </a>
        </li>
      </ul>
      <h2>全球媒体榜</h2>
      <ul class="ranks">
        <li>
          <a href="#">
            <img
              src="https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=40y40"
              alt="" />
            <div class="right">
              <p class="title">飙升榜</p>
              <p class="update">刚刚更新</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="top">
        <div class="logo">
          <img
            src="https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=150y150"
            alt="" />
          <span class="mask"></span>
        </div>
        <div class="top-right">
          <h2>飙升榜</h2>
          <div class="update">
            <i class="icon icon-watch"></i>
            <span class="clearly">最近更新：03月07日</span>
            <span class="new">（刚刚更新）</span>
          </div>
          <div class="btns">
            <div class="play">
              <a href="" class="icon icon-play" title="播放">
                <i class="icon icon-player"></i>
                <span>播放</span>
              </a>
              <a href="" class="icon icon-add" title="添加到播放列表"></a>
            </div>
            <a href="#" class="icon icon-collect"> (4103478) </a>
            <a href="#" class="icon icon-share">(15636)</a>
            <a href="#" class="icon icon-download">下载</a>
            <a href="#" class="icon icon-comment">(220723)</a>
          </div>
        </div>
      </div>
      <div class="songlist">
        <div class="title">
          <h3>
            歌曲列表
            <span class="song-num">100首歌</span>
          </h3>
          <span class="song-playcount">播放：<em>5847658496</em>次</span>
        </div>
        <div class="body">
          <div class="head">
            <div class="order"></div>
            <div class="name">标题</div>
            <div class="duration">时长</div>
            <div class="singer">歌手</div>
          </div>
          <ul class="songs">
            <li v-for="n in 20" :key="n">
              <div class="order">
                <span class="num">4</span>
                <div class="icon">
                  <i></i>
                  <span>19</span>
                </div>
              </div>
              <div class="name">
                <i class="icon-play" title="播放"></i>
                <a href="#">底牌</a>
                <span> - (在我耳边温柔地哼)</span>
              </div>
              <div class="duration">
                <span>03:00</span>
                <div class="icons">
                  <a href="#" class="icon icon-add" title="添加到播放列表"></a>
                  <a href="#" class="icon icon-collect" title="收藏"></a>
                  <a href="#" class="icon icon-share" title="分享"></a>
                  <a href="#" class="icon icon-download" title="下载"></a>
                </div>
              </div>
              <div class="singer">
                <a href="#">Max/邹沛沛</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.toplist {
  width: 982px;
  margin: 0 auto;
  height: 1000px;
  box-sizing: border-box;
  background: url(https://s2.music.126.net/style/web2/img/frame/wrap3.png?2e52fd28cd57b61de252c79b06acd70c)
    repeat-y center 0;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  display: flex;
  .aside {
    width: 240px;
    padding-top: 20px;
    h2 {
      font-size: 14px;
      padding: 2px 10px 13px 15px;
      color: #000;
      margin-top: 20px;
    }
    .ranks {
      a {
        display: flex;
        height: 42px;
        padding: 12px 0 8px 20px;

        &.active {
          background: #e6e6e6;
        }
        img {
          width: 40px;
          height: 40px;
        }
        .right {
          padding-left: 10px;
          .title {
            width: 150px;
            color: #000;
            margin: 4px 0 10px;
          }
          .update {
            color: #999;
          }
        }
      }
    }
  }
  .content {
    flex: 1;
    padding: 40px;
    .top {
      display: flex;
      color: #333;
      margin-bottom: 40px;
      .logo {
        position: relative;
        border: 1px solid #ccc;
        padding: 3px;
        position: relative;
        .mask {
          background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?a69ded6098dfd9babe02d645d4aab8cc);
          width: 150px;
          height: 150px;
          background-position: -230px -380px;
          position: absolute;
          top: 3px;
          left: 3px;
        }
        img {
          display: block;
          width: 150px;
          height: 150px;
        }
      }
      .top-right {
        margin-left: 29px;
        h2 {
          line-height: 24px;
          font-weight: normal;
          font-size: 20px;
          margin: 16px 0 4px;
        }
        .update {
          line-height: 35px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          .icon {
            background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
            width: 13px;
            height: 13px;
            background-position: -18px -682px;
          }
          .clearly {
            color: #666;
            margin-left: 5px;
          }
          .new {
            color: #999;
          }
        }

        .btns {
          display: flex;
          & > .icon {
            background-image: url(https://s2.music.126.net/style/web2/img/button2.png?fb6b201d38d683406c517d2416761c4a);
            line-height: 31px;
            padding: 0 2px 0 28px;
            background-position: 0 -977px;
            position: relative;
            margin-right: 11px;
            &::after {
              content: "";
              position: absolute;
              width: 5px;
              height: 100%;
              background-image: url(https://s2.music.126.net/style/web2/img/button2.png?fb6b201d38d683406c517d2416761c4a);
              background-position: right -1020px;
              right: -5px;
              top: 0;
            }
            &:hover {
              &::after {
                background-position: right -1106px;
              }
            }
          }
          .play {
            display: flex;
            margin-right: 5px;
            .icon {
              background-image: url(https://s2.music.126.net/style/web2/img/button2.png?fb6b201d38d683406c517d2416761c4a);
            }
          }
          .icon-play {
            padding: 0 9px 0 8px;
            color: #fff;
            background-position: 0 -387px;
            line-height: 31px;
            height: 31px;
            text-align: center;
            &:hover {
              background-position: 0 -469px;
              .icon-player {
                background-position: -28px -1622px;
              }
            }
            .icon-player {
              display: inline-block;
              width: 20px;
              height: 18px;
              background-position: 0 -1622px;
              margin: 6px 2px 2px 0;
            }
            span {
              display: inline-block;
              vertical-align: 6px;
            }
          }
          .icon-add {
            width: 31px;
            height: 31px;
            background-position: 0 -1588px;
            &:hover {
              background-position: -40px -1588px;
            }
          }
          .icon-collect {
            background-position: 0 -977px;
            &:hover {
              background-position: 0 -1063px;
            }
          }
          .icon-share {
            background-position: 0 -1225px;
            &:hover {
              background-position: 0 -1268px;
            }
          }
          .icon-download {
            background-position: 0 -2761px;
            &:hover {
              background-position: 0 -2805px;
            }
          }
          .icon-comment {
            background-position: 0 -1465px;
            &:hover {
              background-position: 0 -1508px;
            }
          }
        }
      }
    }
    .songlist {
      .title {
        display: flex;
        justify-content: space-between;
        height: 33px;
        border-bottom: 2px solid #c20c0c;
        color: #333;
        h3 {
          font-size: 20px;
          color: #333;
          font-weight: normal;
          line-height: 29px;
          span {
            margin: 9px 0 0 14px;
            color: #666;
            font-size: 12px;
          }
        }
        .song-playcount {
          margin-top: 7px;
          color: #666;
          em {
            color: #c20c0c;
            font-style: normal;
            font-weight: bold;
          }
        }
      }
      .body {
        border: 1px solid #d9d9d9;

        .head {
          display: flex;
          color: #666;
          div {
            padding: 8px 10px;
            line-height: 18px;
            height: 38px;
            box-sizing: border-box;
            background-image: url(https://s2.music.126.net/style/web2/img/table.png?11a3ecc50f13a3e7bb7e9d484c6f4e44);
            background-position: 0 0;
            position: relative;
            &::before {
              content: "";
              position: absolute;
              width: 2px;
              height: 38px;
              background-image: url(https://s2.music.126.net/style/web2/img/table.png?11a3ecc50f13a3e7bb7e9d484c6f4e44);
              background-position: 0 -56px;
              left: 0px;
              top: 0;
              z-index: 1;
            }
          }
          .order {
            width: 77px;
            &::before {
              content: "";
              display: none;
            }
          }
          .name {
            flex: 1;
          }
          .duration {
            width: 91px;
          }
          .singer {
            width: 26%;
          }
        }
        .songs {
          li > {
            display: flex;
            line-height: 18px;
            &:nth-child(even) {
              background: #f7f7f7;
            }
            & > div {
              box-sizing: border-box;
            }
            &:hover {
              .duration {
                .icons {
                  display: flex;
                }
                span {
                  display: none;
                }
              }
            }
            .order {
              padding: 6px 10px;
              line-height: 18px;
              color: #999;
              display: flex;
              text-align: center;

              .num {
                width: 25px;
              }
              .icon {
                display: flex;
                width: 32px;
                font-size: 10px;
                color: #bb2128;
                justify-content: end;

                i {
                  width: 8px;
                  height: 100%;
                  background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
                  background-position: -74px -299px;
                  margin-top: 1px;
                }
                span {
                  margin-right: 1px;
                }
              }
            }
            .name {
              flex: 1;
              display: flex;
              padding: 6px 10px;
              line-height: 18px;
              .icon-play {
                width: 17px;
                height: 17px;
                background-image: url(https://s2.music.126.net/style/web2/img/table.png?11a3ecc50f13a3e7bb7e9d484c6f4e44);
                background-position: 0 -103px;
                margin-right: 8px;
                cursor: pointer;
                &:hover {
                  background-position: 0 -128px;
                }
              }
              a {
                color: #333;
                margin-right: 3px;
                &:hover {
                  text-decoration: underline;
                }
              }
              span {
                color: #aeaeae;
              }
            }
            .duration {
              width: 91px;
              padding: 6px 10px;
              position: relative;
              color: #666;

              .icons {
                display: none;
                width: 100%;
                height: 100%;

                .icon {
                  width: 18px;
                  height: 16px;
                  flex-shrink: 0;
                  background-image: url(https://s2.music.126.net/style/web2/img/table.png?11a3ecc50f13a3e7bb7e9d484c6f4e44);
                  margin-right: 4px;
                  margin-top: 2px;
                }
                .icon-add {
                  width: 13px;
                  height: 13px;
                  background-position: 0 -700px;
                  background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
                  &:hover {
                    background-position: -22px -700px;
                  }
                }
                .icon-collect {
                  background-position: 0 -174px;
                  &:hover {
                    background-position: -20px -174px;
                  }
                }
                .icon-share {
                  background-position: 0 -195px;
                  &:hover {
                    background-position: -20px -195px;
                  }
                }
                .icon-download {
                  background-position: -80px -174px;
                  &:hover {
                    background-position: -103px -174px;
                  }
                }
              }
            }
            .singer {
              width: 26%;
              padding: 6px 10px;
              color: #333;
              a:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
}
</style>
