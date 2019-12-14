<template>
  <div>
    <navigation></navigation>
    <div class="quanju">
      <div class="zhong clear">
        <pccl></pccl>
        <pccr></pccr>
      </div>
    </div>

    <foot></foot>
  </div>
</template>

<script>
import navigation from "../Navigation";
import pccl from "../personal-center/person-center-content-left";
import pccr from "../personal-center/person-center-content-right";
import foot from "../foot";
export default {
  name: "personcenter",
  components: {
    navigation,
    pccl,
    pccr,
    foot
  }
};
</script>

<style lang="less">
.clear::after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.zhong {
  width: 1200px;
  margin: 0 auto;
}
</style>