<template>
  <div class="header-wrapper">
    <div class="header">
      <img src="../../../assets/icon/jiantouzuo.svg" class="img" @click="backPage" />
      <input v-model="searchContent" @input="handleSearch" autofocus class="input"/>
      <img v-show="isShow" class="cancel" @click="handleClean"
           src="../../../assets/icon/cancel-white.svg"/>
    </div>
    <div class="header-content">
      <img class="singer-img" src="../../../assets/icon/singer.svg"/>
      <span class="span-text">歌手分类</span>
      <img class="arrow-img" src="../../../assets/icon/arrow-right.svg"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchHeader',
  data() {
    return {
      isShow: false,
      searchContent: '',
    };
  },
  methods: {
    backPage() {
      this.$router.go(-1);
    },
    handleSearch() {
      this.isShow = true;
      if (this.searchContent === '') {
        this.isShow = false;
      }
    },
    handleClean() {
      this.searchContent = '';
      this.isShow = false;
    },
  },
};
</script>
<style scoped lang="stylus">
  .header
    width :100%;
    height :40px;
    background-color :#d43c33;
    position :relative;
    padding-top :10px;
    .img
      width: 30px;
      height :30px;
      position :absolute;
      left: 15px;
      top:10px;
    .cancel
      position :absolute;
      left: 87%;
      top:10px;
      z-index :10;
    .input
      width :80%;
      height :30px;
      color: white;
      position :absolute;
      left: 55px;
      font-size :18px;
      border-bottom : 1px solid white;
      background-color :#d43c33;
      caret-color:white;
  .header-content
    height :40px;
    width :100%;
    border-bottom :1px solid gainsboro;
    position :relative;
    .singer-img
      width :20px;
      height :20px;
      position :absolute;
      top:10px;
      left:145px;
    .span-text
      font-size :14px;
      position :absolute;
      top:10px;
      left:170px;
    .arrow-img
      width :15px;
      height :15px;
      position :absolute;
      top:13px;
      left:230px;
</style>
