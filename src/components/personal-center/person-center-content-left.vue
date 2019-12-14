<template>
  <div class="person-center-content-left">
    <div class="p-c-c-quanju">
      <div class="person-center-top clearfix">
        <img class="center-touxiang" src="@/assets/image/person-center-title.png" alt />
        <div class="top-r">
          <p class="top-r0">罗密欧</p>
          <p class="top-r1">
            信息完整度
            <span class="top-zhu"></span>
            <span class="top-gao">高</span>
          </p>
          <p class="top-r2">
            <span class="iconfont icon-dianzan zan"></span>
            <span class="iconfont icon-dianzan zan"></span>
            <span class="iconfont icon-dianzan zan"></span>
          </p>
        </div>
      </div>
      <div class="xian"></div>
      <div class="person-center-middle clearfix">
        <a class="middle-shen" href>申请提现</a>
        <div class="middle-yu">
          <p class="yu-e">账户余额</p>
          <p class="yu-mon">248元</p>
        </div>
      </div>
      <div class="xian"></div>
      <div class="person-center-bottom clearfix">
        <div class="bottom-out">
          <img src="@/assets/image/id1.png" alt />
          <p class="bottom-explain">
            <span class="explain-1">实名认证</span>
            <span class="explain-2">[未认证]</span>
          </p>
        </div>
        <div class="bottom-out">
          <img src="@/assets/image/id2.png" alt />
          <p class="bottom-explain">
            <span class="explain-1">资质认证</span>
            <span class="explain-2">[未认证]</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../icon/iconfont.css";
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.clearfix::after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.xian {
  height: 1px;
  border-bottom: 1px solid #999;
}

.person-center-content-left {
  margin: 20px 0px 30px 0px;
  float: left;
  width: 450px;
  height: 550px;
  background-color: #fff;  
  .p-c-c-quanju {
    padding: 10px 20px 30px 10px;
  }
  .person-center-top {
    .center-touxiang {
      float: left;
      width: 80px;
      height: 80px;
      margin-bottom: 60px;
    }
    .top-r {
      width: 200px;
      float: left;
      margin-left: 30px;
      .top-r0 {
        width: 70px;
        text-align: left;
        margin-bottom: 10px;
      }
      .top-r1 {
        text-align: left;
        margin-bottom: 10px;
      }
      .top-zhu {
        display: inline-block;
        width: 60px;
        height: 2px;
        background: #00aaff;
        border-radius: 6px;
        margin: 0 10px;
        padding: 2px 0px;
      }
      .top-gao {
        color: #00aaff;
      }
      .top-r2 {
        text-align: left;
        .zan {
          padding: 0 5px;
        }
      }
    }
  }

  .person-center-middle {
    margin: 40px 0;
    .middle-shen {
      float: left;
      background-color: #00aaff;
      border-radius: 10px;
      padding: 10px 20px;
      color: #fff;
      margin-top: 8px;
    }
    .middle-yu {
      float: left;
      margin-left: 60px;
      .yu-e {
        color: #999;
        font-size: 16px;
      }
      .yu-mon {
        font-size: 24px;
        color: black;
      }
    }
  }
  .person-center-bottom {
    margin: 30px 0px;
    .bottom-out {
      float: left;
      margin-left: 30px;
      img {
        width: 170px;
        height: 120px;
      }
      .bottom-explain {
        margin-top: 20px;
        text-align: center;
        .explain-1 {
          color: #999;
        }
        .explain-2 {
          color: orangered;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>