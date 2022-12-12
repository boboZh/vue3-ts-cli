import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import useComponent from "./components/index";
import router from "./router/index";

const app = createApp(App);
app.use(createPinia()).use(router).use(useComponent);
app.mount("#app");
