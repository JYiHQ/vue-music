import request from '../utils/request';

// 获取精品歌单
export function getHighQualitySong(items) {
  return request({
    url: '/top/playlist/highquality',
    method: 'get',
    params: items,
  });
}

// 获取歌单分类
export function getSongListType() {
  return request({
    url: '/playlist/catlist',
    method: 'get',
  });
}

// 获取指定类别的歌单
export function getSongByType(item) {
  return request({
    url: '/top/playlist',
    method: 'get',
    params: item,
  });
}
