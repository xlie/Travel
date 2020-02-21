<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
    <category></category>
  </div>
</template>  
<script>
import HomeHeader from "./components/Header";
import Swiper from "./components/Swiper";
import Category from "./components/Category";
export default {
  name: "Home",
  components: {
    HomeHeader,
    Swiper,
    Category
  }
};
</script>
