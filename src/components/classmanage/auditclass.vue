<template>
  <div id="auditclass">
    <div class="auditclass-out">
      <div class="ac-title">
        <router-link @click.native="gaol(1)" to="/bbb/overclass">
          <p class="ac-t1">
            <span :class="isdis === 1?'changecolor':''" class="iconfont icon-xiaoxi-chenggong cg"></span>
            <span class="yi">已发布课程</span>
          </p>
        </router-link>
        <router-link @click.native="gaol(2)" to="/bbb/auditclass">
          <p class="ac-t1">
            <span :class="isdis === 2?'changecolor':''" class="iconfont icon-xiaoxi-chenggong cg"></span>
            <span class="yi">审核中课程</span>
          </p>
        </router-link>
        <router-link @click.native="gaol(3)" to="/bbb/failaudit">
          <p class="ac-t1">
            <span :class="isdis === 3?'changecolor':''" class="iconfont icon-xiaoxi-chenggong cg"></span>
            <span class="yi">未通过审核课程</span>
          </p>
        </router-link>
      </div>
      <div class="ac-items clearfix">
        <img class="ac-i-p" src="@/assets/image/auditclass1.png" alt />
        <div class="ac-con clearfix">
          <div class="ac-con0">
            <p class="ac-con1">显露您的实力——面试</p>
            <p class="ac-con2">上传时间：3月23日 15:43</p>
            <p class="ac-con3">免费</p>
          </div>
          <p class="ac-audit">修改课程</p>
        </div>
      </div>
      <div class="ac-items clearfix">
        <img class="ac-i-p" src="@/assets/image/auditclass2.png" alt />
        <div class="ac-con clearfix">
          <div class="ac-con0">
            <p class="ac-con1">显露您的实力——面试</p>
            <p class="ac-con2">上传时间：3月23日 15:43</p>
            <p class="ac-con3">￥199</p>
          </div>
          <p class="ac-audit">修改课程</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isdis: 2
    }
  },
  methods: {
    gaol: function(val) {
      this.isdis = val;
    }
  }
};
</script>
<style lang="less">
.clearfix::after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
#auditclass {
  float: left;
  .auditclass-out {
    margin-top: 30px;
    width: 840px;
    height: 600px;
    background-color: #fff;
  }
}
.yi {
  font-size: 20px;
}
.changecolor {
  color: #0af;
}
.ac-title {
  padding: 40px 0px 40px 30px;
  border-bottom: 1px solid #eeeeee;
  .ac-t1 {
    margin-left: 40px;
  }
}
.ac-items {
  padding: 50px 0px 40px 30px;
  .ac-i-p {
    width: 190px;
    height: 120px;
    float: left;
  }
  .ac-con {
    margin-left: 215px;
    .ac-con0 {
      float: left;
    }
    .ac-con1 {
      padding-top: 16px;
      font-size: 16px;
    }
    .ac-con2 {
      padding-top: 16px;
      color: #999;
      font-size: 14px;
    }
    .ac-con3 {
      padding: 16px 0px;
      font-size: 16px;
      color: #00aaff;
    }
  }
  .ac-audit {
    font-size: 14px;
    color: #00aaff;
    text-align: center;
    padding: 10px 50px;
    border-radius: 20px;
    float: right;
    box-sizing: border-box;
    border: 1px solid #eeeeee;
    top: 50%;
    margin-right: 45px;
    transform: translateY(50%);
  }
}
.ac-t1 {
  position: relative;
  margin-top: 3px;
  display: inline-block;
}
.cg {
  font-size: 25px;
  margin-right: 10px;
}
.at {
  padding: 3px 10px;
  vertical-align: top;
  text-align: left;
  display: inline;
}
.active3 {
  background: #00aaff;
}
</style>