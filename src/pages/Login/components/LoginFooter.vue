<template>
  <footer class="footer">
    <p class="text">{{footerText}}</p>
    <div class="btn-wrapper">
      <i class="iconfont el-icon-jin-weixin weixin-btn"></i>
      <i class="iconfont el-icon-jin-qq qq-btn"></i>
      <i class="iconfont el-icon-jin-weibo weibo-btn"></i>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'LoginFooter',
  props: ['footerText'],
};
</script>
<style scoped lang="stylus">
  .footer
    width: 375px;
    padding-bottom :80px;
    position :absolute;
    top:550px;
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
      color:rgba(13,213,25,0.9);
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
