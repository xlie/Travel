<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe609;</span></div>
    <div class="header-input"><span class="iconfont">&#xe629;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">北京<span class="iconfont">&#xe631;</span></div>
  </div>
</template>  
<script>
export default {
  name: "HomeHeader"
};
</script>
<style lang="less" scope>
.header {
  height: 44px;
  background: #00bcd4;
  color: #fff;
  display: flex;
  .header-left {
    width: 20px;
    padding: 0 10px;
    line-height: 44px;
    float: left;
  }
  .header-right {
    line-height: 44px;
    width: 66px;
    float: right;
    text-align: center;
  }
  .header-input {
    flex: 1;
    background-color: #fff;
    color:#e4e7ea;
    margin: 7px 0;
    line-height: 30px;
    border-radius: 3px;
    span{
      padding: 0 10px;
    }
  }
}
</style>
