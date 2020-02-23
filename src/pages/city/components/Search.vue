<template>
  <div class="search-wrapper">
    <input type="text" placeholder="请输入城市名或拼音">
  </div>
</template>  
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="less" scoped>
.search-wrapper {
 background: #00bcd4;
 box-sizing: border-box;
 height: 40px;
 padding: 5px;
 input{
   width: 100%;
   height: 100%;
   border-radius:3px;
   text-align: center;
 }
}
</style>
