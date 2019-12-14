<template>
  <div>
    <div class="passzhong">
    <contentright01></contentright01>
    </div>
  </div>
</template>

<script>
import contentright01 from "../contentright01";
export default {
  name: "passwordmanagement",
  components: {
    contentright01,
  }
};
</script>

<style lang="less">
.passzhong {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}
</style>