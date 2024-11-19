import { createWebHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue'
import AppAbout from '../pages/AppAbout.vue'
import AppProjects from '../pages/AppProjects.vue'
import AppSingleProject from '../pages/AppSingleProject.vue'
import AppTypes from '../pages/AppTypes.vue'
import AppSingleType from '../pages/AppSingleType.vue'

const routes = [
  { path: '/', component: AppHome , name:'home' },
  { path: '/about', component: AppAbout, name:'about' },
  { path: '/projects', component: AppProjects, name:'projects' },
  { path: '/types', component: AppTypes, name:'types' },
  { path: '/projects/:id', component: AppSingleProject, name:'projects.show' },
  { path: '/types/:id', component: AppSingleType, name:'types.show' },




]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export { router };