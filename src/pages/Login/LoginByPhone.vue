<template>
  <div class="wrapper">
    <login-header :headerText="headerText"></login-header>
    <login-body :btnText="btnText"></login-body>
  </div>
</template>
<script>
import LoginHeader from './components/LoginHeader';
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
    };
  },
};
</script>
<style scoped lang="stylus">
</style>
