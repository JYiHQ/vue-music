import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import home from './modules/home';
import songsDetails from './modules/songsListDetails';
import songList from './modules/songsList';
import rankingList from './modules/rankingList';
import comment from './modules/comment';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    login,
    home,
    songsDetails,
    songList,
    rankingList,
    comment,
  },
});
