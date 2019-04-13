// 1、全局引入项目所有依赖
import Vue from "vue";			
import Router from 'vue-router';		// 路由
import ElementUI from 'element-ui';	// ui框架
import 'element-ui/lib/theme-chalk/index.css';	// ui框架样式
import App from "./App.vue";
import { routes } from "./router";
import store from "./store/index";
import 'styles/reset.css';	//	引入初始化样式
import 'styles/common.css';	// 引入公共样式

Vue.use(ElementUI);
Vue.use(Router);
Vue.config.productionTip = false;

const vm =  new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

export default vm;
