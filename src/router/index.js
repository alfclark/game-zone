import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/rock-paper-scissors",
    name: "rock-paper-scissors",
    component: () => import("../views/RockPaperScissors.vue"),
  },
  {
    path: "/tetris",
    name: "tetris",
    component: () => import("../views/TetrisView.vue"),
  },
  {
    path: "/tic-tac-toe",
    name: "tic-tac-toe",
    component: () => import("../views/TicTacToe.vue"),
  },
  {
    path: "/ping-pong",
    name: "ping-pong",
    component: () => import("../views/PingPong.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
