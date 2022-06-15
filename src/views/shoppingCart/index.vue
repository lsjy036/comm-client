<template>
  <div class="main">
    <el-table
      :data="shoppingCartData"
      border
      @selection-change="handleSelectionChange"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="商品名">
        <template slot-scope="scope">
          <el-image :src="scope.row.picUrl" style="float: left"></el-image>
          <h4>{{ scope.row.name }}</h4>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价(元)" style="font-size: 16px">
      </el-table-column>
      <el-table-column prop="num" label="数量">
        <template slot-scope="scope">
          <div class="svgContainer" @click="addNum(scope.row)">
            <svg-icon icon-class="add"></svg-icon>
          </div>
          <input v-model="scope.row.num" />
          <div class="svgContainer" @click="reduceNum(scope.row)">
            <svg-icon icon-class="reduce"></svg-icon>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="小计">
        <template slot-scope="scope">
          <h3>{{ scope.row.price * scope.row.num }}</h3>
          <div v-show="false">
            <span
              >优惠价:
              <h3
                style="
                  display: inline-block;
                  font-style: italic;
                  color: #bb3636;
                "
              >
                100
              </h3></span
            >
            <h6>共计为您节省5元</h6>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="tablefooter">
        <!-- <el-select v-model="value" placeholder="请选择优惠活动">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select> -->
      <div class="description">
        <span
          >已选择{{ numOfCom }}件商品 总计金额：
          <h3 style="color: #c04a4a; display: inline">{{priceOfAll}}</h3></span
        >
      </div>
      <button @click="handleSettlement()">结算</button>
    </div>
  </div>
</template>

<script>
import { queryAllShoppingCart, addShoppingCart } from "@/api/shoppingCart";
import { getCartData } from "@/mock/shoppingCart";
export default {
  data() {
    return {
      multipleSelection: [],
      shoppingCartData: [],
      options:[
          {
              label:'不参加活动',
          }
      ]
    };
  },
  created() {
    this.shoppingCartData = getCartData();
  },
  methods: {
    addGood() {
      addShoppingCart({ commodityId: 83, number: 1 }).then((res) => {
        if (res.code == 0) {
          this.$message.success("加成功!");
        }
      });
    },
    reduceNum(obj) {
      if (obj.num == 1) {
        this.$message.warning("数量至少为1!");
      } else obj.num--;
    },
    addNum(obj) {
      obj.num++;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteRow(index) {
      let arr = [];
      this.shoppingCartData.forEach((val, ind) => {
        if (ind != index) arr.push(val);
      });
      this.shoppingCartData = arr;
    },
    handleSettlement(){
        sessionStorage.setItem('orderObj',JSON.stringify(this.multipleSelection))
        sessionStorage.setItem('active','0')
        this.$router.push('/settlement/placeorder')
    }
  },
  computed: {
    numOfCom() {
      return this.multipleSelection.length;
    },
    priceOfAll(){
        return this.multipleSelection.reduce((pre,cur)=>{
           return pre+cur.num*cur.price
        },0)
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 96vw;
  margin: 20px 2vw 2vw 2vw;
  .el-image {
    width: 80px;
    height: 80px;
    margin-right: 30px;
  }
  .cell {
    .svg-icon {
      width: 18px;
      height: 18px;
      padding-top: 5px;
    }
    .svgContainer {
      position: relative;
      top: 3px;
      width: 25px;
      height: 30px;
      display: inline-block;
      background-color: #ecb653;
      border-radius: 1px;
      text-align: center;
      cursor: pointer;
    }
    input {
      width: 50px;
      height: 29px;
      margin: 0;
      border: 1px solid #ccc;
      border-radius: 2px;
      margin: 0 5px 0 5px;
    }
  }
  /deep/.is-checked .el-checkbox__inner {
    background-color: #5fafff;
    border: 1px solid #ccc;
  }
  .tablefooter {
    margin-top: 10px;
    height: 60px;
    border: 1px solid #ececed;
    vertical-align: middle;
    line-height: 60px;
    button {
      float: right;
      height: 60px;
      width: 90px;
      border: 0;
      background-color: #e1aa42;
      color: white;
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
    }
    .description {
      display: inline-block;
      margin-left: 70%;
      span {
        font-size: 14px;
        font-weight: 400;
        color: #666;
      }
    }
  }
}
/deep/ .el-select{
    display: inline-block;
  }
</style>