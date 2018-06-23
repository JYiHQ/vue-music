import { getSongList, getMusicList, getRadioStationList, getSowingMap } from '../../api/home';

const home = {
  state: {
    response: {
      code: null,
      mag: '',
    },
    // 推荐歌单
    songList: [],
    // 私人FM
    personalFM: [],
    // 最新音乐
    latestMusic: [],
    // 推荐电台
    radioStation: [],
    // 轮播图
    sowingMap: [],
  },
  mutations: {
    // 获取响应信息
    GET_RESPONSE(state, payload) {
      Object.assign(state.response, payload);
    },
    // 获取推荐歌单
    GET_SONG(state, payload) {
      state.songList = payload;
    },
    // 获取最新单曲
    GET_MUSIC(state, payload) {
      state.latestMusic = payload;
    },
    // 获取推荐电台
    GET_RADIO(state, payload) {
      state.radioStation = payload;
    },
    // 获取首页轮播图
    GET_MAP(state, payload) {
      state.sowingMap = payload;
    },
  },
  actions: {
    // 获取推荐歌单的列表
    async get_songsList({ commit }) {
      const data = await getSongList();
      commit('GET_SONG', data.data.result);
    },
    // 获取最新音乐
    async get_latestMusic({ commit }) {
      const data = await getMusicList();
      commit('GET_MUSIC', data.data.result);
    },
    // 获取推荐电台
    async get_radioStation({ commit }) {
      const data = await getRadioStationList();
      commit('GET_RADIO', data.data.djRadios);
    },
    // 获取首页轮播图
    async get_sowingMap({ commit }) {
      const data = await getSowingMap();
      commit('GET_MAP', data.data.banners);
    },
  },
};

export default home;
