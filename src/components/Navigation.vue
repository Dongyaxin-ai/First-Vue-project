<template>
  <div id="na">
    <div class="bc">
      <div class="top clearfix">
        <img class="na0" src="@/assets/image/index2.png" alt />
        <div class="top-right">
          <img class="title" src="@/assets/image/person-center-title.png" alt />
          <span class="na1">罗密欧</span>
          <span class="iconfont icon-arrow-down te"></span>
        </div>
      </div>
    </div>

    <div class="tabs wrapper clearfix">
      <router-link @click.native="mycenter" to="/sss" class="tabs-left">My Center</router-link>
      <p class="tabs-middle">
        <router-link
          :to="item.data"
          class="aa"
          @click.native="chumo(index)"
          :class="$store.state.count == index ? 'active' : ''"
          v-for="(item,index) of $store.state.myarr"
          :key="index"
        >{{ item.clas }}</router-link>
      </p>
      <span>{{$store.state.count}}</span>
      <p class="tabs-right">
        <span class="iconfont icon-dianzan"></span>
        添加课程
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "navv",
  props: {
    msg: String
  },
  data() {
    return {
      conico: 0,
      // myarr1: ["personal-center", "pasword-management"]
    };
  },
  methods: {
    chumo: function(val) {
      this.$store.commit("activeadd", val);
      
    },
   mycenter: function() {
    this.$store.state.count = -1;
  }
  },
  mounted() {
    let a = this.$route.path.substring((this.$route.path).indexOf("/") + 1);
    let b = '/' + a.slice(0,3);
     for (const item of this.$store.state.myarr.entries()) {
       if(item[1].data == b)  {
        this.$store.state.count = item[0];
         
       }
     }
    
  },
};
</script>
<style lang="less">
@import "../components/icon/iconfont.css";
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: black;
}
.active {
  color: #00aaff;
  border-bottom: 2px solid #00aaff;
}
.clearfix::after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}

#na {
  .bc {
    background-color: #333333;
    .top {
      width: 1200px;
      margin: 0 auto;
    }
  }

  .na0 {
    float: left;
    display: block;
    width: 20%;
    padding: 10px 0;
  }
  .na1 {
    display: inline-block;
    color: #fff;
    margin-left: 10px;
    position: relative;
    top: -22px;
  }
  .te {
    color: #fff;
    margin-left: 10px;
    position: relative;
    top: -22px;
  }

  .top-right {
    float: right;
    .title {
      padding-top: 13px;
      width: 60px;
      height: 60px;
      border-radius: 30%;
    }
  }
  .tabs {
    padding: 50px 0;
    .tabs-left {
      float: left;
      color: #00aaff;
      font-size: 38px;
    }
    .tabs-middle {
      float: left;
      .aa {
        font-size: 25px;
        margin-left: 100px;
        padding: 50px 0;
      }
    }
    .tabs-right {
      float: right;
      font-size: 25px;
      margin-right: 10px;
      width: 140px;
      padding: 5px 15px;
      border: 1px solid #999;
      color: #40bfff;
      border-radius: 20px;
      text-align: center;
    }
  }
}
</style>