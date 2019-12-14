<template>
  <div class="proveresult">
    <div class="p-r-out clearfix">
      <div class="pr">
        <div class="xiaxian">
            <div class="pr-pic">
          <img class="pr-pic-tu" src="@/assets/image/id.png" alt />
          <p>
            <span class="pr-pic-ren">身份证（正面）</span>
            <span class="pr-pic-ren prte">【认证失败】</span>
          </p>
        </div>
        <div class="pr-pic">
          <img class="pr-pic-tu" src="@/assets/image/id.png" alt />
          <p>
            <span class="pr-pic-ren">身份证（正面）</span>
            <span class="pr-pic-ren prte">【认证失败】</span>
          </p>
        </div>
        <div class="pr-pic-bot">
          <p>请上传真实的身份证信息（正面）</p>
          <p class="p-b-last">照片要四角对齐，如有模糊、反光、太暗、有遮挡，则不予认证</p>
        </div>
        </div>
        <div class="pr-pic ppte">
          <img class="pr-pic-tu" src="@/assets/image/id.png" alt />
          <p>
            <span class="pr-pic-ren">身份证（正面）</span>
            <span class="pr-pic-ren prte">【认证失败】</span>
          </p>
        </div>
        <div class="pr-pic-bot">
          <p>请上传真实的身份证信息（正面）</p>
          <p class="p-b-last">照片要四角对齐，如有模糊、反光、太暗、有遮挡，则不予认证</p>
        </div>
      </div>
      <div class="pr-r">
        <div class="pr-r-out">
          <p class="p-r-u-t">个人简介</p>
          <textarea class="p-r-u-con" name id cols="30" rows="10">
              词调当以北宋京都之沁园为名。此调以苏词为正体，
              作者极众。换头曲。前段自第四句、
              后段自第三句起句式相同，“渐”“有”为领字，
              领以下四个四字句，可两句为一对偶，可四句为两个对偶
              前两句对偶，后两句不对偶，但以对偶为工。
              继四四七句式，两个四字句可对偶。前段首三个四字句，
              可于第一、二句为对偶。此调四字句为主，多用对偶，
              配以八字、七字、六字、五字等句，用平韵，
              调势活泼生动，可平可仄之字极多，较为自由
              ，有和婉协谐而流畅之特点，适用于言志、议论、谐谑、
              叙事、酬赠、祝颂等题材。
              此调名篇极多，可细细体味其语势与对偶及句法特点。
          </textarea>
          <div class="p-r-u-sub">
            <button class="p-r-u-sub1">确认修改</button>
            <button class="p-r-u-sub1 p-r-u-sub2">取消修改</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
.proveresult {
  width: 840px;
  height: 600px;
  float: left;
  box-sizing: border-box;
}
.p-r-out {
  float: left;
  margin-top: 30px;
  background-color: #fff;
  .pr {
    float: left;
    width: 450px;
    padding: 30px 10px 30px 10px;
    box-sizing: border-box;
    border-right: 1px solid #f6f6f6;
    .pr-pic {
      width: 214px;
      display: inline-block;
      text-align: center;
      .pr-pic-tu {
        width: 160px;
        height: 120px;
      }
      .pr-pic-ren {
        font-size: 14px;
        color: #999;
        
      }
      .prte {
        color: orangered;
      }
    }
  }
  .ppte {
    padding-top: 40px;
    margin-left: 50%;
    transform: translate(-50%);
  }
}
.pr-r {
    width: 360px;
}
.pr-pic-bot {
  color: #999;
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
  .p-b-last {
    padding-top: 5px;
  }
}

.xiaxian {
    border-bottom: 1px solid #f6f6f6;
    padding-bottom: 40px;
}
 .pr-r {
      float: left;
      margin-left: 20px;
      .pr-r-out {
        padding: 20px;
      .p-r-u-t {
        padding-bottom: 25px;
      }
      .p-r-u-con {
        width: 320px;
        height: 430px;
        outline: none;
        font-size: 16px;
        box-sizing: border-box;
        padding: 16px;
      }
     
      }
    }
</style>