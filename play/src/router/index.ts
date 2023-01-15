import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Index = import('../App.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => Index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
