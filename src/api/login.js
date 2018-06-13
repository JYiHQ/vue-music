import request from '../utils/request';

// 用户手机号登陆

export function userLoginByPhone(items) {
  return request({
    url: '/login/cellphone',
    method: 'get',
    params: items,
  });
}
// 用户邮箱登陆
export function userLoginByEmail() {
  return request({
  });
}


// 获取用户信息
export function getUserInfo() {
  return request({
  });
}
