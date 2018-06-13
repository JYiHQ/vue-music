import Vue from 'vue';
import Router from 'vue-router';
import Login from '../pages/Login/index';
import LoginByPhone from '../pages/Login/LoginByPhone';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/loginByPhone',
      name: 'LoginByPhone',
      component: LoginByPhone,
    },
  ],
});
