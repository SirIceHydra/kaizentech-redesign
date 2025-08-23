import HomeView from '@/views/HomeView.vue';
import HelpView from '@/views/HelpView.vue';
import HelpGettingStartedView from '@/views/HelpGettingStartedView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    // Home View Routes
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: { name: 'home' }
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView,
    },
    {
      path: '/help/getting-started',
      name: 'help-getting-started',
      component: HelpGettingStartedView,
    }
  ],
});

export default router;