<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img
          src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg"
          alt
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>  
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
img {
  height: 100px;
  display: block;
}
</style>
