import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Team from "@/views/Team.vue";
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/home/:id",
    name: "information",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
