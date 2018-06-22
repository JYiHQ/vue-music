<template>
  <div class="wrapper">
    <login-header :headerText="headerText">
    </login-header>
    <login-body :btnText="btnText"
                :forgetPassword="forgetPassword"
                :placeholder="placeholder">
    </login-body>
    <login-footer :footerText="footerText">
    </login-footer>
  </div>
</template>
<script>
import LoginHeader from '../../components/header/VHeader';
import LoginBody from './components/LoginBody';
import LoginFooter from './components/LoginFooter';

export default {
  name: 'SignUp',
  components: {
    LoginBody,
    LoginHeader,
    LoginFooter,
  },
  data() {
    return {
      headerText: '手机号注册',
      btnText: '下一步',
      forgetPassword: false,
      placeholder: '设置登录密码，不少于6位',
      footerText: '其他注册方式',
    };
  },
};
</script>
<style scoped lang="stylus">
</style>
