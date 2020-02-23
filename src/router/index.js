import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Home from '@/pages/home/Home';
import City from '@/pages/city/City';



export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
