import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import JobResultsPage from '@/pages/JobResultsPage.vue'
import JobPage from '@/pages/JobPage.vue'

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/jobs/results', component: JobResultsPage, name: 'JobResults' },
  { path: '/jobs/results/:id', component: JobPage, name: 'JobListing' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export class AppRoutes {
  static Home = 'Home'
  static JobResults = 'JobResults'
  static JobListing = 'JobListing'
}

export default router
