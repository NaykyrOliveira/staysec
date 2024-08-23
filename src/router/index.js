import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroductionView from '@/views/IntroductionView.vue'
import ThreatsView from '@/views/ThreatsView.vue'
import ProtectionView from '@/views/ProtectionView.vue'
import NavigationView from '@/views/NavigationView.vue'
import PrivacyView from '@/views/PrivacyView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about', 
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: IntroductionView
  },
  {
    path: '/threats',
    name: 'threats',
    component: ThreatsView
  },
  {
    path: '/protection',
    name: 'protection',
    component: ProtectionView
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: NavigationView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
