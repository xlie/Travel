<template>
  <div class="header">
    <div class="header-left" @click='handleBackHome'>
      <span class="iconfont">&#xe609;</span>
    </div>
    <div class="header-title">城市选择</div>
  </div>
</template>  
<script>
export default {
  name: 'CityHeader',
  methods:{
    handleBackHome(){
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 44px;
  background: #00bcd4;
  color: #fff;
  .header-left {
    width: 20px;
    padding: 0 10px;
    line-height: 44px;
    float: left;
  }
  .header-title {
    line-height: 44px;
    margin: 0 40px;
    font-size: 16px;
    text-align: center;
  }
}
</style>
