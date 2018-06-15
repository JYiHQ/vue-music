<template>
  <div class="wrapper">
    <div class="tab">
      <div class="tab-item" v-for="(item,index) in tabItems" :key="index"
           @click="handleShow(index)">
        {{item.label}}
        <div class="line" :class="{activeAnimate: left}"
             v-show="index === activeIndex"></div>
      </div>
    </div>
    <!--<div class="line"></div>-->
  </div>
</template>
<script>
export default {
  name: 'Tab',
  props: ['tabItems'],
  data() {
    return {
      activeIndex: 0,
      left: null,
    };
  },
  methods: {
    handleShow(index) {
      this.activeIndex = index;
    },
  },
  watch: {
    // activeIndex(newVal, oldVal) {
    //   console.log(newVal);
    //   console.log(oldVal);
    // },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width :100%;
    height :35px;
    background-color :#d43c33;
    .tab
      width :100%
      height :30px;
      display :flex;
      .tab-item
        flex: 1;
        color:white;
        display :flex;
        flex-direction :column;
        justify-content: center;
        align-items: center;
        .line
          width :30px;
          height :2px;
          margin-top :5px;
          background-color :white;
      .tabBorder
        border-bottom : 2px solid #fefa10;
</style>
