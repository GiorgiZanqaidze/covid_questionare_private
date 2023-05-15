import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartQuery.vue'
import Identify from '../views/PrivateInfo.vue'
import CovidCondition from '../views/CovidCondition.vue'
import VaccinateCondition from '../views/VaccinateCondition.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: StartView
    },
    {
      path: '/identify',
      component: Identify
    },
    {
      path: '/covid-condition',
      component: CovidCondition
    },
    {
      path: '/vaccine-condition',
      component: VaccinateCondition
    }
  ]
})

export default router
