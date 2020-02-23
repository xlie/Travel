<template>
  <div class="home">
    <home-header></home-header>
    <swiper></swiper>
    <category></category>
    <like></like>
    <Weekends></Weekends>
  </div>
</template>  
<script>
import HomeHeader from './components/Header'
import Swiper from './components/Swiper'
import Category from './components/Category'
import Like from './components/Like'
import Weekends from './components/Weekends'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Category,
    Like,
    Weekends
  }
}
</script>
<style lang="less" scoped>
.home {
  background: #f5f5f5;
}
</style>
