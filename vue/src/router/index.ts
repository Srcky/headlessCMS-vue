import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AlarmiView from '@/views/AlarmiView.vue';
import VideoNadzorView from '@/views/VideoNadzorView.vue';
import FiskalneKaseView from '@/views/FiskalneKaseView.vue';
import RacunariOpremaView from '@/views/RacunariOpremaView.vue';
import OnamaView from '@/views/OnamaView.vue';
import NotFound from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/video-nadzor',
      name: 'videoNadzor',
      component: VideoNadzorView,
      meta: {
        category: 'cctv-equipment',
        imageGroup: 'cctvEquipment',
      },
    },
    {
      path: '/alarmi',
      name: 'alarmi',
      component: AlarmiView,
      meta: {
        category: 'alarm-equipment',
        imageGroup: 'alarmEquipment',
      },
    },
    {
      path: '/fiskalne-kase',
      name: 'fiskalneKase',
      component: FiskalneKaseView,
      meta: {
        category: 'pos-equipment',
        imageGroup: 'posEquipment',
      },
    },
    {
      path: '/racunari-i-oprema',
      name: 'racunariOprema',
      component: RacunariOpremaView,
      meta: {
        category: 'computer-equipment',
        imageGroup: 'computerEquipment',
      },
    },
    {
      path: '/o-nama',
      name: 'oNama',
      component: OnamaView,
    },
    { path: '/:notFound(.*)', name: 'notFound', component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
