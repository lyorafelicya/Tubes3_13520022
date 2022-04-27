import Vue from 'vue'
import Router from 'vue-router'
import DNATest from '@/components/DNATest'
import addDisease from '@/components/addDisease'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DNATest',
      component: DNATest
    },
    {
      path: '/addDisease',
      name: 'addDisease',
      component: addDisease
    },
    {
      path: '/search',
      name: 'History',
      component: History
    }
  ]
})
