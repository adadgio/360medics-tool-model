import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import somePics from "../components/somePics.vue";
import displayPics from "../components/displayPics.vue";
import scoreObs from "../components/scoreObs.vue";
import scoreImc from "../components/scoreImc.vue";
import scoreVSM from "../components/scoreVSM.vue";
import medocLink from "../components/medocLink.vue";
import cro from "../components/cro/cro.vue";
import croList from "../components/cro/croList.vue";
import coelioList from "../components/cro/coelioList.vue";
import cro01 from "../components/cro/coelio/cro01.vue";
import cro02 from "../components/cro/coelio/cro02.vue";
import cro03 from "../components/cro/coelio/cro03.vue";
import { component } from "vue/types/umd";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // PHOTOS MEDICALES
  {
    path: "/somePics",
    name: "somePics",
    component: somePics,
  },
  {
    path: "/somePics/:id",
    name: "somePics",
    component: displayPics,
  },
  // SCORING EXEMPLES
  {
    path: "/scoreObs",
    component: scoreObs,
    // children: [
    //   {path: 'scoreObs/imc', component: scoreImc},
    //   {path :'scoreObs/VSM', component: scoreVSM}
    // ]
  },
  {
    path: "/scoreObs/imc",
    name: "imc",
    component: scoreImc,
  },
  {
    path: "/scoreObs/VSM",
    name: "vsm",
    component: scoreVSM,
  },
  // LIEN EXTERNE VERS MEDOCS
  {
    path: "/medocLink",
    name: "medocLink",
    component: medocLink,
  },
  // COMPTE RENDU OPERATOIRE
  {
    path: "/cro",
    name: "cro",
    component: cro,
    children: [
      { path: "", component: croList },
      { path: "/croList/coelio", component: coelioList },
      { path: "/croList/coelio/annexectomie", component: cro01 },
      { path: "/croList/coelio/curages", component: cro02 },
      { path: "/croList/coelio/hysterectomie-celio", component: cro03 },
    ],
  },
  // // {
  // //   path: "/croList/coelio",
  // //   component: coelioList,
  // //   // children : [{ path: "/annexectomie", component: cro01}]
  // // },
  // {
  //   path: "/croList/coelio/annexectomie",
  //   component: cro01,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
