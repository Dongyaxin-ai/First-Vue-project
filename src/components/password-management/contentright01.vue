<template>

    <div class="content-right01 clearfix">
        <p class="login01 tong">登录密码</p>
      <div class="lele">
        
        <div class="xian"></div>
        <p class="tong">
          <label for="">原密码:</label>
          <input class="shu" type="password" placeholder="请输入您原来的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您原来的密码'" />
        </p>
        <p class="tong">
          <label for="">新密码：</label>
          <input class="shu" type="password" placeholder="请输入您新的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您新的密码'" />
        </p>
        <p class="tong">
          <label for="">确认密码：</label>
          <input class="shu" type="pssword" placeholder="请再次确认您新的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请再次确认您新的密码'" />
        </p>
        <div class="sub1">
          <button class="sub1-1">确认修改</button>
          <button class="sub1-2">取消修改</button>
        </div>
      </div>
    </div>

</template>

<script>
export default {};
</script>
<style lang="less">
label {
    cursor: pointer;
    display: inline-block;
    padding: 3px 6px;
    text-align: right;
    width: 150px;
    vertical-align: top;
}
.content-right01 {
  margin: 30px 0px 0px 0px;
  width: 750px;
  height: 600px;
  background-color: #fff;
  float: left;  
  .lele {
      float: left;
      width: 485px;
  }
  .login01 {
      width: 160px;
    font-size: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
  }
  .xian {
      height: 1px;
      width: 740px;
      border-bottom: 1px solid #999;
  }
  .tong {
    padding-top: 50px;
    .shu {
        height: 30px;
        width: 300px;
        font-size: inherit;
        text-indent: 15px;
    }
  }
  .sub1 {
    margin-top: 35px;
    padding-left: 140px;
    .sub1-1 {
      background-color: #00aaff;
      width: 100px;
      padding: 5px 0;
      margin-right: 50px;
      border-radius: 10px;
      border: 1px solid #eee;
      outline: none;
      cursor: pointer;
    }
    .sub1-2 {
      background-color: #ffffff;
      width: 100px;
      padding: 5px 0;
      border-radius: 10px;
      border: 1px solid #999;
      outline: none;
      cursor: pointer;
    }
  }
}
</style>