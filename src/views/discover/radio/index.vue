<template>
  <div class="radio">
    <div class="nav">
      <ul class="navs">
        <li v-for="n in 18" :key="n">
          <a href="#">
            <i class="icon"></i>
            <span>情感</span>
          </a>
        </li>
      </ul>
      <a href="#" class="btn pre disabled"></a>
      <a href="#" class="btn next"></a>
      <div class="dots">
        <span class="active"></span>
        <span></span>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.radio {
  background: #fff;
  width: 982px;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  padding: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  .nav {
    position: relative;
    height: 194px;
    margin-bottom: 20px;
    .navs {
      display: flex;
      flex-wrap: wrap;
      margin-left: -33px;
      a {
        display: block;
        width: 70px;
        height: 70px;
        text-align: center;
        color: #888;
        margin: 0 0 25px 33px;
        &.active {
          color: #d35757;
          background-position: -70px 0;
          background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_bg.png?f0ca8fa18f9cee771b75422c496b8675);
          .icon {
            background-position: -48px 0;
          }
        }
        &:not(.active):hover {
          background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_bg.png?f0ca8fa18f9cee771b75422c496b8675);
          background-position: 0 0;
        }
        .icon {
          display: block;
          width: 48px;
          height: 48px;
          background-image: url(https://p4.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg);
          background-position: 0 0;
          margin: 2px auto 2px;
        }
      }
    }
    .btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 30px;
      background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_slide.png?d100da177300019621eed2a6f76be61e);
      opacity: 0.25;
      &:hover {
        opacity: 0.4;
      }
    }
    .pre {
      left: -26px;
      background-position: 0 -30px;
    }
    .next {
      right: -26px;
      background-position: -30px -30px;
    }
    .disabled {
      opacity: 0.08;
      &:hover {
        opacity: 0.08;
      }
    }
    .dots {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      width: 100%;
      span {
        width: 20px;
        height: 20px;
        background-image: url(https://s2.music.126.net/style/web2/img/index_radio/radio_slide.png?64118a7f06a72ba17b2decdefc54e0cf);
        background-position: 0px 0;
        &.active {
          background-position: -30px 0;
        }
      }
    }
  }
}
</style>
