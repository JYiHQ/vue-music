import { getLatestDisc, getAlbumSong } from '../../api/latestDisc';

const latestDisc = {
  state: {
    DiscList: [],
    albumSongList: [],
    album: {},
  },
  mutations: {
    // 获取最新专辑
    GET_DISC(state, payload) {
      state.DiscList = payload;
    },
    // 获取专辑中的歌曲
    GET_ALBUM(state, payload) {
      state.albumSongList = payload;
    },
    // 获取专辑信息
    GET_ALBUM_INFO(state, payload) {
      Object.assign(state.album, payload);
    },
  },
  getters: {
    handleArtistName(state) {
      const data = state.DiscList;
      data.forEach((item) => {
        if (item.artists.length > 1) {
          const arr = [];
          const obj = {
            artistName: '',
          };
          item.artists.forEach((list) => {
            arr.push(list.name);
          });
          obj.artistName = arr.join(' / ');
          Object.assign(item, obj);
        } else {
          const obj2 = {
            artistName: '',
          };
          obj2.artistName = item.artists[0].name;
          Object.assign(item, obj2);
        }
      });
      return data;
    },
  },
  actions: {
    async get_latestDisc({ commit }) {
      const response = await getLatestDisc();
      commit('GET_DISC', response.data.albums);
    },
    async get_albumSong({ commit }, item) {
      const response = await getAlbumSong(item);
      commit('GET_ALBUM_INFO', response.data.album);
      commit('GET_ALBUM', response.data.songs);
    },
  },
};

export default latestDisc;
