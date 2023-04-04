import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';

// 根据文件生成路由
const getRoutes = () => {
  const files = import.meta.glob('../views/*.vue');
  return Object.entries(files).map(([fileName, module]) => {
    const name = fileName.match(/\.\.\/views\/([^/]+?)\.vue/i)?.[1];
    return {
      path: '/' + name,
      component: module,
    };
  });
};
console.log(getRoutes());

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
  ],
});

export default router;
