<template>
  <div id="phone-password" class="clearfix">
    <!-- 通过手机号密码登录 -->
    <div class="clr-itemrightee">
      <div class="clr-ir-out clearfix">
        <p class="clr-ir-t">
          <span @click="wechat(0)" :class="a == 0 ? 'activeclr':''" class="clr-ir-t1">账号登录</span>
          <span @click="wechat(1)" :class="a == 1 ? 'activeclr':''" class="clr-ir-t1">微信登录</span>
        </p>
        <div class="clr-ir-in">
          <input v-model="phone" class="clr-ir-in1 clr-ir-in2" type="text" placeholder="手机号" />
          <input v-model="pass" class="clr-ir-in1" type="password" placeholder="密码" />
        </div>
        <router-link to='/phoneLoginer'>
          <p class="clr-ir-forget">忘记密码</p>
        </router-link>
        <div @click="denglu">
          <p class="clr-ir-login clr-login">登录啦</p>
        </div>

        <p class="clr-ir-reg">
          <span class="clr-ir-reg1">还没有账号？&nbsp;请</span>
          <router-link to="/phoneRegister">
            <span class="clr-ir-reg2">注册</span>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "phone-password",
  data() {
    return {
      aaa:'',
      a: 0,
      phone: '',
      pass: '',
      arr: [{ip:'15037510578',pad:'dyx12345678'}],
    };
  },
  methods: {
    denglu: function() {
      for (const item of this.arr) {
        if(this.phone === item.ip && this.pass === item.pad) {
          this.$router.push({path:'/sss'})
        }else {
          alert('账号或者密码输入错误');
        }
      }
    },
    wechat: function(va) {
      this.a = va;
    },
   

  }
};
</script>
<style lang="less">
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}
#phone-password {
  .clr-itemrightee {
    background-color: #fff;
    width: 522px;
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