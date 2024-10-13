import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import MainUser from "../views/MainUser.vue";
import MainAdmin from "../views/MainAdmin.vue";
import Reg from "../views/Reg.vue";
import AboutUs from "../components/AboutUs.vue";
import Activity from "../components/ActivityPage.vue";
import MainPageUser from "../components/MainPageUser.vue";
import Life from "../components/Life.vue";
import FirebaseAuth from "../components/FirebaseAuth.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Login,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/firebase",
      name: "firebase",
      component: FirebaseAuth,
    },
    {
      path: "/reg",
      name: "reg",
      component: Reg,
    },
    {
      path: "/mainuser",
      name: "mainuser",
      component: MainUser,
      children: [
        {
          path: "/aboutus",
          component: AboutUs,
        },
        {
          path: "/activity",
          component: Activity,
        },
        {
          path: "/mainpageuser",
          component: MainPageUser,
        },
        {
          path: "/life",
          component: Life,
        },
      ],
    },
    {
      path: "/mainadmin",
      name: "mainadmin",
      component: MainAdmin,
    },
  ],
});

export default router;
