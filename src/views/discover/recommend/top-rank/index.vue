<template>
  <div class="top-rank">
    <Category title="榜单">
      <template #content>
        <div class="content">
          <div class="rank rise">
            <div class="top">
              <div class="logo">
                <a href="#" class="mask" title="飙升榜"></a>
                <img
                  src="https://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100"
                  alt="" />
              </div>
              <div class="top-right">
                <h3 class="title"><a href="#" title="飙升榜">飙升榜</a></h3>
                <p class="operate">
                  <a href="#" class="icon icon-play" title="播放"></a>
                  <a href="#" class="icon icon-collect" title="收藏"></a>
                </p>
              </div>
            </div>
            <ul class="songs">
              <li>
                <div class="mes">
                  <span class="order">1</span>
                  <a href="#" class="name">别归零</a>
                </div>
                <div class="opts">
                  <a href="#" class="icon icon-play" title="播放"></a>
                  <a href="#" class="icon icon-add" title="添加到播放列表"></a>
                  <a href="#" class="icon icon-collect" title="收藏"></a>
                </div>
              </li>
            </ul>
            <a href="#" class="all">查看全部></a>
          </div>
          <div class="rank new">
            <div class="top">
              <div class="logo">
                <a href="#" class="mask" title="飙升榜"></a>
                <img
                  src="https://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100"
                  alt="" />
              </div>
              <div class="top-right">
                <h3 class="title"><a href="#" title="飙升榜">飙升榜</a></h3>
                <p class="operate">
                  <a href="#" class="icon icon-play" title="播放"></a>
                  <a href="#" class="icon icon-collect" title="收藏"></a>
                </p>
              </div>
            </div>
            <ul class="songs">
              <li>
                <div class="mes">
                  <span class="order">1</span>
                  <a href="#" class="name">别归零</a>
                </div>
                <div class="opts">
                  <a href="#" class="icon icon-play" title="播放"></a>
                  <a href="#" class="icon icon-add" title="添加到播放列表"></a>
                  <a href="#" class="icon icon-collect" title="收藏"></a>
                </div>
              </li>
            </ul>
            <a href="#" class="all">查看全部></a>
          </div>
          <div class="rank origin">
            <div class="top">
              <div class="logo">
                <a href="#" class="mask" title="飙升榜"></a>
                <img
                  src="https://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100"
                  alt="" />
              </div>
              <div class="top-right">
                <h3 class="title"><a href="#" title="飙升榜">飙升榜</a></h3>
                <p class="operate">
                  <a href="#" class="icon icon-play" title="播放"></a>
                  <a href="#" class="icon icon-collect" title="收藏"></a>
                </p>
              </div>
            </div>
            <ul class="songs">
              <li>
                <div class="mes">
                  <span class="order">1</span>
                  <a href="#" class="name">别归零</a>
                </div>
                <div class="opts">
                  <a href="#" class="icon icon-play" title="播放"></a>
                  <a href="#" class="icon icon-add" title="添加到播放列表"></a>
                  <a href="#" class="icon icon-collect" title="收藏"></a>
                </div>
              </li>
            </ul>
            <p class="more"><a href="#">查看全部></a></p>
          </div>
        </div>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "../category";
export default {
  components: {
    Category,
  },
};
</script>

<style lang="less" scoped>
.top-rank {
  .content {
    margin: 20px auto;
    width: 100%;
    height: 472px;
    background: url(https://s2.music.126.net/style/web2/img/index/index_bill.png?976fd64a1084ba968671f6f091d6a973);
    display: flex;
    .rank {
      flex: 1;
      color: #000;
      .top {
        display: flex;
        height: 100px;
        padding: 20px 0 0 20px;
        .logo {
          width: 80px;
          height: 80px;
          position: relative;
          .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 1;
            background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?cd3b03e08f3a62252a97dd9e9b04e994);
            background-position: -145px -57px;
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .top-right {
          margin: 6px 0 0 10px;
          .title {
            font-size: 14px;
            color: #333;
            line-height: 19px;
            &:hover {
              a {
                text-decoration: underline;
              }
            }
          }
          .operate {
            display: flex;
            margin-top: 10px;
            .icon {
              display: block;
              width: 22px;
              height: 22px;
              background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
              margin-right: 10px;
            }
            .icon-play {
              background-position: -267px 260px;
              &:hover {
                background-position: -267px -235px;
              }
            }
            .icon-collect {
              background-position: -300px -205px;
              &:hover {
                background-position: -300px -235px;
              }
            }
          }
        }
      }
      .songs {
        li {
          margin-left: 15px;
          display: flex;
          height: 32px;
          line-height: 32px;
          color: #000;
          justify-content: space-between;
          &:hover {
            .opts {
              display: flex;
            }
          }
          .mes {
            display: flex;
            flex: 1;
          }
          .order {
            width: 35px;
            text-align: center;
            color: #c10d0c;
            font-size: 16px;
          }
          .name {
            &:hover {
              text-decoration: underline;
            }
            flex: 1;
            max-width: 170px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .opts {
            display: none;
            margin-top: 7px;
            width: 82px;
            height: 17px;
            .icon {
              background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
              margin-right: 10px;
              width: 17px;
              height: 17px;
              left: 10px;
            }
            .icon-play {
              background-position: -267px -268px;
              &:hover {
                background-position: -267px -288px;
              }
            }
            .icon-add {
              background-image: url(https://s2.music.126.net/style/web2/img/icon.png?e9be3b32e46744ad301c6f964a51e885);
              background-position: 2px -698px;
              &:hover {
                background-position: -20px -698px;
              }
            }
            .icon-collect {
              background-position: -297px -268px;
              &:hover {
                background-position: -297px -288px;
              }
            }
          }
        }
      }
      .more {
        display: block;
        line-height: 32px;
        margin-right: 32px;
        text-align: right;
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
