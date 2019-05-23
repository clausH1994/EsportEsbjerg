import Vue from 'vue'
import Router from 'vue-router'
import Tilmelding from './views/Tilmelding.vue'
import FrontPage from './views/FrontPage.vue'
import Kalender from './views/Kalender.vue'
import Forældre from './views/Forældre.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'frontPage',
      component: FrontPage
    },
    {
      path: '/tilmelding',
      name: 'tilmelding',
      component: Tilmelding
    },
    {
      path: '/kalender',
      name: 'kalender',
      component: Kalender
    },
    {
      path: '/forældre',
      name: 'forældre',
      component: Forældre
    },
  ]
})
