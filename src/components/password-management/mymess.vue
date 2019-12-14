<template>
  <div class="mess-right">
    <div class="my-mess">
      <form action>
        <p class="pp">
          <label for>姓名</label>
          <input class="inmess" type="text" />
        </p>
        
        <p class="pp">
          <label for>出生日期</label>
          <input class="inmess" type="text" placeholder="本项不可输入，填完身份证信息后自动同步出生日期" />
        </p>
        <p class="pp">
          <label for>性别</label>
          <input class="inmess" type="text" placeholder="男" />
        </p>

        <div class="iphone">
          <label for>手机号</label>
          <input class="iphone-inmess1" type="text" />
          <button class="iphone-inmess2">获取验证码</button>
        </div>

        <p class="pp">
          <label for>邮箱</label>
          <input class="inmess" type="text" />
        </p>
        <p class="pp">
          <label for>身份证</label>
          <input class="inmess" type="text" />
        </p>
        <p class="pp">
          <label for>微信号</label>
          <input class="inmess" type="text" />
        </p>
        <p class="pp">
          <label for>ＱＱ号</label>
          <input class="inmess" type="text" />
        </p>
      </form>
      <div class="my-mess-tijiao">
        <button class="mess-tijiao1">保存信息</button>
        <button class="mess-tijiao2">取消修改</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messge"
};
</script>

<style lang="less">
.mess-right {
  float: left;
  .my-mess {
    overflow: hidden;
    width: 750px;
    height: 600px;
    margin: 30px 0px 20px 20px;
    background-color: #fff;
    
    label {
      cursor: pointer;
      display: inline-block;
      padding: 3px 6px;
      text-align: right;
      width: 150px;
      vertical-align: top;
    }
    .inmess {
      display: inline-block;
      width: 350px;
      height: 35px;
      outline: none;
    }
  }
}
.pp {
  margin-top: 20px;
}
.iphone {
  width: 516px;
  display: inline-block;
  margin-top: 20px;
  // background-color: pink;
  .iphone-inmess1 {
    width: 250px;
    height: 35px;
  }
  .iphone-inmess2 {
    width: 100px;
    height: 40px;
  }
}
.my-mess-tijiao {
  text-align: center;
  margin-top: 30px;
  .mess-tijiao1 {
    width: 100px;
    height: 35px;
    background-color: #00aaff;
    padding: 5px 5px;
    margin-right: 50px;
    outline: none;
  }
  .mess-tijiao2 {
    width: 100px;
    height: 35px;
    background-color: #fff;
    padding: 5px 5px;
    outline: none;
  }
}
</style>