<template>
  <div class="messs-right">
    <div class="my-mess">
      <form action>
        <p @click="modify" v-show="!isxian" class="mymess-edit">编辑</p>
        <p class="pp" v-for="(item,index) of myarr1" :key="index">
          <label for>{{item}}</label>
          <input
            :class="isxian?'border':''"
            class="inmess"
            type="text"
            :disabled="isshow"
            v-model="myarr2[index]"
          />
        </p>
      </form>
      <div v-show="isxian" class="my-mess-tijiao">
        <button @click="queren" class="mess-tijiao1">保存信息</button>
        <button @click="quxiao" class="mess-tijiao2">取消修改</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bordershow: false,
      isshow: true,
      isxian: false,
      myarr1: [
        "姓名",
        "出生日期",
        "性别",
        "手机号",
        "邮箱",
        "身份证",
        "微信号",
        "ＱＱ号"
      ],
      myarr2: [
        "ldy",
        "1997-10-13",
        "男",
        "138xxxx5678",
        "110@XXXXXXqq.com",
        "4225678XXXX",
        "12345678",
        "12345678"
      ],
      myarr3: [
        "ldy",
        "1997-10-13",
        "男",
        "138xxxx5678",
        "110@XXXXXXqq.com",
        "4225678XXXX",
        "12345678",
        "12345678"
      ]
      // myarr3: [],
    };
  },
  methods: {
    modify: function() {
      this.isshow = false;
      this.isxian = true;
      
    },
    queren: function() {
      this.isshow = true;
      this.isxian = false;
      
    },
    quxiao: function() {
      this.myarr2 = this.myarr3;
      this.isxian = false;
      
    }
  }
};
</script>
<style lang="less">
.messs-right {
  float: left;
  .my-mess {
    padding-top: 30px;
    overflow: hidden;
    width: 750px;
    height: 600px;
    margin: 30px 0px 20px 20px;
    box-sizing: border-box;
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
      border: none;
      font-size: 20px;
      text-indent: 30px;
      background-color: #fff;
      margin-left: 10px;
      color: #ccc;
    }
    .border {
      border: 1px solid #ccc;
    }
  }
}
.pp {
  margin-top: 20px;
  box-sizing: border-box;
}
.mymess-edit {
  float: right;
  color: #0af;
  font-size: 20px;
  margin-right: 30px;
}
.iphone {
  width: 516px;
  display: inline-block;
  margin-top: 20px;
  // background-color: pink;
  .iphone-inmess11 {
    width: 250px;
    height: 35px;
    border: none;
    font-size: 20px;
    text-indent: 30px;
    background-color: #fff;
  }
  //   .iphone-inmess2 {
  //     width: 100px;
  //     height: 40px;
  //   }
}
.my-mess-tijiao {
  text-align: center;
  margin-top: 30px;
  .mess-tijiao1 {
    width: 100px;
    height: 35px;
    color: #fff;
    background-color: #0af;
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
// .my-mess-tijiao {
//   text-align: center;
//   margin-top: 30px;
//   .mess-tijiao1 {
//     width: 100px;
//     height: 35px;
//     background-color: #00aaff;
//     padding: 5px 5px;
//     margin-right: 50px;
//     outline: none;
//   }
//   .mess-tijiao2 {
//     width: 100px;
//     height: 35px;
//     background-color: #fff;
//     padding: 5px 5px;
//     outline: none;
//   }
// }
</style>