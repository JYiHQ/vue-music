import { getListComment } from '../../api/songsListDetails';

const comment = {
  state: {
    comments: {},
  },
  mutations: {
    // 获取所有评论
    GET_COMMENTS(state, payload) {
      Object.assign(state.comments, payload);
    },
  },
  actions: {
    // 获取评论
    async get_listComment({ commit }, item) {
      const response = await getListComment(item);
      commit('GET_COMMENTS', response.data);
    },
  },
};

export default comment;
