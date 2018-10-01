import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCart from '@/components/Shoppingcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shopping Cart',
      component: ShoppingCart
    },


  ]
})
