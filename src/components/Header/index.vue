<template>
  <header class="header">
    <div class="top">
      <div class="loginList">
        <p style="margin-left: 10px">
          <svg-icon icon-class="cat"></svg-icon>喵,欢迎来到大橘超市
        </p>
        <p>
          <router-link to="/login">{{loginName}}</router-link>
          <router-link to="/register" class="register">免费注册</router-link>
        </p>
      </div>
      <div class="typeList">
        <router-link to="/personal"> <svg-icon icon-class="person" fill="#003153"></svg-icon>个人中心</router-link>
        <a href="###"
          ><svg-icon icon-class="order" fill="#003153"></svg-icon>我的订单</a
        >
        <router-link to="/shoppingcart"><svg-icon icon-class="shoppingCart" fill="#003153"></svg-icon>我的购物车</router-link>
        <a href="###">大橘超市会员</a>
        <a href="###">关注大橘</a>
        <a href="###">浏览历史</a>
        <a href="###"
          ><svg-icon icon-class="store" fill="#003153"></svg-icon>商家后台</a
        >
      </div>
    </div>
    <div class="bottom">
      <h1 class="logoArea">
        <a
          class="logo"
          title="大橘超市"
          href="###"
          target="_blank"
          style="text-decoration: none"
        >
          <div class="logoContianer">
            <!-- <img src="@/assets/logo.png" alt="" class="cat" /> -->
            <svg-icon icon-class="cat" class="catLogo"></svg-icon>
            <img src="@/assets/name.png" alt="" style="float: top" />
            <span class="detail">生活小事 随时大橘超市</span>
          </div>
        </a>
      </h1>
      <div class="searchArea">
        <input
          type="text"
          id="autocomplete"
          class="input-error input-xxlarge"
          v-model="keyword"
        />
        <button
          class="sui-btn btn-xlarge btn-danger"
          type="button"
          @click="goSearch"
        >
          搜索
        </button>
        <span class="reminder"
          ><svg-icon icon-class="remind" fill="#666"></svg-icon>一站式齐购</span
        >
        <span class="reminder"
          ><svg-icon icon-class="remind" fill="#666"></svg-icon>包邮速达</span
        >
      </div>
    </div>
  </header>
</template>
<script>
import {getCookie} from '@/utils/user'
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {},
  },
  computed:{
    loginName(){
      let m = getCookie()
      return m || '请登录'
    }
  }
};
</script>

<style scoped lang="scss">
.svg-icon {
  height: 17px;
  width: 17px;
  margin-right: 2px;
  vertical-align: middle;
  margin-top: -3px;
}
.header {
  .top {
    width: 100%;
    margin: 20px 0px 0px 0px;
    height: 30px;
    background-color: #ecb653;
    line-height: 30px;
    font-size: 10px;
    color: #666;
    overflow: hidden;
    a {
      color: #666;
      text-decoration: none;
    }
    a:hover {
      color: #ffe8c1; //#e69e19;
      text-decoration: underline;
    }
    .loginList {
      float: left;
      p {
        float: left;
        margin-right: 10px;
        .register {
          border-left: 1px solid #b3aeae;
          padding: 0 5px;
          margin-left: 5px;
        }
      }
    }
    .typeList {
      float: right;

      a {
        padding: 0 10px;
        & + a {
          border-left: 1px solid #b3aeae;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    .logoArea {
      float: left;
      .logoContianer {
        margin-left: 10%;
        width: 240px;
        font-size: 30px;
        font-size: 800;
        overflow: hidden;
        text-align: center;
        a {
          text-decoration: none;
        }
        .catLogo {
          width: 80px;
          height: 90px;
          float: left;
        }
        .detail {
          font-size: 8px;
          vertical-align: top;
          color: black;
          opacity: 0.5;
        }
      }
    }
    .searchArea {
      width: 780px;
      float: right;
      margin-top: 35px;
      margin-right: 6%;
      input {
        box-sizing: border-box;
        width: 490px;
        height: 32px;
        padding: 0px 4px;
        border: 2px solid #d39611;
        float: left;

        &:focus {
          outline: none;
        }
      }
      button {
        height: 32px;
        width: 68px;
        background-color: #d39611;
        border: none;
        color: #fff;
        float: left;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
      .reminder {
        font-size: 8px;
        font-weight: 800;
        color: #666;
        margin-left: 3%;
        line-height: 32px;
      }
    }
  }
}
</style>