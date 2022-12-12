import { createRouter, createWebHistory } from "vue-router";

const files = import.meta.globEager("./modules/*.route.ts");
const routes = Object.entries(files).reduce((prev, [key, component]) => {
  prev.push(...component.default);
  return prev;
}, []);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: () => import("@/views/home/index.vue"),
//   },
// ];

export default createRouter({
  history: createWebHistory(),
  routes,
});
