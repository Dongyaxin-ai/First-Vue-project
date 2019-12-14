<template>
  <div>
    <Navigation></Navigation>
    <div class="quanju">
      <div class="passzhong clearfix">
        <qaclassleft></qaclassleft>
        <router-view></router-view>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Navigation from "../Navigation";
import qaclassleft from "./qaclassleft";
import foot from "../foot";
export default {
  components: {
    Navigation,
    qaclassleft,
    foot
  }
};
</script>
<style lang="less">
</style>