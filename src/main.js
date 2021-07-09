import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//mock数据
import "../mock/index";
//navie组件
import MyPlugin from "@/plugins/navie";
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";
createApp(App).use(store).use(router).use(MyPlugin).mount("#app");
