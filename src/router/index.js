import Vue from 'vue';
import Router from 'vue-router';
import Login from '../pages/Login/index';
import LoginByPhone from '../pages/Login/LoginByPhone';
import ForgetPassword from '../pages/Login/ForgetPassword';
import SignUp from '../pages/Login/SignUp';
import Home from '../pages/Home/index';
import Search from '../pages/Search/index';
import SongsListDetails from '../pages/SongsListDetails/index';
import SongsList from '../pages/SongsList/index';
import SongsType from '../pages/SongsType/index';
import RankingList from '../pages/RankingList/index';

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
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword,
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/listDetails',
      name: 'SongsListDetails',
      component: SongsListDetails,
    },
    {
      path: '/songsList',
      name: 'SongsList',
      component: SongsList,
    },
    {
      path: '/songsType',
      name: 'SongsType',
      component: SongsType,
    },
    {
      path: '/rankingList',
      name: 'RankingList',
      component: RankingList,
    },
  ],
});
