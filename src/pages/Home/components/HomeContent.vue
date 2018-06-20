<template>
  <div class="wrapper">
    <tab :tabItems="tabItems"></tab>
  </div>
</template>
<script>
import Tab from '../../../components/tab/tab';

export default {
  name: 'HomeContent',
  components: {
    Tab,
  },
  data() {
    return {
      tabItems: [
        { label: '推荐' },
        { label: '朋友' },
        { label: '电台' },
      ],
    };
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    position fixed;
    top 45px;
    z-index 999;
</style>
