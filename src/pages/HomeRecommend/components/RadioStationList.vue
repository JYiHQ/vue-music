<template>
  <div class="wrapper">
    <div class="header">
      <h4>主播电台</h4>
      <img class="img" src="../../../assets/icon/arrow-right.svg"/>
    </div>
    <div class="content">
      <div class="row">
        <div class="item" v-for="radio in list" :key="radio.id">
          <img class="item-img" :src="radio.picUrl"/>
          <span>{{radio.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'RadioStationList',
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState({
      radioStation: state => state.home.radioStation,
    }),
  },
  mounted() {
    this.$store.dispatch('get_radioStation').then(() => {
      this.list = this.radioStation.slice(0, 6);
    });
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    position relative;
    top 65px;
    .header
      position relative;
      padding-left 10px;
      .img
        width 15px;
        height 15px;
        position absolute;
        top 3px;
        left 80px;
    .content
      display flex;
      flex-direction column;
      .row
        width 97%;
        margin-bottom 10px;
        padding-left 10px;
        display flex;
        flex-flow row wrap;
        .item
          width 32.9%;
          height 120px;
          margin-bottom 30px;
          text-overflow clip;
          .item-img
            width 98%;
            height 100px;
</style>
