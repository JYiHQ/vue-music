<template>
  <div class="tab">
    <div class="tab-item" v-for="item in tabItems" :key="item.id">
      {{item.label}}
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  data() {
    return {
      tabItems: [
        {
          id: 1,
          label: 'tab1',
        },
        {
          id: 2,
          label: 'tab2',
        },
        {
          id: 3,
          label: 'tab3',
        },
      ],
    };
  },
};
</script>
<style scoped lang="stylus">
  .tab
    width :100%
    height :30px;
    background-color :#d43c33
    .tab-item
      display :inline-block;
    .line
       width :10px;
       height :2px;
       background-color :#f5fe3c
</style>
