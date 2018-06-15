<template>
  <div class="swiper">
    <swiper class="swiper" :options="swiperOptions" ref="mySwiper">
      <swiper-slide class="swiper">page1</swiper-slide>
      <swiper-slide class="swiper">page2</swiper-slide>
      <swiper-slide class="swiper">page3</swiper-slide>
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
      swiperOptions: {
        autoplay: true,
      },
    };
  },
  computed: {
    ...mapState({
      mapList: state => state.home.sowingMap,
    }),
  },
};
</script>
<style scoped lang="stylus">
  .swiper
    width :100%;
    height: 146px;
</style>

