import request from '../utils/request';

// 获取最新专辑
export function getLatestDisc() {
  return request({
    url: '/top/album',
    method: 'get',
  });
}

// 获取专辑歌曲
export function getDiscSong(item) {
  return request({
    url: '/album',
    method: 'get',
    params: item,
  });
}
