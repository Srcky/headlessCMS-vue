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
    },
    {
      path: '/alarmi',
      name: 'alarmi',
      component: AlarmiView,
    },
    {
      path: '/video-nadzor',
      name: 'videoNadzor',
      component: VideoNadzorView,
    },
    {
      path: '/fiskalne-kase',
      name: 'fiskalneKase',
      component: FiskalneKaseView,
    },
    {
      path: '/racunari-i-oprema',
      name: 'racunariOprema',
      component: RacunariOpremaView,
    },
    {
      path: '/o-nama',
      name: 'oNama',
      component: OnamaView,
    },
  ],
});

export default router;
