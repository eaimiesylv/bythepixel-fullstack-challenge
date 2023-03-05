import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/WeatherDetailView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: 'Weather detail Page',
      }
    },
    {
      path: '/users',
      name: 'users',
      component:()=> import('../views/HomeView.vue'),
      meta: {
        title: 'User Page',
      }
    },
    {
      path: '/about',
      name: 'about',
      component:()=> import('../views/AboutView.vue'),
      meta: {
        title: 'About Page',
      }
    },
  ],
});

export default router;
