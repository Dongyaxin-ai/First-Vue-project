<template>
  <div>
    <div class="q-c-r-t-out clearfix">
      <router-link @click.native="tiao" to="/ccc/qatiwen/qcrbq">
        <p class="qcrt-tab1" type="radio" id="tab1">
          <span :class="discolor?'changecolor':''" class="iconfont icon-xiaoxi-chenggong cg "></span>
          <span class="dai">全部</span>
        </p>
      </router-link>
      <router-link @click.native="tiao" to="/ccc/qatiwen/qcrbd">
        <p class="qcrt-tab1" type="radio" id="tab1">
          <span :class="!discolor?'changecolor':''"  class="iconfont icon-xiaoxi-chenggong cg"></span>
          <span class="dai">待处理</span>
        </p>
      </router-link>
      <p class="qcrt-q">我要提问</p>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            discolor: true
        }
    },
    methods: {
        tiao: function() {
            if(this.discolor == true) {
                this.discolor = false;
            }else {
                this.discolor = true;
            }
        }
    }
};
</script>
<style lang="less">
.changecolor {
    color: #0af;
}
.q-c-r-t-out {
  padding: 40px 40px 40px 30px;
  box-sizing: border-box;
  border: 1px solid #eeeeee;

  .qcrt-tab1 {
    display: inline-block;

    margin-right: 80px;
    .dai {
      font-size: 20px;
    }
    .cg {
      display: inline-block;
      line-height: 30px;
      font-size: 25px;
      margin-right: 10px;
    }
  }

  .qcrt-t1 {
    margin-left: 5px;
    padding: 0;
    text-align: left;
  }
  .qcrt-q {
    float: right;
    background-color: #00aaff;
    color: #fff;
    padding: 10px 50px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>