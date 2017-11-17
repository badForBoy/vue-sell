import Vue from 'vue'
import Router from 'vue-router'
import Shop from '../components/shop/shop.vue'
// import Popup from '../components/popup/popop.vue'
import Home from '../components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: ':id',
          component: Shop
        }
      ]
    }
  ]
})
