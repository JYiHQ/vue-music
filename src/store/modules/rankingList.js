import { getCoverImage, getOfficialRankingList } from '../../api/rankingList';

const rankingList = {
  state: {
    rankingListSong: [],
    coverImageList: [],
  },
  mutations: {
    GET_IMAGE_LIST(state, payload) {
      state.coverImageList = payload;
    },
    GET_SONG(state, payload) {
      state.rankingListSong.push(payload);
    },
    // 清空rankingListSong
    CLEAN_SONG(state) {
      state.rankingList = [];
    },
  },
  getters: {
    // 处理返回的榜单数据
    handleRankingListData(state) {
      const songData = state.rankingListSong;
      songData.forEach((item) => {
        item.splice(3, item.length - 1);
      });
      return songData;
    },
  },
  actions: {
    // 获取排行榜封面
    async get_coverImage({ commit }) {
      const response = await getCoverImage();
      commit('GET_IMAGE_LIST', response.data.list);
    },
    // 获取官方榜的歌曲
    async get_officialRankingList({ commit }, item) {
      const response = await getOfficialRankingList(item);
      commit('GET_SONG', response.data.playlist.tracks);
    },
  },
};

export default rankingList;
