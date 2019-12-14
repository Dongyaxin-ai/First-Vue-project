<template>
  <div id="reviewupload">
    <div class="uploadsuccess-out">
      <div class="u-s-top">
        <p class="u-s-t1">全民股东_201666661223.mp4</p>
        <p class="u-s-t2">
          <span class="t2-1"></span>
          <span class="t2-2">√</span>
        </p>
        <p class="u-s-t3">上传成功100%</p>
        <p class="u-s-t4">重新上传</p>
      </div>
      <div class="u-s-bottom">
        <p class="u-s-b-item">
          <label for>标题</label>
          <input class="u-s-b1" type="text" placeholder="请输入课程分类" />
        </p>

        <p class="u-s-b-item">
          <label for>分类</label>
          <select class="u-s-b1">
            <option value="volvo">A</option>
            <option value="saab">B</option>
            <option value="opel">C</option>
            <option value="audi">D</option>
          </select>
        </p>
        <p class="u-s-b-item">
          <label for>课程介绍</label>
          <textarea class="u-s-b1 u-s-b2" type="text" placeholder="请输入课程介绍"></textarea>
        </p>
       <router-link to="/bbb/auditclass" ><button class="u-s-b3">保存信息</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
#reviewupload {
  margin-top: 30px;
  float: left;
  width: 840px;
  height: 600px;
  background-color: #fff;
  margin-right: 30px;
  box-sizing: border-box;
  .uploadsuccess-out {
    .u-s-top {
      background-color: #fafeff;
      padding: 20px 0px 0px 30px;

      height: 150px;
      .u-s-t1 {
        font-size: 18px;
        padding-bottom: 10px;
      }
      .u-s-t2 {
        padding-bottom: 10px;

        .t2-1 {
          display: inline-block;
          width: 700px;
          height: 5px;
          background-color: #00aaff;
        }
        .t2-2 {
          display: inline-block;
          margin-left: 10px;
          padding-left: 5px;
          width: 15px;
          height: 20px;
          background-color: #00aaff;
          border-radius: 50%;
        }
      }
      .u-s-t3 {
        font-size: 14px;
        color: #999;
      }
      .u-s-t4 {
        float: right;
        margin-right: 10px;
        color: #00aaff;
        font-size: 16px;
      }
    }
    
    .u-s-bottom {
      padding-top: 50px;
      .u-s-b-item {
        padding-bottom: 20px;
        label {
          width: 150px;
          padding: 3px 6px;
          vertical-align: top;
          text-align: right;
        }
        .u-s-b1 {
          width: 600px;
          height: 45px;
          text-indent: 20px;
          outline: none;
          
        }
        .u-s-b2 {
            height: 160px;
            box-sizing: border-box;
            padding: 10px 5px 10px;
        }
       
      }
       .u-s-b3 {
            padding: 10px;
            width: 150px;
            height: 45px;
            background-color: #00aaff;
            color: #fff;
            border-radius: 10px;
            outline: none;
            margin-left: 160px;
        }
    }
  }
}
</style>