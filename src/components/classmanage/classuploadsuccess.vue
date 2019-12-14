<template>
  <div id="classuploadsuccess">
    <div class="uploadsuccess-out">
      <div class="u-s-top">
        <p class="u-s-t1">全民股东_201666661223.mp4</p>
        <p class="u-s-t2">
          <span class="t2-1"></span>
          <span class="t2-2">√</span>
        </p>
        <p class="u-s-t3">上传成功100%</p>
      </div>
      <div class="u-s-bottom">
        <img class="u-s-b1" src="@/assets/image/successico.png" alt />
        <p class="u-s-b2">保存成功，等待审核</p>
        <p class="u-s-b3">课程上传成功，正在进行人工审核，我们会在24小时后告知您审核结果，请耐心等候。</p>
        <router-link to="/bbb/reviewupload"><button class="u-s-b4">继续上传</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
#classuploadsuccess {
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
      padding: 30px 0px 0px 30px;
      
      height: 150px;
      .u-s-t1 {
        font-size: 18px;
        padding-bottom: 10px;
      }
      .u-s-t2 {
        padding-bottom: 20px;
        
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
    }
    .u-s-bottom {
      padding-top: 80px;
      text-align: center;
      
      .u-s-b1 {
        width: 90px;
        height: 90px;
        padding-bottom: 20px;
        
      }
      .u-s-b2 {
          font-size: 22px;
          padding-bottom: 15px;
        }
        .u-s-b3 {
          width: 350px;
          font-size: 16px;
          color: #999;
          padding-bottom: 40px;
          margin: 0 auto;
        }
        .u-s-b4 {
          width: 150px;
          height: 45px;
          color: #fff;
          text-align: center;
          background-color: #00aaff;
          border-radius: 10px;
          outline: none;
        }
    }
  }
}
</style>