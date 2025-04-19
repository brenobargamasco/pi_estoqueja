import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  // Adicione outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;