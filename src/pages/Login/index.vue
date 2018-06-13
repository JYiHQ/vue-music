<template>
  <div class="wrapper">
    <div class="content">
      <img class="img" src="../../assets/icon/logo.svg"/>
      <button class="button position1">手机号登录</button>
      <button class="button position2">注册</button>
    </div>
    <footer class="footer">
      <p class="text">其他登录方式</p>
      <div class="btn-wrapper">
        <i class="iconfont el-icon-jin-weixin weixin-btn"></i>
        <i class="iconfont el-icon-jin-qq qq-btn"></i>
        <i class="iconfont el-icon-jin-weibo weibo-btn"></i>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Login',
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
        top:190px;
        left: 60px;
      .position2
        position :absolute
        top:240px;
        left: 60px;
    .footer
      width: 375px;
      padding-bottom :80px;
      position :absolute;
      top:570px;
      .text
        font-size: 12px;
        position :absolute;
        left:155px;
      .qq-btn
        font-size :32px;
        color rgba(16,150,255,0.64);
        position :absolute;
        top:40px;
        left:175px;
      .weixin-btn
        font-size :36px;
        color:rgba(27,228,11,0.62);
        position :absolute;
        top:37px;
        left:110px;
      .weibo-btn
        font-size :32px;
        color:rgba(228,31,8,0.62);
        position :absolute;
        top:40px;
        left:240px;
</style>
