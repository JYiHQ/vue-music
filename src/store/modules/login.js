import { userLoginByPhone } from '../../api/login';

const login = {
  state: {
    userInfo: {},
    message: {
      code: null,
      msg: '',
    },
  },
  mutations: {
    // 获取用户信息
    GET_USER_INFO(state, payload) {
      Object.assign(state.userInfo, payload);
    },
  },
  actions: {
    // 手机号登录
    async login_byPhone(items) {
      const result = await userLoginByPhone(items);
    },
  },
};

export default login;
