<template>
  <div class="home">
    <div class="program">
      <Container title="推荐节目">
        <template #right>
          <a href="#" class="more">更多 ></a>
        </template>
        <template #content>
          <ul class="rank">
            <li v-for="n in 10" :key="n">
              <a href="#" class="mask" title="播放">
                <img
                  src="https://p2.music.126.net/gkPPnZ3hw0Up-taGApztTA==/109951169392653108.jpg?param=40x40"
                  alt="" />
                <i class="icon icon-play"></i>
              </a>
              <div class="cont">
                <h3><a href="#">《味道》零延迟的情歌体验| 金曲典藏计划</a></h3>
                <p class="name"><a href="#">遗珠三品</a></p>
              </div>
              <a href="#" class="btn">音乐播客</a>
            </li>
          </ul>
        </template>
      </Container>
      <Container title="节目排行榜">
        <template #right>
          <a href="#" class="more">更多 ></a>
        </template>
        <template #content>
          <ul class="rank">
            <li v-for="n in 10" :key="n">
              <a href="#" class="mask" title="播放">
                <img
                  src="https://p2.music.126.net/gkPPnZ3hw0Up-taGApztTA==/109951169392653108.jpg?param=40x40"
                  alt="" />
                <i class="icon icon-play"></i>
              </a>
              <div class="cont">
                <h3><a href="#">《味道》零延迟的情歌体验| 金曲典藏计划</a></h3>
                <p class="name"><a href="#">遗珠三品</a></p>
              </div>
              <a href="#" class="btn">音乐播客</a>
            </li>
          </ul>
        </template>
      </Container>
    </div>
    <ul class="category">
      <li v-for="n in 5" :key="n">
        <Container title="音乐播客 · 电台">
          <template #right>
            <a href="#" class="more">更多 ></a>
          </template>
          <template #content>
            <ul class="list">
              <li v-for="n in 4" :key="n">
                <a href="#" class="mask">
                  <img
                    src="	https://p1.music.126.net/Bwh9Yh5CodMWLQA6nTZIGA==/109951168600984382.jpg?param=200y200"
                    alt="" />
                </a>
                <div class="dec">
                  <h3><a href="#">我是一名聊愈师</a></h3>
                  <p class="detail">离这些熟悉但又陌生的华语音乐，更近一些。</p>
                </div>
              </li>
            </ul>
          </template>
        </Container>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home {
  .more {
    display: block;
    margin-top: 16px;
    &:hover {
      text-decoration: underline;
    }
  }
  .program {
    display: flex;
    justify-content: space-between;
    .container {
      margin-bottom: 35px;
    }

    .rank {
      width: 426px;
      border: 1px solid #e2e2e2;
      border-top: none;
      li {
        display: flex;
        align-items: center;
        padding: 10px 0;
        color: #999;
        &:nth-child(even) {
          background: #f7f7f7;
        }
        &:hover {
          background: #eee;
          .mask .icon {
            display: block;
          }
        }
        .mask {
          position: relative;
          margin-left: 20px;
          img {
            display: block;
            width: 40px;
            height: 40px;
          }
          .icon {
            display: none;
            position: absolute;
            width: 22px;
            height: 22px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-position: 0 -85px;
            background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?c6c90633c17935facfcbaa299d1317ec);
          }
        }
        .cont {
          line-height: 20px;
          margin-left: 10px;
          h3 {
            width: 254px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: normal;
            color: #333;
          }
          a:hover {
            text-decoration: underline;
          }
        }
        .btn {
          border: 1px solid #999;
          padding: 0 6px;
          line-height: 16px;
          &:hover {
            border-color: #000;
            color: #000;
          }
        }
      }
    }
  }
  .category {
    .list {
      display: flex;
      flex-wrap: wrap;
      margin-left: -30px;
      li {
        display: flex;
        width: 435px;
        height: 120px;
        border-bottom: 1px solid #e7e7e7;
        padding: 20px 0;
        margin-left: 30px;
        &:nth-child(n + 3) {
          border: none;
        }
        .mask {
          width: 120px;
          height: 120px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .dec {
          margin-left: 20px;
          color: #333;
          h3 {
            margin: 16px 0 20px;
            font-size: 18px;
            line-height: 24px;
          }
          a:hover {
            text-decoration: underline;
          }
          .detail {
            line-height: 20px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
