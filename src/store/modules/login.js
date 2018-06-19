
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
  },
};

export default login;
