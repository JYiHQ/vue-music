import { getHighQualitySong, getSongListType } from '../../api/songsList';

const songsList = {
  state: {
    songsList: [],
    songsType: [],
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
  },
};

export default songsList;
