<template>
  <div>
    <div class="main">
      <div class="adress orderOpiton">
        <svg-icon icon-class="edit"></svg-icon>
        <el-button
          type="text"
          size="small"
          style="margin-left: 10px; color: #8b1d1d"
          >选择其他收货地址</el-button
        >
        <el-descriptions title="收件人地址">
          <el-descriptions-item label="收件人姓名"
            >h345132</el-descriptions-item
          >
          <el-descriptions-item label="手机号"
            >18100000000</el-descriptions-item
          >
          <el-descriptions-item label="收货地址"
            >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
          >
          <el-descriptions-item label="邮政编码"> 430072 </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="payOption orderOpiton">
        <h4 class="pay">支付方式</h4>
        <div class="username selected">在线支付</div>
        <div class="username" style="margin-left: 5px">货到付款</div>
      </div>
      <div class="orderDetail orderOpiton">
        <h4>送货清单</h4>
        <div v-for="obj in orderObj" :key="obj.name" class="commoOfOrder">
          <el-image :src="obj.picUrl"></el-image>
          <div style="width: 40%">{{ obj.name }}</div>
          <div>￥{{ obj.price }}</div>
          <div>{{ obj.num }}</div>
          <div>有货</div>
        </div>
      </div>
      <div class="bill orderOpiton">
        <h4>发票信息：</h4>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用 无</h5>
      </div>
    </div>
    <div class="money">
      <div>总共{{ orderObj.length }}件商品</div>
      <div>运费:0</div>
      <div>
        共计金额：<span style="color: red">{{ allPrice }}</span>
      </div>
      <button @click="toPay" class="orderButton">提交订单</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderObj: [],
    };
  },
  created() {
    this.orderObj = JSON.parse(sessionStorage.getItem("orderObj"));
    console.log(this.orderObj);
  },
  computed: {
    allPrice() {
      return this.orderObj.reduce((pre, cur) => {
        return pre + cur.num * cur.price;
      }, 0);
    },
  },
  methods:{
      toPay(){
          this.$emit('next')
          this.$router.push('/settlement/payOrder')
      }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 90%;
  border: 1px solid #ccc;
  margin-left: 5%;
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  .orderOpiton {
    width: 90%;
    margin: 20px 5% 20px 5%;
  }
  .adress {
    border-bottom: 1px solid #ccc;
    /deep/.el-descriptions__title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }
    .svg-icon {
      width: 17px;
      height: 17px;
      vertical-align: middle;
    }
  }
  .payOption {
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    padding-bottom: 20px;
    .username {
      margin-top: 20px;
      display: inline-block;
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #ddd;
      position: relative;
      font-size: 13px;
      font-weight: 500;
    }
    .username.selected {
      border-color: #e1251b;
      background: url(./images/choosed.png) no-repeat;
      background-position: bottom right;
    }
  }
  .orderDetail {
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    .commoOfOrder {
      display: flex;
      height: 200px;
      margin-top: 20px;
      margin-bottom: 20px;
      line-height: 100px;
      background-color: #feedef;
      align-items: center;
      justify-content: space-around;
      .el-image {
        width: 100px;
        height: 100px;
      }
      div {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .bill {
    color: #666;
    div {
      font-size: 13px;
      font-weight: 500;
      margin: 10px 0 10px 0;
    }
    h5 {
      font-size: 11px;
    }
  }
}
.money {
  width: 90%;
  margin-left: 5%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    font-size: 13px;
    font-weight: 400;
    margin-right: 20px;
    margin-top: 8px;
  }
  .orderButton {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 164px;
    height: 56px;
    font: 700 18px "微软雅黑";
    line-height: 56px;
    text-align: center;
    color: #fff;
    background-color: #e1251b;
    border: 0;
    cursor: pointer;
  }
}
</style>