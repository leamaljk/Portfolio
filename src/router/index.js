import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SeeMore from '../components/SeeMore.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
   {
    path: '/seeMore',
    name: 'SeeMore',
    component: SeeMore
  }
  // If AboutMe is a section in HomePage, no need for a separate route here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Return the position that we should scroll to
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
