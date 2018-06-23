<template>
  <div ref="scroll" class="scroll-wrapper">
    <slot name="content"></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll';

export default {
  name: 'Scroll',
  data() {
    return {
      // 保存创建的对象
      scroll: null,
      // 保存滚动条的位置
      currentPosition: {
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    // 在dom结构加载完成后，初始化滚动组件
    this.$nextTick(() => {
      this.initScroll();
      // console.log(this.$refs.scroll);
      // console.log(this.scroll);
    });
  },
  methods: {
    // 初始化滚动组件
    initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        // 配置滚动事件的分发方式
        probeType: 2,
      });
      this.scroll.on('scroll', (pos) => {
        this.handleScroll(pos);
      });
    },
    // 在滚动时记录用户滚动的位置，方便在页面跳转后，进行滚动条的滚动
    handleScroll(pos) {
      this.currentPosition = pos;
    },
    // 刷新滚动组件
    refresh() {
      this.scroll.refresh();
    },
    // 页面跳转，滚动到某个具体位置，保证滚动条在用户滚动的位置
    scrollTo() {
      this.scroll.scrollTo(this.currentPosition.x, this.currentPosition.y, 30, 'easing');
    },
  },
};
</script>
<style scoped>
  .scroll-wrapper{
    /*margin-top: 6px;*/
    overflow: hidden;
    width: 100%;
    height: 99%;
  }
</style>
