import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import User from "@/components/User.vue"
import NotFound from "@/components/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/user/:id",
    name: "User",
    component: User
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
