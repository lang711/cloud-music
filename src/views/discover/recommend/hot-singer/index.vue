<template>
  <div class="hot-singer">
    <div class="head">
      <h4>热门歌手</h4>
      <a href="#">查看全部 ></a>
    </div>
    <ul class="singers">
      <li>
        <a href="#">
          <img
            src="https://p1.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=62y62"
            alt="" />
          <div class="mes">
            <p class="name">张惠妹</p>
            <p class="dec">台湾女歌手</p>
          </div>
        </a>
      </li>
    </ul>
    <router-link to="/musician" class="apply">申请成为网易音乐人</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.hot-singer {
  padding: 15px 20px 0;
  .head {
    display: flex;
    justify-content: space-between;
    height: 23px;
    line-height: 16px;
    border-bottom: 1px solid #ccc;
    color: #333;
    a {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .singers {
    padding-top: 20px;
    a {
      display: flex;
      margin-bottom: 14px;
      background: #fafafa;
      &:hover {
        background: #f4f4f4;
      }
      .mes {
        border: 1px solid #e9e9e9;
        border-left: none;
        padding-left: 14px;
        width: 133px;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          white-space: nowrap;
          margin-top: 8px;
        }
        .name {
          font-size: 14px;
          color: #333;
          font-weight: bold;
          line-height: 19px;
          height: 22px;
        }
        .dec {
          color: #666;
          line-height: 16px;
        }
      }
    }
  }
  .apply {
    display: block;
    background-image: url(https://s2.music.126.net/style/web2/img/button2.png?2cf5dfaf9c1bdcc7e987a4001ac9f5b5);
    background-position: 0 -59px;
    color: #333;
    text-align: center;
    line-height: 31px;
    position: relative;
    font-weight: bold;
    &::before {
      position: absolute;
      content: "";
      background-image: url(https://s2.music.126.net/style/web2/img/button2.png?2cf5dfaf9c1bdcc7e987a4001ac9f5b5);
      background-position: right -100px;
      width: 5px;
      height: 100%;
      right: 0;
      top: 0;
    }
    &:hover {
      background-position: 0 -141px;
      &::before {
        background-position: right -182px;
      }
    }
  }
}
</style>
