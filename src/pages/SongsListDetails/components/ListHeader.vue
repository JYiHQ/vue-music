<template>
  <div class="headerWrapper">
    <div class="header">
      <img @click="handleBack" class="imgLeft" src="../../../assets/icon/jiantouzuo.svg"/>
      <span class="headerText">{{text}}</span>
      <div class="description">{{description}}</div>
      <img class="img" src="../../../assets/icon/search.svg"/>
      <img class="img2" src="../../../assets/icon/more.svg"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListHeader',
  data() {
    return {
      text: '歌单',
      description: '编辑推荐：想要和你一起幸福的走下去',
    };
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="stylus">
  .headerWrapper
    width 96%;
    height 58px;
    padding 0;
    position fixed;
    top 0;
    .header
      position relative;
      .imgLeft
        width 30px;
        height 30px;
        position absolute;
        top 14px;
        left 15px;
      .headerText
        color white;
        position absolute;
        top 10px;
        left 60px;
      .description
        color: rgba(245,245,243,0.83);
        font-size 8px;
        position absolute;
        top 30px;
        left 60px;
      .img
        width 30px;
        height 30px;
        position absolute;
        top 15px;
        left 290px;
      .img2
        width 25px;
        height 25px;
        position absolute;
        top 17px;
        left 340px;
</style>
