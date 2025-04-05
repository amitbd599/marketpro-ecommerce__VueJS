import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ScrollToTop from "vue-scroll-to-top";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const app = createApp(App);
app.use(router);
app.use(ScrollToTop, {
  duration: 1000,
});
app.mount("#app");
