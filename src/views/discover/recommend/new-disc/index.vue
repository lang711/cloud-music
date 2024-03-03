<template>
  <div class="new-disc">
    <Category title="新碟上架">
      <template #content>
        <div class="content">
          <ul class="imglist">
            <li>
              <div class="imgBox">
                <img
                  src="https://p2.music.126.net/S8_bTTmiVhDlN3Eyv7u9xw==/109951169295120032.jpg?param=100y100"
                  alt="" />
                <a href="#" class="mask"></a>
                <a href="#" class="icon icon-play"></a>
              </div>
              <p class="name"><a href="#">2</a></p>
              <p class="author"><a href="#">苏打绿</a></p>
            </li>
            <li>
              <div class="imgBox">
                <img
                  src="https://p2.music.126.net/S8_bTTmiVhDlN3Eyv7u9xw==/109951169295120032.jpg?param=100y100"
                  alt="" />
                <a href="#" class="mask"></a>
              </div>
              <p class="name"><a href="#">2</a></p>
              <p class="author"><a href="#">苏打绿</a></p>
            </li>
            <li>
              <div class="imgBox">
                <img
                  src="https://p2.music.126.net/S8_bTTmiVhDlN3Eyv7u9xw==/109951169295120032.jpg?param=100y100"
                  alt="" />
                <a href="#" class="mask"></a>
              </div>
              <p class="name"><a href="#">2</a></p>
              <p class="author"><a href="#">苏打绿</a></p>
            </li>
            <li>
              <div class="imgBox">
                <img
                  src="https://p2.music.126.net/S8_bTTmiVhDlN3Eyv7u9xw==/109951169295120032.jpg?param=100y100"
                  alt="" />
                <a href="#" class="mask"></a>
              </div>
              <p class="name"><a href="#">2</a></p>
              <p class="author"><a href="#">苏打绿</a></p>
            </li>
            <li>
              <div class="imgBox">
                <img
                  src="https://p2.music.126.net/S8_bTTmiVhDlN3Eyv7u9xw==/109951169295120032.jpg?param=100y100"
                  alt="" />
                <a href="#" class="mask"></a>
              </div>
              <p class="name"><a href="#">2</a></p>
              <p class="author"><a href="#">苏打绿</a></p>
            </li>
          </ul>
          <a class="left-btn btn"></a>
          <a class="right-btn btn"></a>
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
.new-disc {
  .content {
    margin: 20px 0 37px;
    height: 184px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
    position: relative;
    .imglist {
      width: 645px;
      margin: 29px 27px 0 16px;
      display: flex;
      li {
        background: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1)
          no-repeat 0 9999px;
        width: 118px;
        height: 150px;
        background-position: -260px 100px;
        margin-left: 11px;
      }
      .imgBox {
        position: relative;
        width: 100px;
        height: 100px;
        margin-bottom: 6px;
        .mask {
          position: absolute;
          width: 118px;
          height: 100%;
          background-image: url(https://s2.music.126.net/style/web2/img/coverall.png?cd3b03e08f3a62252a97dd9e9b04e994);
          background-position: 0 -570px;
          left: 0;
          top: 0;
          z-index: 2;
        }
        img {
          display: block;
        }
        .icon {
          display: none;
          background-image: url(https://s2.music.126.net/style/web2/img/iconall.png?f3095f34778533f3afe29d01904d9687);
          width: 22px;
          height: 22px;
          position: absolute;
          background-position: 0 -85px;
          right: 6px;
          bottom: 5px;
          z-index: 3;
          &:hover {
            background-position: 0 -110px;
          }
        }
        &:hover {
          .icon {
            display: block;
          }
        }
      }

      p {
        line-height: 18px;
        width: 100%;
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
          color: #000;
        }
      }
    }

    .btn {
      width: 17px;
      height: 17px;
      background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?5e9995a753a7b0a1e0d3944275f9c1a1);
      position: absolute;
      top: 71px;
    }
    .left-btn {
      left: 4px;
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .right-btn {
      right: 8px;
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
  }
}
</style>
