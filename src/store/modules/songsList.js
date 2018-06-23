import { getHighQualitySong, getSongListType, getSongByType } from '../../api/songsList';

const songsList = {
  state: {
    songsList: [],
    songsType: [],
    btnName: '全部歌单',
  },
  mutations: {
    // 获取歌单列表
    GET_SONGS_LIST(state, payload) {
      state.songsList = payload;
    },
    // 获取歌单全部分类
    GET_SONGS_TYPE(state, payload) {
      state.songsType = payload;
    },
    // 更改按钮中的文字
    CHANGE_NAME(state, payload) {
      state.btnName = payload;
    },
  },
  actions: {
    // 获取歌单列表
    async get_highQualitySong({ commit }, items) {
      const response = await getHighQualitySong(items);
      commit('GET_SONGS_LIST', response.data.playlists);
    },
    // 获取歌单分类
    async get_songsType({ commit }) {
      const response = await getSongListType();
      commit('GET_SONGS_TYPE', response.data.sub);
    },
    // 获取指定类型的歌单
    async get_songByType({ commit }, items) {
      const response = await getSongByType(items);
      commit('GET_SONGS_LIST', response.data.playlists);
    },
  },
};

export default songsList;
