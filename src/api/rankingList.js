import request from '../utils/request';

// 获取官方排行榜
export function getOfficialRankingList(item) {
  return request({
    url: '/top/list',
    method: 'get',
    params: item,
  });
}

// 获取排行榜的封面
export function getCoverImage() {
  return request({
    url: '/toplist/artist',
    method: 'get',
  });
}
