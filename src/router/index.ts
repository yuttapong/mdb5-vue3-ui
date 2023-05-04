import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/bill/",
    component: () => import("../views/layouts/BasicLayout.vue"),
    children:
      [
        {
          path: "",
          name: "bill.index",
          redirect: (to: any) => {
            return { path: '/bill/dashboard' }
          },
        },
        {
          path: "dashboard",
          name: "bill.dashboard",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "bills",
          name: "bill.bills",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "quotations",
          name: "bill.quotations",
          component: () => import("../views/Home.vue"),
        },
      ]
  }
  ,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
