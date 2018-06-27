import { getLatestDisc } from '../../api/latestDisc';

const latestDisc = {
  state: {
    DiscList: [],
  },
  mutations: {
    // 获取最新专辑
    GET_DISC(state, payload) {
      state.DiscList = payload;
    },
  },
  actions: {
    async get_latestDisc({ commit }) {
      const response = await getLatestDisc();
      commit('GET_DISC', response.data.albums);
    },
  },
};

export default latestDisc;
