<template>
  <div class="city">
    <city-header></city-header>
    <search></search>
    <list :hot="hotCities" :city="cities" :letter="letter"></list>
    <alphabet :city="cities" @change="getCurrentLetter"></alphabet>
  </div>
</template>  
<script>
import CityHeader from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
import { cityJson } from '@/Json/city'
export default {
  name: 'City',
  components: {
    CityHeader,
    Search,
    List,
    Alphabet
  },
  data() {
    return {
      letter: '',
      hotCities: [],
      cities: {}
    }
  },
  mounted() {
    this.hotCities = cityJson.data.hotCities
    this.cities = cityJson.data.cities
  },
  methods: {
    getCurrentLetter(letter) {
      this.letter = letter
    }
  }
}
</script>
<style lang="less" scoped>
.city {
  background: #f5f5f5;
}
</style>
