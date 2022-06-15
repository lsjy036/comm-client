<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="carouselContainer">
        <el-carousel arrow="hover" class="carousel">
          <el-carousel-item
            v-for="item in 4"
            :key="item"
          >
            <el-image :src="srcArr[item - 1]" fit="cover" style="width: 60vw;height: 50vh;"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="picContainer">
        <span v-for="item in 6" :key="item">
          <el-image :src="picArr[item - 1]"></el-image>
        </span>
      </div>
    </div>
    <div class="rightPic">
      <div>
        <el-image
        style="width:15vw;border:1px solid #ccc"
          src="https://img.alicdn.com/imgextra/i2/O1CN01bIFO2M1jMcSWthEOm_!!6000000004534-0-tps-188-170.jpg_Q90.jpg"
        ></el-image>
      </div>
      <div>
        <el-image style="width:15vw; border:1px solid #ccc"
          src="https://img.alicdn.com/imgextra/i3/O1CN01BVV2tq1JKciuhGe0L_!!6000000001010-0-tps-188-170.jpg_Q90.jpg"
        ></el-image>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      srcArr: [
        "https://i.postimg.cc/wByxKG0Z/act1.jpg",
        "https://img.alicdn.com/imgextra/i1/O1CN01JIEbLN27iBweR6dMd_!!6000000007830-1-tps-750-291.gif_Q90.jpg",
        "https://gw.alicdn.com/imgextra/i2/O1CN01PUNxaO1h3GY07SUtt_!!6000000004221-2-tps-750-291.png_Q90.jpg",
        "https://gw.alicdn.com/imgextra/i1/O1CN01dLEM3e2A0AjEPYAHH_!!6000000008140-2-tps-750-291.png_Q90.jpg",
      ],
      picArr: [
        "https://img.alicdn.com/imgextra/i2/52660971/O1CN01zWRowt1J2lGktRXja_!!52660971.jpg_Q90.jpg",
        "https://img.alicdn.com/imgextra/i2/O1CN01kj6dUH1ewHEuuTyvV_!!6000000003935-2-tps-249-120.png_Q90.jpg",
        "https://img.alicdn.com/tfs/TB1CEBigDM11u4jSZPxXXahcXXa-250-120.jpg_Q90.jpg",
        "https://img.alicdn.com/tfs/TB1rZRGmAT2gK0jSZPcXXcKkpXa-250-172.jpg_Q90.jpg",
        "https://gw.alicdn.com/imgextra/i1/O1CN016vRYR71bvPdHL0L27_!!6000000003527-0-tps-250-172.jpg_Q90.jpg",
        "https://gw.alicdn.com/imgextra/i3/O1CN01ZXiFTr1S0m9lZV2N7_!!6000000002185-0-tps-250-172.jpg_Q90.jpg",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.main {
  margin-left: 21vw;
  display: inline-block;
  width: 60vw;
  .carouselContainer {
    overflow: hidden;

    .carousel {
      height: 50vh;
      overflow: hidden;
    }
  }
  .picContainer {
    width: 60vw;
    display: flex;
    flex-flow: row wrap;
    div {
      display: inline-block;
    }
    .el-image {
      width: 20vw;
      cursor: pointer;
      transition: all 0.4s;
    }
    .el-image:hover {
      transform: scale(1.15);
      z-index:1000;
    }
  }
}
.rightPic{
    width: 15vw;
    margin-right: 2vw;
    float: right;
  }
</style>