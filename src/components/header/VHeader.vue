<template>
  <div class="header-wrapper">
    <div class="header">
      <img @click="handleBackPage" class="img" src="../../assets/icon/jiantouzuo.svg"/>
      <span class="span">{{headerText}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VHeader',
  props: ['headerText'],
  methods: {
    handleBackPage() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="stylus">
  .header-wrapper
    width 100%
    position fixed
    top 0
    z-index 999
    .header
      width :100%;
      height :44px;
      background-color :#d43c33;
      position :relative;
      .img
        width: 30px;
        height :30px;
        position :absolute;
        left: 15px;
        top:7px;
      .span
        color :white;
        position :absolute;
        top:10px;
        left :60px
</style>
