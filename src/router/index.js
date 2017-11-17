import Vue from 'vue'
import Router from 'vue-router'
import Shop from '../components/shop/shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shop',
      component: Shop
    }
  ]
})
