<template>
  <div id="phone-code" class="clearfix">
    <!-- 通过手机号验证码登录 -->
    <div class="clr-itemrighte">
      <div class="clr-ir-out clearfix">
        <p class="clr-t">通过手机验证码登录</p>
        <form class="clr-ir-in">
          <input v-model="tel" class="clr-ir-in1 clr-ir-in2" type="text" placeholder="手机号" />
          <input v-model="yzm" class="clr-ir-in1" type="password" placeholder="密码" />
          <label @click="huoqu" for class="clr-forget">获取验证码</label>
        </form>
        <div @click="yzmm">
          <p class="clr-ir-login clr-login">登录啦</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "phone-code",
  data() {
    return {
      arr: [{ tel: "15037510582", yzm: "" }],
      tel: "",
      yzm: ""
    };
  },
  methods: {
    yzmm: function() {
      for (const item of this.arr) {
        if (this.tel == item.tel && this.yzm == item.yzm) {
          this.$router.push({ path: "/sss" });
        } else {
          alert("手机号或者验证码有误");
        }
      }
    },
    huoqu: function() {
      var bb = "";
      for (var i = 0; i < 4; i++) {
        bb += Math.floor(Math.random() * 10);
      }
      this.arr[0].yzm = bb;
      alert(bb);
    }
  }
};
</script>
<style lang="less">
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}
#phone-code {
  float: left;
  overflow: hidden;
  .clr-itemrighte {
    background-color: #fff;
    width: 522px;
    height: 470px;
    padding-bottom: 18px;
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
        display: block;
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