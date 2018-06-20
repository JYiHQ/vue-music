import request from '../utils/request';

// 获取歌单详情
export function getSongsListDetails(item) {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params: item,
  });
}

// 获取歌曲详情
export function getSongDetail(item) {
  return request({
    url: '/song/detail',
    method: 'get',
    params: item,
  });
}
