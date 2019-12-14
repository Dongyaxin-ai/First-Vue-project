<template>
  <div class="classbody clearfix">
    <div class="classlogin-left">
      <img class="cll-pic" src="@/assets/image/login-left.png" alt />
    </div>
    <div class="classlogin-right">
      <div class="clr-item clearfix">
        <!-- 左边的tab栏 -->
        <div class="clr-itemleft">
          <ul class="clr-tab">
            <li
              class="clr-tab1"
              @click="classlogin(index)"
              :class=" icon == index ? 'activelogin': ''"
              v-for="(item,index) in myarrlogin"
              :key="index"
            >
              <p>
                <span class="iconfont" :class="'icon-' + myarrico[index]"></span>
              </p>
              {{ item.name }}
            </li>
          </ul>
        </div>
        <!-- 右边的切换 -->
        <!-- 通过手机号密码登录 -->
        <!-- <div class="clr-itemright">
          <div class="clr-ir-out clearfix">
            <p class="clr-ir-t">
              <span @click="wechat(0)" :class="a == 0 ? 'activeclr':''" class="clr-ir-t1">账号登录</span>
              <span @click="wechat(1)" :class="a == 1 ? 'activeclr':''" class="clr-ir-t1">微信登录</span>
            </p>
            <div class="clr-ir-in">
              <input class="clr-ir-in1 clr-ir-in2" type="text" placeholder="手机号" />
              <input class="clr-ir-in1" type="password" placeholder="密码" />
            </div>
            <p class="clr-ir-forget">忘记密码</p>
            <p class="clr-ir-login">登录啦</p>

            <p class="clr-ir-reg">
              <span class="clr-ir-reg1">还没有账号？&nbsp;请</span>
              <span class="clr-ir-reg2">注册</span>
            </p>
          </div>
        </div>-->
        <!-- 通过手机验证码登录 -->
        <!-- <div class="clr-itemright">
          <div class="clr-ir-out clearfix">
            <p class="clr-t">通过手机验证码登录</p>
            <form class="clr-ir-in">
              <input class="clr-ir-in1 clr-ir-in2" type="text" placeholder="手机号" />
              <input class="clr-ir-in1" type="password" placeholder="密码" />
            <label for="" class="clr-forget">忘记密码</label>
            </form>
            <p class="clr-ir-login clr-lote">登录啦</p>
          </div>
        </div>-->
        <!-- 通过手机号码注册 -->
        <!-- <div class="clr-itemright">
          <div class="clr-ir-out clearfix">
            <p class="clr-t">通过手机号码注册</p>
            <form class="clr-ir-in">
              <input class="clr-ir-in1 clr-ir-in2" type="text" placeholder="手机号" />
              <input class="clr-ir-in1 clr-ir-in2" type="password" placeholder="验证码" />
              <input class="clr-ir-in1" type="password" placeholder="密码" />
              <label for class="clr-forget">忘记密码</label>
            </form>
            <p class="clr-ir-login clr-login">登录啦</p>
          </div>
        </div> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myarrlogin: [
        { name: "我是学生", data: "/sss/student" },
        { name: "我是讲师", data: "/sss/teacher" },
        { name: "我是HR", data: "/sss/hr" }
      ],
      myarrico: ["touxiang", "auth", "ai-set"],
      icon: 0,
      ic: 0,
      isactive: true,
      a: 0
    };
  },
  methods: {
    classlogin: function(val) {
      this.icon = val;
    },
    wechat: function(va) {
      this.a = va;
    }
  }
};
</script>
<style lang="less">
@import "../icon/iconfont.css";
.clearfix::after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.classbody {
  width: 1400px;
  margin: 0 auto;
}
.classlogin-left {
  float: left;
  .cll-pic {
    width: 500px;
    height: 800px;
  }
}
.classlogin-right {
background-color: #f9f9f9;
  float: left;
  width: 900px;
  height: 800px;
  position: relative;
  .clr-item {
    position: absolute;
    width: 640px;
    top: 50%;
    transform: translateY(-50%);
    left: -110px;
  }
  .clr-itemleft {
    float: left;
  }
}
.clr-tab1 {
  width: 110px;
  height: 120px;
  background-color: #202421;
  text-align: center;
  padding-top: 50px;
  box-sizing: border-box;
  color: #fff;
}
.activelogin {
  height: 230px;
  background-color: #adc700;
}
// .clr-itemright {
//     // background-color: #fff;
//   width: 522px;
//   height: 470px;
//   padding-bottom: 18px;
//   float: left;
//   box-sizing: border-box;
//   border: 1px solid #eee;
//   box-shadow: 2px 1px 15px 0px #999;

//   //   box-shadow: 0px 1px 1px 2px #999;
//   //   box-shadow: 0px 1px 1px 2px #999;
//   .clr-ir-out {
//     padding: 60px 60px 25px 60px;
//     .clr-t {
//       text-align: center;
//       padding-bottom: 5px;
//       border-bottom: 2px solid #ccc;
//     }
//     .clr-ir-t {
//       .clr-ir-t1 {
//         width: 200px;
//         display: inline-block;
//         color: #7c8495;
//         border-bottom: 2px solid #eeeeee;
//         padding-bottom: 12px;
//         text-align: center;
//       }
//       .activeclr {
//         color: #adc600;
//         border-bottom: 2px solid #adc700;
//       }
//     }
//     .clr-ir-in {
//       margin-top: 55px;
//       position: relative;
//       .clr-ir-in1 {
//         width: 400px;
//         font-size: 20px;
//         border: none;
//         outline: none;
//         display: block;
//         margin-top: 10px;
//         padding-bottom: 8px;
//         border-bottom: 1px solid #eeeeee;
//       }
//       .clr-ir-in2 {
//         margin-bottom: 55px;
//       }
//       .clr-forget {
//         position: absolute;
//         top: 0;
//         right: 0;
//         color: #adc700;
//       }
//     }
//     .clr-ir-forget {
//       padding-top: 10px;
//       color: #999;
//       margin-bottom: 10px;
//       text-align: right;
//     }
//     .clr-ir-login {
//       width: 400px;
//       background: #adc700;
//       text-align: center;
//       border-radius: 20px;
//       font-size: 20px;
//       color: #fff;
//       padding: 15px 0px;
//     }
//     .clr-lote {
//       margin-top: 70px;
//     }
//     .clr-login{
//         margin-top: 30px;
//     }
//     .clr-ir-reg {
//       padding-top: 25px;
//       color: #999;
//       font-size: 20px;
//       text-align: center;
//       .clr-ir-reg2 {
//         color: #adc700;
//         padding-left: 10px;
//       }
//     }
//   }
// }
</style>