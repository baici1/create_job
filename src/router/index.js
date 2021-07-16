import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },

  {
    path: "/home/:id",
    name: "information",
    component: () => import("@/views/Game_data"),
  },
  {
    path: "/match/:id",
    name: "match",
    component: () => import("@/views/Match"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("@/views/Team"),
  },
  {
    path: "/team/:id",
    name: "Detail",
    component: () => import("@/views/Team_Detail"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
