<template>
  <div class="main">
    <div class="header">
      <span class="spanInHeader">所有商品分类</span>
      <svg-icon icon-class="arrow2" fill="#ccc"></svg-icon>
      <div
        v-for="category in categoryArr"
        :key="category.id"
        class="spanInHeader"
        style="display: inline-block"
      >
        <span class="spanInHeader canbeClick" @click="toCommodity(category)">
          {{ category.name }}
        </span>
        <svg-icon icon-class="arrow2" fill="#ccc"></svg-icon>
      </div>
      <span class="spanInHeader" style="color: #893f3f">{{
        categoryParams.categoryNow.name
      }}</span>
    </div>
    <div class="propsContainer">
      <div class="brandsOption">
        <h4>品牌:</h4>
        <ul class="colProp-list">
          <li v-for="brand in categoryBrands" :key="brand.id">
            {{ brand.name }}
          </li>
        </ul>
      </div>
      <div
        class="brandsOption"
        v-for="(value, name) in categoryProps"
        :key="name"
      >
        <h4>{{ name }}:</h4>
        <ul class="colProp-list">
          <li v-for="prop in value" :key="prop">
            {{ prop }}
          </li>
        </ul>
        <div>
           <a v-show="value.length > 4">更多</a>
        </div>
      </div>
    </div>
    <div class="commodityList">
      <div class="item" v-for="(item,ind) in commodityDataArr " :key="ind">
        <el-image :src="picArr[ind]" fit="cover"></el-image>
        <h3>{{item.name}}</h3>
        <div class="item-summary">
          <div class="item-sum"><span>总销量:</span><span style="color:#ecb653;margin-left:10px">{{item.saleVolume}}</span></div>
          <div class="item-price">
            <span>￥</span><span>{{item.price}}</span>
            <svg-icon icon-class="shopcart"></svg-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getCommodity,
  getCategoryProps,
  getBrandsByCategory,
  getPicOfCom
} from "@/api/index";
import {showCommodity} from "@/mock/commodity"
export default {
  data() {
    return {
      pageOpiton: {
        pageNo: 0,
        pageSize: 12,
      },
      commodityData: [],
      categoryId: "",
      categoryProps: {},
      categoryBrands: [],
      categoryParams: {
        categoryNow: "",
      },
      categoryArr:[],
      picOfCategory:[],
    };
  },
  created() {
    this.categoryParams.categoryNow = JSON.parse(
      sessionStorage.getItem("categoryCur")
    );//获取当前categoryID
    this.setCategoryArr() //获取category路径数据
    getCommodity({
      pageNo: this.pageOpiton.pageNo,
      pageSize: this.pageOpiton.pageSize,
      categoryId: this.categoryParams.categoryNow.id,
    }).then((res) => {
      if (res.code == 0) {
        this.commodityData = res.result;
        //依次请求图片数据
        this.commodityData.forEach((val,ind)=>{
          getPicOfCom({commodityId:val.id}).then((res)=>{
            if(res.code == 0){
              //对请求得到的图片数组进行装换
              let ans = res.result.map((val)=>{
                return val.replace(/.*;base64,/, "")
              })
              //存储图片数据
              this.picOfCategory[ind] = ans
            }
          })
        })
      }
    });
    getCategoryProps({ categoryId: this.categoryParams.categoryNow.id }).then(
      (res) => {
        if (res.code == 0) {
          this.categoryProps = res.result;
          let a = "产地";
          this.categoryProps.a = [
            "美国",
            "德国",
            "澳大利亚",
            "土耳瓜其",
            "牙买加",
            "麦芽加",
            "西西里半岛",
          ];
        }
      }
    );
    getBrandsByCategory({
      categoryId: this.categoryParams.categoryNow.id,
    }).then((res) => {
      if (res.code == 0) {
        this.categoryBrands = res.result;
      }
    });
  },
  methods:{
    setCategoryArr(){
      let obj = {};
      if (JSON.parse(sessionStorage.getItem("parentLevelOne"))) {
        obj.level1 = JSON.parse(sessionStorage.getItem("parentLevelOne"));
      }
      if (JSON.parse(sessionStorage.getItem("parentLevelTWO"))) {
        obj.level2 = JSON.parse(sessionStorage.getItem("parentLevelTWO"));
      }
      this.categoryArr = obj
    },
    toCommodity(obj){
      this.$store.dispatch("commodity/setcategoryCurView", obj).then(()=>{
        this.setCategoryArr()
      });
    },
    sendRequest(){

    }
  },
  computed:{
    picArr(){
      let ans = showCommodity()
      return ans.picArr
    },
    commodityDataArr(){
      let ans = showCommodity()
      return ans.commodityData
    },
  }
};
</script>

<style scoped lang="scss">
.main {
  li:hover {
    text-decoration: underline;
    color: #893f3f;
    cursor: pointer;
  }
  .header {
    height: 27px;
    width: 80%;
    margin-left: 10%;
    background-color: #f3d59d;
    line-height: 27px;
    border: 1px solid #ccc;
    .svg-icon {
      width: 27px;
      height: 27px;
    }
    .spanInHeader {
      font-size: 12px;
      font-weight: 540;
      color: rgb(106, 105, 105);
      vertical-align: top;
      margin-left: 5px;
    }
    .canbeClick:hover {
      color: #893f3f;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .propsContainer {
    border: 1px solid #ccc;
    width: 80%;
    margin-left: 10%;
    font-size: 12px;
    color: rgb(106, 105, 105);
    overflow: hidden;
    .brandsOption {
      h4 {
        margin-left: 15px;
        float: left;
      }
      .colProp-list {
        margin-left: 140px;
        width: 500px;
      }
      .colProp-list li {
        width: 120px;
        display: inline-block;
      }
    }
  }
  .commodityList{
    width:900px;
    .item{
      display: inline-block;
      width: 190px;
      height: 275px;
      padding:10px 10px 0 10px;
      h3{
        font-size:12px;
        font-weight: 500;
      }
      .item-summary{
        font-size: 12px;
        font-weight: 500;
        color: #666;
        .item-price{
          .svg-icon{
            width:10px;
            height: 10px;
          }
        }
      }
    }
    .item:hover{
      background-color: rgb(237, 234, 234);
    }
  }
}
</style>