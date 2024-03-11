<template>
  <div class="category">
    <Container title="优秀新电台">
      <template #content>
        <ul class="imglist">
          <li v-for="n in 5" :key="n">
            <a href="#" class="mask">
              <img
                src="https://p1.music.126.net/VvXXcbBccyBBArXjbyew6w==/109951169230751591.jpg?param=200y200"
                alt="" />
            </a>
            <p class="name">
              <a href="#">小高的岛</a>
            </p>
            <p class="dec">和高嘉程一起掏心窝，享受一场真诚酣畅的对话</p>
          </li>
        </ul>
      </template>
    </Container>
    <Container title="电台排行榜">
      <template #right>
        <div class="right">
          <a href="#" class="fast active">上升最快</a>
          <span class="line">|</span>
          <a href="#" class="hot">最热电台</a>
        </div>
      </template>
      <template #content>
        <ul class="rank">
          <li v-for="n in 25" :key="n">
            <a href="#" class="mask">
              <img
                src="	https://p1.music.126.net/Bwh9Yh5CodMWLQA6nTZIGA==/109951168600984382.jpg?param=200y200"
                alt="" />
            </a>
            <div class="dec">
              <h3><a href="#">我是一名聊愈师</a></h3>
              <p class="author">
                <i class="icon icon-user"></i>
                <a href="#" class="name">聊愈大白</a>
              </p>
              <p class="detail">
                <span>共1期</span>
                <span>订阅87734次</span>
              </p>
            </div>
          </li>
        </ul>
        <Navigation total="35"></Navigation>
      </template>
    </Container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.category {
  .imglist {
    display: flex;
    margin: 16px 0 0 -37px;
    li {
      width: 150px;
      margin-left: 37px;
    }
    .mask,
    img {
      display: block;
      width: 150px;
      height: 150px;
    }
    .name {
      margin: 13px 0 6px;
      color: #333;
      line-height: 16px;
      font-size: 14px;
      a:hover {
        text-decoration: underline;
      }
    }
    .dec {
      color: #999;
      line-height: 18px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
  }
  .container {
    margin-bottom: 35px;
  }
  .right {
    margin-top: 12px;
    .line {
      color: #c7c7c7;
      margin: 0 10px;
    }
    .active {
      color: #c20c0c;
    }
  }
  .rank {
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
          line-height: 64px;
          font-size: 19px;
        }
        a:hover {
          text-decoration: underline;
        }
        .author {
          line-height: 20px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          .icon {
            width: 14px;
            height: 15px;
            background-image: url(https://s2.music.126.net/style/web2/img/icon.png?6c1277a1c76f0e472d485d8f916f170c);
            background-position: -50px -300px;
            margin-right: 5px;
          }
        }
        .detail {
          line-height: 16px;
          color: #999;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .navigation {
    margin: 20px 0;
  }
}
</style>
