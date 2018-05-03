import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import read from '@/components/read/read'
import home from '@/components/home/home'
import radio from '@/components/radio-station/radio'
import client from '@/components/client/client'
import fragment from '@/components/fragment/fragment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/read',
      name: 'read',
      component: read
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/fragment',
      name: 'fragment',
      component: fragment
    },
    {
      path: '/client',
      name: 'client',
      component: client
    }
  ]
})
