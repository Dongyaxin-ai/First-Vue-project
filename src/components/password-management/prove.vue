<template>
  <div class="sfz">
    <div class="sfz-quanju clearfix">
      <div class="rl">
        <div class="rl-pic clearfix">
          <div class="pic">
            <img class="picc" src="@/assets/image/id.png" alt />
            <p class="shenfen">
              <span class="sf">身份证（正面）</span>
              <span class="sf sfte">【未认证】</span>
            </p>
          </div>
          <div class="pic">
            <img class="picc" src="@/assets/image/id.png" alt />
            <p class="shenfen">
              <span class="sf">身份证（反面）</span>
              <span class="sf sfte">【未认证】</span>
            </p>
          </div>

          <p class="sf-det">请上传真实的身份证信息(正面)</p>
          <p class="sf-det">照片要四角对齐，如有模糊，反光，太暗，有遮挡，则不予认证</p>
        </div>
        <div class="pic pic-te">
          <img class="picc" src="@/assets/image/id.png" alt />
          <p class="shenfen">
            <span class="sf">身份证（正面）</span>
            <span class="sf sfte">【未认证】</span>
          </p>
        </div>
        <p class="sf-det">请上传真实的身份证信息(正面)</p>
        <p class="sf-det">照片要四角对齐，如有模糊，反光，太暗，有遮挡，则不予认证</p>
      </div>

      <div class="rr">
        <div class="rr-quanju">
          <p class="geren clearfix">
            个人简介
            <span @click="edittext" v-show="!isshow" class="geren-bj">编辑</span>
          </p>
          <textarea :class="isshow?'border':''" v-model="item" class="prove-wenben" name id cols="30" rows="10"></textarea>
          <div  v-show="isshow" class="p-r-u-sub">
            <button @click="confirm" class="p-r-u-sub1">确认修改</button>
            <button @click="cancel" class="p-r-u-sub1 p-r-u-sub2">取消修改</button>
          </div>
        </div>
      </div>
    </div>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "12月6日，双柳街道办事处相关负责人回复上游新闻记者称，街道办高度重视此事，目前双柳派出所民警已介入调查，街道办呼吁拔了萝卜的人应主动联系陈柏林，商谈赔偿事宜。12月6日，双柳街道办事处相关负责人回复上游新闻记者称，街道办高度重视此事，目前双柳派出所民警已介入调查，街道办呼吁拔了萝卜的人应主动联系陈柏林 ，商谈赔偿事宜。 12月6日，双柳街道办事处相关负责人回复上游新闻记者称， 街道办高度重视此事，目前双柳派出所民警已介入调查，街道办呼吁拔了萝卜的人应主动联系陈柏林，商谈赔偿事宜。12月6日，双柳街道办事处相关负责人回复上游新闻记者称， 街道办高度重视此事，目前双柳派出所民警已介入调查，街道办呼吁拔了萝卜的人应主动联系陈柏林 ，商谈赔偿事宜。",
      isshow: false,

    };
  },
  methods: {
    edittext: function() {
      this.isshow = true;
    },
    confirm: function() {
      this.isshow = false;
    },
    cancel: function() {
      this.isshow = true;
    }
  }
};
</script>
<style lang="less">
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.rl {
  float: left;
  width: 450px;
  padding-bottom: 30px;
  padding: 0px 20px 30px;
}
.sfz {
  float: left;
  width: 840px;
  .sfz-quanju {
    margin-top: 30px;
    background-color: #fff;
  }
  .rl-pic {
    padding: 20px 0px;
    .sf-det {
      color: #999;
      font-size: 14px;
      text-align: center;
      padding-top: 10px;
    }
  }
}
.pic {
  width: 200px;
  height: 150px;
  padding: 11px;
  display: inline-block;
  text-align: center;
  .picc {
    width: 160px;
    height: 120px;
  }
  .shenfen {
    padding-top: 10px;
    .sf {
      color: #999;
      font-size: 14px;
      text-align: center;
    }
    .sfte {
      color: orangered;
    }
  }
}
.pic-te {
  margin-left: 50%;
  transform: translate(-50%);
  padding-top: 80px;
}
.sf-det {
  color: #999;
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
}

.rr {
  float: left;
  width: 340px;
  margin: 0px 0px 0px 10px;
  .rr-quanju {
    padding: 10px;
    .geren {
      padding: 5px;
      margin-bottom: 20px;
      color: black;
      font-size: 18px;
      .geren-bj {
        float: right;
        font-size: 20px;
        color: #00aaff;
      }
    }
    .prove-wenben {
      width: 325px;
      height: 400px;
      border: none;
      outline: none;
      padding: 5px;
      box-sizing: border-box;
      font-size: 16px;
    }
    .border {
      border:1px solid #ccc;
    }
  }
   .p-r-u-sub {
        padding-top: 30px;
        .p-r-u-sub1 {
          width: 140px;
          height: 40px;
          background-color: #00aaff;
          text-align: center;
          border-radius: 8px;
          outline: none;
        }
        .p-r-u-sub2 {
          background-color: #fff;
          margin-left: 20px;
        }
      }
}
</style>