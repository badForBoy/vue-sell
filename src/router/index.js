import Vue from 'vue'
import Router from 'vue-router'
import Shop from '../components/shop/shop.vue'
import Home from '../components/home/home.vue'
import Goods from '../components/goods/goods.vue'
import Rating from '../components/rating/rating.vue'
import Active from '../components/active/active.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: Shop,
          children: [
            {
              path: ':id',
              component: Goods
            }
          ]
        },
        {
          path: '/shop/rating',
          component: Shop,
          children: [
            {
              path: ':id',
              component: Rating
            }
          ]
        },
        {
          path: '/shop/active',
          component: Shop,
          children: [
            {
              path: ':id',
              component: Active
            }
          ]
        }
      ]
    }
  ]
})
