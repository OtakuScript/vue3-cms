import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw, Router } from "vue-router"

import Login from "@/login/index.vue"
import Layout from "@/layout/index.vue"
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import User from "@/components/User.vue"
import NotFound from "@/components/NotFound.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    children: []
  },
  {
    path: "/logout",
    name: "Logout",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/about",
        name: "About",
        component: About,
        children: [
          {
            path: "/user/:id",
            name: "User",
            component: User
          }
        ]
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
