<template>
    <div class="qaclassright">
        <!-- top -->
        <qaclassrighttop></qaclassrighttop>
        <!-- bottom -->
        <router-view></router-view>
    </div>
</template>
<script>
import qaclassrighttop from './qaclassrighttop';
export default {
    components: {
        qaclassrighttop,
    }
}
</script>
<style lang="less">
    .qaclassright {
        float: left;
        width: 840px;
        height: 600px;
        background-color: #fff;
        margin-top: 30px;
    }
</style>