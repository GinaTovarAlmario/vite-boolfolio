import { createMemoryHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue'
import AppAbout from '../pages/AppAbout.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/about', component: AppAbout },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})