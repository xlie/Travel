<template>
  <div class="city-list" ref="list">
    <div class="hot-city">
      <div class="hot-city-title">热门城市</div>
      <div class="hot-city-list clearfix">
        <div class="hot-city-item fl" v-for="item in hot" :key="item.id">
          <div class="city-name border" @click="handleChangeCity(item.name)">{{item.name}}</div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in city" :key="key">
        <div class="title border-topbottom" :ref="key">{{key}}</div>
        <div class="area-item-list">
          <div
            class="area-item-item border-bottom"
            v-for="cityItem in item"
            :key="cityItem.id"
          >{{cityItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>  
<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'HotCity',
  props: {
    hot: Array,
    city: Object,
    letter: String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.list)
  },
 
  methods: {
   ...mapMutations('city',['changeCity']),
    handleChangeCity(city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  watch: {
    letter(value) {
      if (value) {
        const element = this.$refs[value][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.city-list {
  position: absolute;
  background: #f5f5f5;
  top: 84px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.hot-city-title {
  font-size: 12px;
  padding: 12px 15px;
}
.hot-city-list {
  padding-right: 30px;
  background: #fff;
}
.hot-city-item {
  width: 33.33%;
  box-sizing: border-box;
  padding: 5px 10px;
  .city-name {
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    &:before {
      border-color: #dedede;
      border-radius: 10px;
    }
  }
}
.area {
  .title {
    line-height: 24px;
    padding-left: 10px;
  }
  .area-item-list {
    background: #fff;
    .area-item-item {
      line-height: 30px;
      padding-left: 10px;
    }
  }
}
</style>
