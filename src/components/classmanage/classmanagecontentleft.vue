<template>
        <div id="classmanagecontentleft">
            <img class="tou" src="@/assets/image/person-center-title.png" alt="">
            <div class="content-left-tabs">     
                <router-link :to=item.data class="ren" @click.native="xuanfu0(index)" :class="con == index ? 'active1' : ''" v-for="(item,index) of myarr" :key="index" >
                    <span class="iconfont" :class="'icon-' + myarr1[index]"></span>
                    {{ item.name }}</router-link>
            </div>
        </div>
        
</template>

<script>

export default {
    name: 'classmanagecontentleft',
    components: {
    },
    data() {
        return {
            myarr: [{name:'我的课程',data: '/bbb/classupload'},{name:'我的活动',data: '/bbb/classacticity'}],
            myarr1: ['touxiang','auth','ai-set'],
            con: 0
        }
    },
    methods: {
        xuanfu0: function(val) {
            this.con = val;
            
        }
    }

}
</script>

<style lang="less">
    @import '../icon/iconfont.css';
    #classmanagecontentleft {
        float: left;
        width: 300px;
        height:600px;
        background-color: #fff;
        box-sizing: border-box;
        margin: 30px 30px 30px 0px;
        text-align: center;
        .ren {
        margin-top: 20px;
        display: block;
        font-size: 25px;
    }
    .active1 {
        color: aqua;
    }
    .content {
        background-color: #F4F4F4;
        width: 300px;
    }
        .tou {
            width: 100px;
            height: 100px;
            margin-top: 30px;
        }
        .content-left-tabs {
            margin-top: 60px;
    
        }
    }
</style>