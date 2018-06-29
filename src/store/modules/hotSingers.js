import { getSingerList } from '../../api/hotSingers';

const hotSingers = {
  state: {
    singerList: [],
    headerText: '',
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
  },
  actions: {
    async get_singerList({ commit }, item) {
      const response = await getSingerList(item);
      commit('GET_SINGER_LIST', response.data.artists);
    },
  },
};

export default hotSingers;
