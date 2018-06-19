<template>
  <div class="wrapper">
    <div class="back"></div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="img in sowingMap" :key="img.url">
        <img class="img" :src="img.picUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'HomeSowingMap',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true,
        centeredSlides: true,
      },
    };
  },
  computed: {
    ...mapState({
      sowingMap: state => state.home.sowingMap,
    }),
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    position relative;
    .back
      width 100%;
      height 115px;
      background-color #d43c33;
    .swiper
      width :95%;
      height: 146px;
      border-radius 4px;
      z-index 100;
      padding 0;
      position absolute;
      top 0;
      left 10px;
      .img
        width :100%;
        height :146px;
    .swiper >>> .swiper-pagination-bullet-active
                background-color #ed430e;
</style>
