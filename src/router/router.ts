import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main-page",
      component: () => import("../pages/MainView.vue"),
    },
    {
      path: "/convert",
      name: "convert-page",
      component: () => import("../pages/ConvertationView.vue"),
    },
  ],
});

export default router;
