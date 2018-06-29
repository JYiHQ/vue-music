import request from '../utils/request';

// 获取歌手列表
export function getSingerList(item) {
  return request({
    url: '/artist/list',
    method: 'get',
    params: item,
  });
}

// 获取歌手专辑
export function getSingerAlbum(item) {
  return request({
    url: '/artist/album',
    method: 'get',
    params: item,
  });
}

// 获取歌手单曲
export function getSingerSongs(item) {
  return request({
    url: '/artists',
    method: 'get',
    params: item,
  });
}

// 获取歌手mv
export function getSingerMV(item) {
  return request({
    url: '/artist/mv',
    method: 'get',
    params: item,
  });
}

// 获取歌手描述
export function getSingerDescription(item) {
  return request({
    url: '/artist/desc',
    method: 'get',
    params: item,
  });
}
