<template>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide v-for="img in sowingMap" :key="img.url">
      <img class="img" :src="img.picUrl"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
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
        autoplay: 2000,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
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
  .swiper
    width :100%;
    height: 176px;
    .img
      width :99%;
      height :176px;
  .swiper >>> .swiper-pagination-bullet-active
    background-color #ed430e;
</style>
