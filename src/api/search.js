import request from '../utils/request';

// 根据关键字搜索
export function searchByKeyword(items) {
  return request({
    url: '/search',
    method: 'get',
    params: items,
  });
}

// 获取热搜列表
export function getSingerList() {
}
