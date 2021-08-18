import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import createRoute from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import md5 from 'js-md5';

Vue.prototype.$md5 = md5;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

// let router = createRoute();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')