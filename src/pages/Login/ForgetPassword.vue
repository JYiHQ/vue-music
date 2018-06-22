<template>
  <div class="wrapper">
    <login-header :headerText="headerText">
    </login-header>
    <login-body :btnText="btnText"
                :forgetPassword="forgetPassword"
                :placeholder="placeholder"
    >
    </login-body>
  </div>
</template>
<script>
import LoginHeader from '../../components/header/VHeader';
import LoginBody from './components/LoginBody';

export default {
  name: 'ForgetPassword',
  components: {
    LoginBody,
    LoginHeader,
  },
  data() {
    return {
      headerText: '忘记密码',
      btnText: '下一步',
      forgetPassword: false,
      placeholder: '设置登录密码，不少于6位',
    };
  },
};
</script>
