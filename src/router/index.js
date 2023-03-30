import { createRouter, createWebHistory } from 'vue-router'
import Contract from '../views/Contract.vue'
import Home from '../views/Home.vue'
import Contracts from '../components/Contracts.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/home',
      name: 'home',
      component: Home
    },
    {
      path:'/consultar',
      name: 'consultar',
      component: Contracts
    },
    {
      path:'/contrato/:id',
      name: 'contrato',
      component:Contract
    }
  ]
})

export default router
