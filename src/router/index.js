import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/RPS",
    name: "RPS",
    component: () => import("../views/RockPaperScissors.vue"),
  },
  {
    path: "/tetris",
    name: "tetris",
    component: () => import("../views/TetrisView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
