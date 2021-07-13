import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("@/views/Team.vue"),
  },
  {
    path: "/home/:id",
    name: "information",
    component: () => import("@/views/Home"),
  },
  {
    path: "/match/:id",
    name: "match",
    component: () => import("@/views/Match"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
