<template>
  <div class="wrapper">
    <login-header :headerText="headerText">
    </login-header>
    <login-body :btnText="btnText"
                :forgetPassword="forgetPassword"
                :placeholder="placeholder"
                @confirm="handleConfirm"
    >
    </login-body>
  </div>
</template>
<script>
import LoginHeader from '../../components/header/VHeader';
import LoginBody from './components/LoginBody';

export default {
  name: 'LoginByPhone',
  components: {
    LoginHeader,
    LoginBody,
  },
  data() {
    return {
      headerText: '手机号登录',
      btnText: '登录',
      forgetPassword: true,
      placeholder: '请输入密码',
    };
  },
  methods: {
    handleConfirm() {
      // console.log(items);
      // this.$store.dispatch('login_byPhone', items);
      this.$router.push('/home');
    },
  },
};
</script>
<style scoped lang="stylus">
</style>
