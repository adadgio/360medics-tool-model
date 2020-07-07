import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import EntriesListPage from "../views/EntriesListPage.vue";
import Imagerie from '../views/Imagerie.vue'
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list/:id",
      name: "EntriesListPage",
      component: EntriesListPage,
  },
  {
    path: "/img/:id",
    name: 'Imagerie',
    component: Imagerie
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
