import { getSingerList, getSingerAlbum, getSingerSongs, getSingerMV, getSingerDescription } from '../../api/hotSingers';

const hotSingers = {
  state: {
    singerList: [],
    headerText: '',
    singerAlbum: [],
    singerSongs: [],
    singerMV: [],
    singerDESC: [],
    singerInfo: {},
  },
  mutations: {
    // 获取歌手列表
    GET_SINGER_LIST(state, payload) {
      state.singerList = payload;
    },
    // 获取列表头部标题
    GET_HEADER_TEXT(state, payload) {
      state.headerText = payload;
    },
    // 获取歌手的专辑
    GET_SINGER_ALBUM(state, payload) {
      state.singerAlbum = payload;
    },
    // 获取歌手的单曲
    GET_SINGER_SONGS(state, payload) {
      state.singerSongs = payload;
    },
    // 获取歌手mv
    GET_SINGER_MV(state, payload) {
      state.singerMV = payload;
    },
    // 获取歌手介绍
    GET_SINGER_DESCRIPTION(state, payload) {
      state.singerDESC = payload;
    },
    // 获取歌手信息
    GET_SINGER_INFO(state, payload) {
      Object.assign(state.singerInfo, payload);
    },
  },
  actions: {
    async get_singerList({ commit }, item) {
      const response = await getSingerList(item);
      commit('GET_SINGER_LIST', response.data.artists);
    },
    async get_singerAlbum({ commit }, item) {
      const response = await getSingerAlbum(item);
      commit('GET_SINGER_ALBUM', response.data.hotAlbums);
    },
    async get_singerSong({ commit }, item) {
      const response = await getSingerSongs(item);
      commit('GET_SINGER_SONGS', response.data.hotSongs);
      commit('GET_SINGER_INFO', response.data.artist);
    },
    async get_singerMV({ commit }, item) {
      const response = await getSingerMV(item);
      commit('GET_SINGER_MV', response.data.mvs);
    },
    async get_singerDescription({ commit }, item) {
      const response = await getSingerDescription(item);
      commit('GET_SINGER_DESCRIPTION', response.data.introduction);
    },
  },
};

export default hotSingers;
