import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import home from './modules/home';
import songsDetails from './modules/songsListDetails';
import songList from './modules/songsList';
import rankingList from './modules/rankingList';
import latestDisc from './modules/latestDisc';
import hotSingers from './modules/hotSingers';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    login,
    home,
    songsDetails,
    songList,
    rankingList,
    latestDisc,
    hotSingers,
  },
});
