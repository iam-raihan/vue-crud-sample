import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import PetView from "./views/PetView.vue";
import PetEdit from "./views/PetEdit.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cats",
      name: "cats",
      component: PetView,
      props: { petType: "Cats" }
    },
    {
      path: "/dogs",
      component: PetView,
      props: { petType: "Dogs" }
    },
    {
      path: "/:type/:id/edit",
      name: "pet-edit",
      component: PetEdit,
      props: true,
      meta: { isValidPetType: true }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "not-found",
      name: "not-found",
      component: () => import("./views/PageNotFound.vue")
    },
    {
      path: "*",
      component: () => import("./views/PageNotFound.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isValidPetType)) {
    switch (to.params.type) {
      case "cats":
      case "dogs":
        next();
        break;
      default:
        next({ name: "not-found" });
    }
  } else {
    next();
  }
});

export default router;
