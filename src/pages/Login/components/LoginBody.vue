<template>
  <div class="body">
    <div class="input-wrapper">
      <img class="img" src="../../../assets/icon/phone.svg"/>
      <span class="span">+ 86</span>
      <input type="number" class="input"/>
    </div>
    <div class="input-wrapper">
      <img class="img" src="../../../assets/icon/lock.svg"/>
      <input class="input"/>
      <span class="text">忘记密码？</span>
    </div>
    <button class="btn">{{btnText}}</button>
  </div>
</template>
<script>
export default {
  name: 'LoginBody',
  props: ['btnText'],
};
</script>
<style scoped lang="stylus">
  .body
    width :100%;
    padding-bottom :200px;
    position :relative;
    margin-top :50px;
    .input-wrapper
      width :90%;
      height :40px;
      margin-bottom :5px;
      position :relative;
      left :17px;
      .img
        width :30px;
        height :30px;
        position :absolute;
        top:5px;
      .span
        color :rgba(213,209,211,0.55);
        position :absolute;
        top:7px;
        left:30px;
      .input
        line-height :30px;
        font-size :18px;
        border-bottom :1px solid rgba(213,209,211,0.55);
        position :relative;
        top:3px;
        left:80px;
        caret-color: #d43c33;
        padding :0;
      .text
        font-size :14px;
        color:rgba(16,123,255,0.51);
        position :relative
        left:40px;
    .btn
      width :90%;
      line-height :35px;
      margin-top :20px;
      position :absolute;
      left :17px;
      color:white;
      background-color :#d43c33;
      border-radius :19px;
</style>
