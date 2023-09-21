import { createApp } from "vue";
import App from "./App.vue";

import router from "./application/router";
import store from "./application/store";

createApp(App).use(store).use(router).mount("#app");
