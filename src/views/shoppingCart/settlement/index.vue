<template>
  <div class="main">
    <div class="headerSteps">
      <el-steps :active="active" finish-status="success">
        <el-step title="确认订单"></el-step>
        <el-step title="支付"></el-step>
        <el-step title="支付完成"></el-step>
      </el-steps>
    </div>
    <router-view @next="next"></router-view>
  </div>
</template>

<script>
export default {
  data() {
      return{
        active:0,
      }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active=0;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .headerSteps {
    margin: 20px 10% 20px 10%;
    width: 80%;
    /deep/.el-step__title.is-process {
      color: #666;
    }
  }
}
</style>