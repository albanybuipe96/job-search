import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import JobResultsPage from '@/pages/JobResultsPage.vue'

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/jobs/results', component: JobResultsPage, name: 'JobResults' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
