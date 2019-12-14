<template>
    <div>
        <Navigation></Navigation>
        <div class="quanju">
            <div class="passzhong clearfix">
            <qaclassleft></qaclassleft>
            <qaclassright></qaclassright>
        </div>
        </div>
        
        <foot></foot>
    </div>
</template>
<script>
import Navigation from '../Navigation';
import qaclassleft from './qaclassleft';
import qaclassright from './qaclassright';
import foot from '../foot';
export default {
    components: {
        Navigation,
        qaclassleft,
        qaclassright,
        foot
    }
}
</script>
<style lang="less">
    
</style>