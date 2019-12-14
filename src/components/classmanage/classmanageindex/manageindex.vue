<template>
    <div>
        <Navigation></Navigation>
        <div class="quanju">
             <div class="clearfix classmiddle">
            <classmanagecontentleft></classmanagecontentleft>
            <router-view></router-view>
        </div>
        </div>
       
        <foot></foot>
    </div>
</template>

<script>
import Navigation from '../../Navigation';
import classmanagecontentleft from '../../classmanage/classmanagecontentleft';
import foot from '../../foot';
export default {
    name: 'classmange',
    components: {
        Navigation,
        classmanagecontentleft,
        foot
    }

}
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
    .classmiddle {
        width: 1200px;
        margin: 0 auto;
        background-color: #f4f4f4;
    }
</style>