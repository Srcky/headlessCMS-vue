import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AlarmiView from '@/views/AlarmiView.vue';
import VideoNadzorView from '@/views/VideoNadzorView.vue';
import FiskalneKaseView from '@/views/FiskalneKaseView.vue';
import RacunariOpremaView from '@/views/RacunariOpremaView.vue';
import OnamaView from '@/views/OnamaView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        pageId: 1,
      },
    },
    {
      path: '/video-nadzor',
      name: 'videoNadzor',
      component: VideoNadzorView,
      meta: {
        pageId: 2,
      },
    },
    {
      path: '/alarmi',
      name: 'alarmi',
      component: AlarmiView,
      meta: {
        pageId: 3,
      },
    },
    {
      path: '/fiskalne-kase',
      name: 'fiskalneKase',
      component: FiskalneKaseView,
      meta: {
        pageId: 4,
      },
    },
    {
      path: '/racunari-i-oprema',
      name: 'racunariOprema',
      component: RacunariOpremaView,
      meta: {
        pageId: 5,
      },
    },
    {
      path: '/o-nama',
      name: 'oNama',
      component: OnamaView,
      meta: {
        pageId: 6,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
