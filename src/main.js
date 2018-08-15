import Vue from 'vue'
import App from './App.vue'
//引入公共scss,创建项目时必须用scss
import './assets/css/basic.scss'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Contents from './components/Contents.vue'

const routes = [
  {path: '/contents', component: Contents}
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
