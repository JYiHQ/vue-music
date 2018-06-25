import { getCoverImage } from '../../api/rankingList';

const rankingList = {
  state: {
    // 飙升榜
    upList: [],
    newSongList: [],
    originalList: [],
    hotSongList: [],
    appreciatedList: [],
    singerList: [],
    coverImageList: [],
  },
  mutations: {
    GET_IMAGE_LIST(state, payload) {
      state.coverImageList = payload;
    },
    GET_UP(state, payload) {
      state.upList = payload;
    },
  },
  actions: {
    // 获取排行榜封面
    async get_coverImage({ commit }) {
      const response = await getCoverImage();
      commit('GET_IMAGE_LIST', response.data.list);
    },
  },
};

export default rankingList;
