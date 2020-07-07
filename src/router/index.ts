import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import EntriesListPage from "../views/EntriesListPage.vue";
import ItemPage from '../views/ItemPage.vue'
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list/:eid",
      name: "EntriesListPage",
      component: EntriesListPage,
  },
  {
    path: "/list/:eid/item/:iid",
    name: 'ItemPage',
    component: ItemPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
