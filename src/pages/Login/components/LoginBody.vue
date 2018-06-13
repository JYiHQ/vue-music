<template>
  <div class="body">
    <div class="input-wrapper">
      <img class="img" src="../../../assets/icon/phone.svg"/>
      <span class="span" :class="{active: isActive}">+ 86</span>
      <input autofocus type="number" class="input" placeholder="请输入手机号" v-model="info.phoneNumber"
             @input="handleInput" />
      <img v-show="isShow" @click="cleanInput" class="img-cancel"
           src="../../../assets/icon/cancel.svg">
    </div>
    <div class="input-wrapper">
      <img class="img" src="../../../assets/icon/lock.svg"/>
      <input type="password" class="input input-position" :placeholder="placeholder"
             @focus="handleFocus" v-model="info.password"/>
      <span class="text" @click="handleJump" v-show="forgetPassword">忘记密码？</span>
    </div>
    <button class="btn" @click="handleConfirm">{{btnText}}</button>
  </div>
</template>
<script>
export default {
  name: 'LoginBody',
  props: ['btnText', 'forgetPassword', 'placeholder'],
  data() {
    return {
      isActive: false,
      isShow: false,
      info: {
        phoneNumber: '',
        password: '',
      },
    };
  },
  methods: {
    handleInput() {
      this.isActive = true;
      this.isShow = true;
      if (this.phoneNumber === '') {
        this.isActive = false;
        this.isShow = false;
      }
    },
    cleanInput() {
      this.phoneNumber = ' ';
      this.isActive = false;
      this.isShow = false;
    },
    handleFocus() {
      this.isShow = false;
    },
    handleJump() {
      this.$router.push('/forgetPassword');
    },
    handleConfirm() {
      this.$emit('confirm', this.info);
    },
  },
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
      border-bottom :1px solid #C7C5C1;
      .img
        width :30px;
        height :30px;
        position :absolute;
        top:5px;
      .img-cancel
        position :absolute;
        top:15px;
        left: 315px;
      .span
        color :#C7C5C1;
        font-size :16px;
        position :absolute;
        top:13px;
        left:30px;
      .active
        color: #333;
      .input
        line-height :30px;
        font-size :18px;
        position :relative;
        top:10px;
        left:80px;
        caret-color: #d43c33;
        padding :0;
      .input-position
        position :relative;
        top:10px;
        left:50px;
      .text
        font-size :14px;
        color:rgba(16,123,255,0.51);
        position :relative
        left:45px;
        top:5px;
    .btn
      width :90%;
      line-height :35px;
      margin-top :20px;
      position :absolute;
      left :17px;
      color:white;
      background-color :#d43c33;
      border-radius :19px;
    ::-webkit-input-placeholder
      color:#dadad3;
      font-size :16px;
</style>
