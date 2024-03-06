<template>
  <div class="newDisc">
    <Container title="热门新碟">
      <template #content>
        <ul class="albums">
          <li v-for="n in 10">
            <div class="imgBox">
              <img
                src="https://p1.music.126.net/6s6u8ZTh29dxuu7MC4u8hw==/109951169377079752.jpg?param=130y130"
                alt="" />
              <a href="#" class="mask"></a>
              <a href="#" class="icon icon-play" title="播放"></a>
            </div>
            <p class="name">
              <a href="#">Djesse Vol. 4</a>
            </p>
            <p class="author">
              <a href="#">Jacob Collier</a>
            </p>
          </li>
        </ul>
      </template>
    </Container>
    <Container title="全部新碟">
      <template #navs>
        <ul class="navs">
          <li>
            <a>全部</a>
          </li>
          <li>
            <a>全部</a>
          </li>
          <li>
            <a>全部</a>
          </li>
          <li>
            <a>全部</a>
          </li>
          <li>
            <a>全部</a>
          </li>
        </ul>
      </template>
      <template #content>
        <ul class="albums">
          <li v-for="n in 35">
            <div class="imgBox">
              <img
                src="https://p1.music.126.net/6s6u8ZTh29dxuu7MC4u8hw==/109951169377079752.jpg?param=130y130"
                alt="" />
              <a href="#" class="mask"></a>
              <a href="#" class="icon icon-play" title="播放"></a>
            </div>
            <p class="name">
              <a href="#">Djesse Vol. 4</a>
            </p>
            <p class="author">
              <a href="#">Jacob Collier</a>
            </p>
          </li>
        </ul>
        <Navigation :total="15" class="navigation"></Navigation>
      </template>
    </Container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.newDisc {
  width: 982px;
  box-sizing: border-box;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  background: #fff;
  margin: 0 auto;
  padding: 40px;
  .albums {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 0 -33px;
    li {
      width: 153px;
      height: 178px;
      padding: 0 0 30px 33px;
      .imgBox {
        position: relative;
        width: 130px;
        height: 130px;
        &:hover {
          .icon {
            opacity: 1;
            transform: scale(1);
          }
        }
        .mask {
          position: absolute;
          width: 153px;
          height: 100%;
          background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?a69ded6098dfd9babe02d645d4aab8cc);
          background-position: 0 -845px;
          left: 0;
          top: 0;
          z-index: 2;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .icon {
          opacity: 0;
          transform: scale(0.6);
          transform-origin: center;
          transition: opacity 0.25s, transform 0.25s;
          background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?c6c90633c17935facfcbaa299d1317ec);
          width: 28px;
          height: 28px;
          position: absolute;
          background-position: 0 -140px;
          right: 6px;
          bottom: 5px;
          z-index: 3;
          &:hover {
            background-position: 0 -170px;
          }
        }
        &:hover {
          .icon {
            display: block;
          }
        }
      }

      p {
        line-height: 1.4;
        width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        a:hover {
          text-decoration: underline;
        }
        &.author {
          color: #666;
        }
        &.name {
          font-size: 14px;
          color: #000;
          margin: 9px 0 4px;
        }
      }
    }
  }
  .navigation {
    margin: 20px 0;
  }
  .navs {
    display: flex;
    margin: 13px 0 0 6px;

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
</style>
