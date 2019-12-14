<template>
  <div>
    <navigation></navigation>
    <div class="quanju">
      <div class="passzhong">
        <contentleft></contentleft>
        <router-view></router-view>
      </div>
    </div>

    <foot></foot>
  </div>
</template>

<script>
import navigation from "../Navigation";
import contentleft from "../password-management/contentleft";
import foot from "../foot";
export default {
  name: "message",
  components: {
    navigation,
    contentleft,
    foot
  }
};
</script>
<style lang="less">
.passzhong {
  overflow: hidden;
  margin: 0px auto 20px;
  width: 1200px;
}
.quanju {
  background-color: #f4f4f4;
}
</style>