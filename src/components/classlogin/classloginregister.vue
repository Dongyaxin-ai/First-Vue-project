<template>
  <div id="register" class="clearfix">
    <div class="clr-itemrighted">
      <div class="clr-ir-out clearfix">
        <p class="clr-t">通过手机号码注册</p>
        <form class="clr-ir-in">
          <input class="clr-ir-in1 clr-ir-in2" type="text" placeholder="手机号" />
          <input class="clr-ir-in1 clr-ir-in2" type="password" placeholder="验证码" />
          <input class="clr-ir-in1" type="password" placeholder="密码" />
          <label for class="clr-forget">获取验证码</label>
        </form>
        <router-link to="/">
          <p class="clr-ir-login clr-login">提交注册</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register"
};
</script>

<style lang="less">
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}
#register {
  .clr-itemrighted {
    width: 522px;
    background-color: #fff;
    height: 470px;
    padding-bottom: 18px;
    float: left;
    box-sizing: border-box;
    border: 1px solid #eee;
    box-shadow: 2px 1px 15px 0px #999;
    .clr-ir-out {
      padding: 60px 60px 25px 60px;
      .clr-t {
        text-align: center;
        padding-bottom: 5px;
        border-bottom: 2px solid #ccc;
      }
      .clr-ir-t {
        .clr-ir-t1 {
          width: 200px;
          display: inline-block;
          color: #7c8495;
          border-bottom: 2px solid #eeeeee;
          padding-bottom: 12px;
          text-align: center;
        }
        .activeclr {
          color: #adc600;
          border-bottom: 2px solid #adc700;
        }
      }
      .clr-ir-in {
        margin-top: 55px;
        position: relative;
        .clr-ir-in1 {
          width: 400px;
          font-size: 20px;
          border: none;
          outline: none;
          display: block;
          margin-top: 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid #eeeeee;
        }
        .clr-ir-in2 {
          margin-bottom: 55px;
        }
        .clr-forget {
          position: absolute;
          top: 0;
          right: 0;
          color: #adc700;
        }
      }
      .clr-ir-forget {
        padding-top: 10px;
        color: #999;
        margin-bottom: 10px;
        text-align: right;
      }
      .clr-ir-login {
        width: 400px;
        background: #adc700;
        text-align: center;
        border-radius: 20px;
        font-size: 20px;
        color: #fff;
        padding: 15px 0px;
      }
      .clr-lote {
        margin-top: 70px;
      }
      .clr-login {
        margin-top: 30px;
      }
      .clr-ir-reg {
        padding-top: 25px;
        color: #999;
        font-size: 20px;
        text-align: center;
        .clr-ir-reg2 {
          color: #adc700;
          padding-left: 10px;
        }
      }
    }
  }
}
</style>