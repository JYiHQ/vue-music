import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import home from './modules/home';
import songsDetails from './modules/songsListDetails';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    login,
    home,
    songsDetails,
  },
});
