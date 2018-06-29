<template>
  <div class="wrapper">
    <div class="content">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'HotSingerList',
  computed: {
    ...mapState({
      singerList: state => state.hotSingers.singerList,
    }),
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width 100%
    position relative
    top 39px
    .content
      width 100%
      display flex
</style>
