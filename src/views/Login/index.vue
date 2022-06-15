<template>
  <div>
    <header style="height: 60px; vertical-align: middle">
      <h1 class="title">ORANG CAT 大橘超市</h1>
    </header>
    <div class="main">
      <div class="left">
        <svg-icon icon-class="cat"></svg-icon>
        <div>
          <h1 style="color: white">IDEAL LIFE @ ORANGE CAT</h1>
        </div>
      </div>
      <div class="right">
        <div class="formTitle">
          <span style="font-size: 20px; font-weight: 700">密码登录</span>
        </div>
        <div class="formMain">
          <div class="inputContainer">
            <svg-icon icon-class="account" fill="white"></svg-icon>
            <input
              class="inputForm"
              type="text"
              placeholder="账户名/邮箱/手机号"
              v-model="inputVal.accountVal"
            />
          </div>
          <div class="inputContainer">
            <svg-icon icon-class="lock" fill="white"></svg-icon>
            <input
              class="inputForm"
              type="text"
              placeholder="请输入登录密码"
              v-model="inputVal.password"
            />
          </div>
          <button class="handleLogin" @click="handleLogin">登录</button>
        </div>
        <div class="foot">
          <router-link to="/register">免费注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  data() {
    return {
      inputVal: {
        accountVal: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      if (this.inputVal.accountVal == "" || this.inputVal.password == "") {
        this.$message.warning("密码或账户不完整!");
        return;
      }
      this.$store.dispatch('user/login',{
        name: this.inputVal.accountVal,
        password: this.inputVal.password,
      }).then(()=>{
          this.$message.success('登录成功!')
      }).catch((error)=>{
        this.$message.warning(error || 'error')
      });
    },
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
input {
  width: 50px;
  height: 20px;
  border: 1px solid #666;
}
.main {
  background-color: #ffd890;
  overflow: hidden;
  vertical-align: middle;
  height: 500px;
  .left {
    float: left;
    margin-left: 5%;
    margin-top: 40px;
    text-align: center;
  }
  .right {
    float: right;
    width: 350px;
    height: 350px;
    background-color: white;
    margin-right: 6%;
    margin-top: 5%;
    .svg-icon {
      width: 40px;
      height: 42px;
      background-color: #ccc;
      vertical-align: middle;
    }
    .formTitle {
      padding-left: 20px;
      padding-top: 20px;
      color: #666;
    }
    .formMain {
      .inputContainer {
        margin: 30px 15px 0px 15px;
        border: 1px solid #ccc;
        .inputForm {
          width: 270px;
          height: 40px;
          border: 0;
        }
      }
      .inputContainer:hover {
        border: 1px solid rgb(220, 149, 42);
      }
      .handleLogin {
        cursor: pointer;
        margin: 30px 15px 0px 15px;
        width: 320px;
        height: 40px;
        background-color: #ffd890;
        border: 0px;
        font-size: 16px;
        font-weight: 700;
        color: white;
      }
    }
    .foot {
      margin-top: 15px;
      float: right;
      margin-right: 20px;
      a {
        color: #666;
        font-size: 14px;
      }
    }
  }
}
.title {
  vertical-align: middle;
  //  background-image: linear-gradient(to right, orange, #d39611);
  color: #d39611;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
  padding-left: 5%;
  margin-top: 10px;
}
.svg-icon {
  width: 350px;
  height: 350px;
}
</style>