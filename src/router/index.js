import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartQuery.vue'
import Identify from '../views/PrivateInfo.vue'
import CovidCondition from '../views/CovidCondition.vue'
import VaccinateCondition from '../views/VaccinateCondition.vue'
import Suggestions from '../views/Suggestions.vue'
import ThankYou from '../views/ThankYou.vue'

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
    },
    {
      path: '/suggestions',
      component: Suggestions
    },
    {
      path: '/thank-you',
      component: ThankYou
    }
  ]
})

export default router
