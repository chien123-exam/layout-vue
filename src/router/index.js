import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Index.vue'

import Order1day from '../views/toporder/Order1day.vue'
import Orderdays from '../views/toporder/Orderdays.vue'
import CalendarTop from '../views/toporder/CalendarTop.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },

  {
    path: '/toporder',
    children: [
      {
        path: '/toporder/Order1day',
        component: Order1day,
        name: 'order1day'
      },

      {
        path: '/toporder/Orderdays',
        component: Orderdays,
        name: 'orderdays'
      },

      {
        path: '/toporder/CalendarTop',
        component: CalendarTop,
        name: 'calendartop'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
