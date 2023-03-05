import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
