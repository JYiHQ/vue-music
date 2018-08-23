<template>
  <svg :class="svgClass" aria-hidden="true" @click="clickIcon">
    <use :xlink-href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      required: true,
      type: String,
    },
    className: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return `icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return this.className;
      }
      return 'svg-icon';
    }
  },
};
</script>
<style scoped>
  .svg-icon {
    width: 25px;
    height: 25px;
  }
</style>
