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
          <span style="font-size: 20px; font-weight: 700">注册</span>
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
          <div class="inputContainer">
            <svg-icon icon-class="age" fill="white"></svg-icon>
            <input
              class="inputForm"
              type="text"
              placeholder="请输入年龄"
              v-model.number="inputVal.age"
            />
          </div>
          <div class="inputContainer" style="border: 0">
            <label style="color: #666; margin-right: 15px">性别</label>
            <el-checkbox v-model="sexOption.checked1" :disabled="disabled1"
              >女</el-checkbox
            >
            <el-checkbox v-model="sexOption.checked2" :disabled="disabled2"
              >男</el-checkbox
            >
          </div>
          <div class="inputContainer" style="border: 0">
            <label style="color: #666; margin-right: 15px">用户头像上传</label>
            <div style="margin-top: 20px">
              <el-upload
                class="upload-demo"
                action="#"
                multiple
                :auto-upload="false"
                :before-upload="beforeAvatarUpload"
                :on-change="handleChange"
                :on-remove="handleRemove"
                :on-exceed="handleExceed"
                :limit="1"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件,且不超过500kb
                </div>
              </el-upload>
            </div>
          </div>
          <button @click="handleRegister" class="handleLogin">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadImgToBase64 } from "@/utils/manage";
export default {
  data() {
    return {
      inputVal: {
        accountVal: "",
        password: "",
        age:""
      },
      sexOption: {
        checked1: false,
        checked2: false,
      },
      fileList: [],
    };
  },
  computed: {
    disabled1() {
      return this.sexOption.checked2;
    },
    disabled2() {
      return this.sexOption.checked1;
    },
  },
  methods: {
    //文件超出数目限制
    handleExceed() {
      this.$message.warning("用户头像只能上传一张图片!");
    },
    //商品图片上传之前判断图片大小
    beforeAvatarUpload(file) {
      const accept = ["image/jpg", "image/png", "image/jpeg"];
      const isJPG = accept.includes(file.type);
      const isLt500K = file.size / 1024 < 500;
      if (!isJPG) {
        this.$message.error("图片格式不对!");
      }
      if (!isLt500K) {
        this.$message.error("上传图片大小不能超过500KB!");
      }
      return isJPG && isLt500K;
    },
    //将商品图片文件状态同步到fileList1中
    handleChange(file) {
      if (this.fileList.length == 1) {
        this.$message.warning("用户头像只能上传一张图片!");
      }
      this.fileList.push(file);
    },
    //移除商品详情图片
    handleRemove(file, fileList) {
      this.fileList = fileList;
    },
    //重置注册信息
    resetInfo(){
      this.inputVal.accountVal=""
      this.inputVal.password=""
      this.inputVal.age=""
      this.sexOption.checked1 = false
      this.sexOption.checked2 = false
      this.fileList == []
    },
    //用户注册
     async handleRegister() {
      console.log(this.inputVal)
      if (
        this.inputVal.accountVal === "" ||
        this.inputVal.password === "" ||
        this.inputVal.age === "" ||
        this.fileList == []
      ) {
        this.$message.warning("用户信息不完整!");
        return;
      }
      if (!(this.sexOption.checked1  || this.sexOption.checked2)) {
        this.$message.warning("用户信息不完整!");
        return;
      }
      let numAge = Number(this.inputVal.age)
      if (Number.isNaN(this.inputVal.age)) {
        this.$message.warning("商品价格设置有误!");
        return;
      }
      const response = await uploadImgToBase64(this.fileList[0].raw);
      let picRes = response.result.replace(/.*;base64,/, "");
      let obj = {
        name: this.inputVal.accountVal,
        password: this.inputVal.password,
        age: numAge,
        sex: this.sexOption.checked1 ? 0 : 1,
        icon: picRes,
      };
      console.log(this.$store)
      this.$store.dispatch('user/register',obj).then(()=>{
          this.$message.success('注册成功!')
          this.$router.replace('/home')
      }).catch((error)=>{
        this.$message.warning(error || 'error!')
        this.resetInfo()
      })
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
  height: 530px;
  .left {
    float: left;
    margin-left: 5%;
    margin-top: 5%;
    text-align: center;
  }
  .right {
    float: right;
    width: 350px;
    height: 500px;
    background-color: white;
    margin-right: 6%;
    margin-top: 1%;
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
        margin: 15px 15px 0px 15px;
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