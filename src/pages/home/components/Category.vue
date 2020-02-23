<template>
  <div class="category">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(slideItem,slideIndex) in pages" :key="slideIndex">
        <div class="category-item" v-for="(item,index) in slideItem" :key="index">
          <img :src="item.imgUrl" alt />
          <div class="keywords">{{item.keyWords}}</div>
        </div>
      </swiper-slide>
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
         pagination: {
            el: '.swiper-pagination',
          },
      },
      list: [
        { id:'001',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          keyWords:'景点门票'
        },
        { id:'002',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
          keyWords:'熊猫基地'
        },
        { id:'003',
          imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
          keyWords:'都江堰'
        },
        { id:'004',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          keyWords:'川剧变脸'
        },
        { id:'005',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          keyWords:'一日游'
        },
        { id:'006',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
          keyWords:'滑 雪'
        },
        { id:'007',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          keyWords:'泡温泉'
        },
        { id:'008',
          imgUrl:'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
          keyWords:'成都海昌'
        },
        { id:'009',
          imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/02bbb71bd1f629c2348d0c97ef82c129.png',
          keyWords:'青城山'
        },
        { id:'010',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
          keyWords:'西岭雪山'
        },
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="less" scoped>
.category{
  background: #fff;
}
.category-item {
  flex: 0 0 25%;
  text-align: center;
  padding-top: 5px;
  img {
    display: block;
    width: 55px;
    height: 55px;
    margin: 0 auto;
  }
  .keywords {
    margin-top: 5px;
  }
}
</style>
<style scoped>
.category >>> .swiper-slide {
  display: flex;
  flex-flow: wrap;
 
}
.category >>> .swiper-pagination {
 position: relative;
 bottom: 0;
 background: #fff;
}

</style>
