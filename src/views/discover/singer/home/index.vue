<template>
  <div class="home">
    <Container title="入驻歌手">
      <template #right>
        <a href="#" class="more">更多 ></a>
      </template>
      <template #content>
        <ul class="singers">
          <li v-for="n in 10" :key="n">
            <div class="imgbox">
              <a href="#" class="mask"></a>
              <img
                src="https://p1.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=130y130"
                alt="" />
            </div>
            <p class="des">
              <a href="#" class="name">张惠妹</a>
              <a href="#" class="icon icon-user"></a>
            </p>
          </li>
        </ul>
      </template>
    </Container>
    <Container title="热门歌手">
      <template #content>
        <ul class="singers">
          <li v-for="n in 10" :key="n">
            <div class="imgbox">
              <a href="#" class="mask"></a>
              <img
                src="https://p1.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=130y130"
                alt="" />
            </div>
            <p class="des">
              <a href="#" class="name">张惠妹</a>
              <a href="#" class="icon icon-user"></a>
            </p>
          </li>
        </ul>
        <ul class="artists">
          <li v-for="n in 50" :key="n">
            <a href="#">张杰</a>
          </li>
        </ul>
      </template>
    </Container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home {
  .more {
    margin-top: 14px;
    line-height: 16px;
    display: block;
    &:hover {
      text-decoration: underline;
    }
  }
  .singers {
    display: flex;
    margin: 20px 0 0 -17px;
    flex-wrap: wrap;
    li {
      padding: 0 0 30px 17px;
    }
    .imgbox {
      position: relative;
      width: 130px;
      height: 130px;
      .mask {
        position: absolute;
        background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?a69ded6098dfd9babe02d645d4aab8cc);
        background-position: 0 -680px;
        width: 100%;
        height: 100%;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    p {
      display: flex;
      justify-content: space-between;
      margin-top: 7px;
      color: #000;
      align-items: center;
      .name {
        &:hover {
          text-decoration: underline;
        }
      }
      .icon {
        width: 17px;
        height: 18px;
        background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
        background-position: 0 -740px;
      }
    }
  }
  .artists {
    display: flex;
    color: #000;
    border-top: 1px dotted #999;
    padding-top: 12px;
    flex-wrap: wrap;
    li {
      width: 130px;
      height: 30px;
      line-height: 23px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
