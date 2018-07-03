import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/v-index/v-index'
import Shop from '@/views/v-shop/v-shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index

    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    }
  ]
})
