<template>
    <div>
       <div class="loginhead-out clearfix">
            <div class="lh-1">
            <img class="lh-pic" src="@/assets/image/logintitle.png" alt="">
        </div>
        <p class="lh-2">
            <router-link to="/phoneRegister" class="lh-zhu">注册</router-link>
            <span class="lh-zhu">|</span>
            <router-link to="/" class="lh-zhu">登录</router-link>
        </p>
       </div>
 
   </div>
</template>
<script>
export default {
    
}
</script>

<style lang="less">
    .loginhead-out {
        width: 1200px;
        margin: 0 auto;
        padding: 20px 0px;
        .lh-1 {
            float: left;
            .lh-pic {
                width: 260px;
                height: 50px;
            }
        }
        .lh-2 {
            float: right;
            padding: 17px 0px;
            color: #999;
            font-size: 16px;
            .lh-zhu {
                padding-right: 5px;
            }
        }
    }
</style>