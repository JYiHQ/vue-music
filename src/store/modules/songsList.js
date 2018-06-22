import { getHighQualitySong } from '../../api/songsList';

const songsList = {
  state: {
    songsList: [],
  },
  mutations: {
    // 获取歌单列表
    GET_SONGS_LIST(state, payload) {
      state.songsList = payload;
    },
  },
  actions: {
    async get_highQualitySong({ commit }, items) {
      const response = await getHighQualitySong(items);
      commit('GET_SONGS_LIST', response.data.playlists);
    },
  },
};

export default songsList;
