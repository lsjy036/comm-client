<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="resIndex">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort">
            <div class="all-sort-list2" @click="goSearch">
              <div class="item" v-for="(c1, index) in allCategory" :key="c1.id">
                <h3
                  :class="{ cur: currentIndex == index }"
                  @mouseenter="changeIndex(index)"
                >
                  <svg-icon
                    icon-class="select"
                    class="select"
                    fill="#d39611"
                  ></svg-icon>
                  <span @click="toCommodity(c1)">{{ c1.name }}</span>
                  <svg-icon icon-class="arrow" class="arrow"></svg-icon>
                </h3>
                <div
                  class="item-list clearfix"
                  ref="myItem"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="itemLevel2"
                    v-for="c2 in c1.children"
                    :key="c2.id"
                  >
                    <h4 style="color: #2f2f2f" @click="toCommodity(c2)">
                      {{ c2.name }}
                    </h4>
                    <div class="itemLevel3Container">
                      <div style="margin-left: -9px">
                        <div
                          v-for="c3 in c2.children"
                          :key="c3.id"
                          class="itemLevel3"
                        >
                          <span @click="toCommodity(c3)">{{ c3.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div style="padding: 10px; padding-left: 30px; padding-right: 30px">
        <h4 style="vertical-align: middle">首页</h4>
      </div>
      <div class="line"></div>
      <div style="padding-top: 10px; padding-left: 30px">
        <h4 style="vertical-align: middle">企业采购</h4>
      </div>
    </div>
  </div>
</template>
<script>
import { getTypeNav } from "@/api/index";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      allCategory: [],
      ifShow: false,
      currentIndex: -1,
    };
  },
  created() {
    getTypeNav().then((res) => {
      if (res.code == 0) {
        this.allCategory = res.result;
      } else {
        this.$message.error(res.message || "error");
      }
    });
  },
  methods: {
    resIndex() {
      this.currentIndex = -1;
    },
    goSearch() {},
    //获取当前需要展开二三级品类的ndex
    changeIndex: throttle(function (index) {
      //修改当前currentIndex索引值
      //函数节流:在20MS时间之内只能执行一次
      this.currentIndex = index;
      this.$nextTick(() => {
        let high = index * 70;
        this.$refs.myItem[index].style.top = high + "px";
      });
    }, 20),
    toCommodity(obj) {
      this.$store.dispatch("commodity/setcategoryCurView", obj).then(()=>{
        this.$router.push("commodity");
      });
      
    },
  },
};
</script>
<style scoped lang="scss">
.svg-icon {
  height: 15px;
  width: 15px;
}
.arrow {
  margin-left: auto;
  margin-right: 2px;
  margin-top: 5px;
  float: right;
}
.select {
  vertical-align: middle;
  margin-right: 10px;
}
.type-nav {
  border-bottom: 2px solid #2f2f2f;
  margin-left:3vw;
  margin-right: 2vw;
  .container {
    margin: 0 auto;
    display: flex;
    position: relative;
    .line {
      width: 1px;
      height: 30px;
      margin-top: 5px;
      background-color: #ccc;
    }
    .all {
      width: 18vw;
      height: 45px;
      background-color: #2f2f2f;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }
    .sort {
      position: absolute;
      top: 45px;
      width: 18vw;
      position: absolute;
      background: #fafafa;

      z-index: 999;

      .all-sort-list2 {
        .cur {
          h3 {
            background-color: skyblue;
          }
        }
        .item {
          height: 50px;
          border-bottom: 1px solid #e7e7e7;
          margin: 0px 10px 0px 10px;
          vertical-align: middle;
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 700;
            overflow: hidden;
            padding: 0 20px;
            margin: 20px 0 0 0;
            color: #333;
            span:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }

          .item-list {
            display: flex;
            flex-flow: row wrap;
            position: absolute;
            min-width: 783px;
            min-height: 150px;
            background: #f7f7f7;
            left: 18vw;
            top: 0;
            border: 1px solid #ddd;
            z-index: 9999 !important;
            .itemLevel2 {
              padding-top: 6px;
              display: inline-block;
              width: 240px;
              height: 150px;
              font-size: 14px;
              margin-left: 20px;
              border-right: 1px solid #ccc;
              h4:hover {
                text-decoration: underline;
                cursor: pointer;
              }
              .itemLevel3Container {
                display: flex;
                flex-flow: row wrap;
                overflow: hidden;
                .itemLevel3 {
                  display: inline-block;
                  margin-top: 7px;
                  margin-right: 10px;
                  padding-left: 10px;
                  border-left: 1px solid #ccc;
                  font-size: 12px;
                  color: #2f2f2f;
                }
                .itemLevel3:hover {
                  text-decoration: underline;
                  cursor: pointer;
                  color: #8b1d1d;
                }
              }
            }
            .itemLevel2:nth-child(3n) {
              border: 0;
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
    .sort-enter {
      height: 0px;
    }
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
