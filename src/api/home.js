import request from '../utils/request';

// 获取首页轮播图
export function getSowingMap() {
  return request({
    url: '/banner',
    method: 'get',
  });
}

// 获取推荐歌单
export function getSongList() {
  return request({
    url: '/personalized',
    method: 'get',
  });
}

// 获取推荐电台
export function getRadioStationList() {
  return request({
    url: '/personalized/djprogram',
    method: 'get',
  });
}

// 获取推荐音乐列表
export function getMusicList() {
  return request({
    url: '/personalized/newsong',
    method: 'get',
  });
}

// 私人FM
export function personalFM() {
  return request({
    url: '/personal_fm',
    method: 'get',
  });
}
