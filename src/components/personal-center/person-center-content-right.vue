<template>
  <div class="person-center-out">
    <div class="person-center-content-right">
      <div class="person-center-righttop clearfix">
        <div class="person-center-rtl">
          <div class="p-c-out">
            <p class="p-c-fir">我上传的课程</p>
            <p class="p-c-sec">
              <span class="p-c-sec-1">3</span>
              <span class="p-c-sec-2">个</span>
            </p>
            <p class="p-c-third">查看详情 ></p>
          </div>
        </div>
        <div class="person-center-rtl person-center-rtr-te">
          <div class="p-c-out">
            <p class="p-c-fir">我的问答</p>
            <p class="p-c-sec">
              <span class="p-c-sec-1">3</span>
              <span class="p-c-sec-2">个</span>
            </p>
            <p class="p-c-third">查看详情 ></p>
          </div>
        </div>
      </div>
    </div>
    <div class="person-center-content-right-bottom">
      <div class="p-c-out">
        <div class="p-c-c-right-b">
          <div class="p-c-rb1 clearfix">
            <p class="p-c-rb11">最新学员</p>
            <p class="p-c-rb12">一周内新增25名学员</p>
          </div>
          <ul class="clearfix">
            <li class="p-c-rb2" v-for="(item,index) of myarr3" :key="index">
              <img class="p-c-rb21" :src="item" alt />
              <p class="p-c-rb22">{{ myarr4[index]}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myarr3: [
        require("@/assets/image/person-center01.png"),
        require("@/assets/image/person-center02.png"),
        require("@/assets/image/person-center03.png"),
        require("@/assets/image/person-center04.png"),
        require("@/assets/image/person-center05.png")
      ],
      myarr4: ["杨志", "杨静静", "吕子秋", "吕强", "郭达"]
    };
  }
};
</script>

<style lang="less">
li {
  list-style-type: none;
}
.clearfix::after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.person-center-out {
  float: left;
  width: 700px;
  margin-left: 40px;
}
.person-center-content-right {
  width: 700px;
  .person-center-righttop {
    margin-top: 20px;
    .person-center-rtl {
      float: left;
      width: 320px;
      height: 300px;
      background: url("../../assets/image/bj1.png") no-repeat;
      background-size: 100% 100%;
      .p-c-out {
        margin-left: 20px;
      }
      .p-c-fir {
        font-size: 20px;
        margin-top: 20px;
      }
      .p-c-sec {
        margin-top: 20px;
        .p-c-sec-1 {
          font-size: 22px;
        }
        .pc-sec-2 {
          font-size: 16px;
        }
      }
      .p-c-third {
        margin-top: 20px;
        color: #999;
        font-size: 16px;
      }
    }

    .person-center-rtr-te {
      margin-left: 60px;
      float: left;
      width: 320px;
      height: 300px;
      background: url("../../assets/image/bj2.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
.person-center-content-right-bottom {
  
  background-color: #fff;
  .p-c-out {
    .p-c-c-right-b {
    padding: 22px;
  }
    margin: 30px 0px 20px 0px;
    .p-c-rb11 {
      float: left;
      color: black;
    }
    .p-c-rb12 {
      float: right;
      color: #999;
      margin-right: 30px;
    }
    .p-c-rb2 {
      float: left;
      margin: 30px 20px 0px 25px;

      .p-c-rb21 {
        width: 80px;
        height: 80px;
      }
      .p-c-rb22 {
        text-align: center;
        font-size: 16px;
        color: #999;
        margin-top: 10px;
      }
    }
  }
}
</style>