import Vue from 'vue'
import Vuex from 'vuex'
import { city } from './module/city'
import { car } from './module/car'

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    defaultCity:'上海'
  },
  modules: {
    city,
    car
  }
})