<template>
  <transition name="fade">
    <div class="toast" v-show="toastShow">
      <span class="toast-text">{{toastText}}</span>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    toastText: {
      default: '这是一个toast',
      type: String,
    },
  },
  data() {
    return {
      toastShow: false,
    };
  },
};
</script>
<style scoped lang="stylus">
  .fade-enter-active, .fade-leave-active
    transition : opacity .3s;
  .fade-enter, .fade-leave-to
    opacity : 0;
  .toast
    position: fixed;
    left: 50%;
    top: 80%;
    max-width: 80%;
    padding: 20px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 9999;
    transform: translate(-50%, -50%);
    .toast-text
      font-size: 14px;
      display: block;
      text-align: center;
</style>
