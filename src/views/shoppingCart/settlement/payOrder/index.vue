<template>
  <div class="main">
    <div class="prompt">
      <h5>订单提交成功，请您及时付款，以便尽快为您发货~~</h5>
      <div>
        请您在提交订单<span style="color: red">4小时</span
        >之内完成支付，超时订单会自动取消。订单号：142
      </div>
    </div>
    <div class="pay">
      <label>请选择支付平台</label>
      <div class="step-cont">
        <ul class="payType">
          <li class="select">
            <div>
              <img src="./images/pay2.jpg" />
            </div>
          </li>
          <li><img src="./images/pay3.jpg" /></li>
        </ul>
      </div>
       <div style="margin-top:30px;margin-bottom:30px">
            <img src="./images/ma.png"  style="width:170px"/>
        </div>
    </div>
    <button @click="toOK">跳转</button>
  </div>
</template>

<script>
export default {
    methods:{
        toOK(){
            this.$emit('next')
            this.$router.push('/settlement/payOk')
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
  width: 90%;
  margin-left: 5%;
  .prompt {
    div {
      font-size: 13px;
      font-weight: 500;
      margin-top: 10px;
    }
  }
  .pay {
    margin-top: 20px;
    .step-cont {
      margin: 20px 10px 12px 0;

      ul {
        font-size: 0;

        li {
          margin-right: 20px;
          display: inline-block;
          padding: 5px 20px;
          border: 1px solid #ddd;
          cursor: pointer;
          line-height: 18px;
        }
        .select {
          border: 2px solid #e1251b;
          background: url(../placeOrder/images/choosed.png) no-repeat;
          background-position: bottom right;
        }
      }
    }
  }
}
</style>