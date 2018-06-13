<template>
  <div class="wrapper">
    <div class="content">
      <img class="img" src="../../assets/icon/logo.svg"/>
      <button class="button position1" @click="jumpLoginPage">手机号登录</button>
      <button class="button position2" @click="jumpSingUpPage">注册</button>
    </div>
    <login-footer :footerText="footerText">
    </login-footer>
  </div>
</template>
<script>
import LoginFooter from './components/LoginFooter';

export default {
  name: 'Login',
  components: {
    LoginFooter,
  },
  data() {
    return {
      footerText: '其他登录方式',
    };
  },
  methods: {
    jumpLoginPage() {
      this.$router.push('/loginByPhone');
    },
    jumpSingUpPage() {
      this.$router.push('/signUp');
    },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width: 100%;
    position: relative;
    .content
      .img
        position: absolute;
        top:70px;
        left:150px;
        width :90px;
        height :90px;
      .button
        width:70%;
        line-height : 30px;
        color: #d43c33;
        border: 1px  #d43c33 solid;
        border-radius :15px;
        background-color :white;
      .position1
        position :absolute
        top:210px;
        left: 60px;
      .position2
        position :absolute
        top:260px;
        left: 60px;
</style>
