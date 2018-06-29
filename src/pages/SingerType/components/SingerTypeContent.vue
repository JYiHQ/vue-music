<template>
  <div class="wrapper">
    <div class="content">
      <div class="item" v-for="item in ChineseSinger" :key="item.cat" @click="jumpSingerList(item)">
        {{item.name}}
      </div>
    </div>
    <div class="content">
      <div class="item" v-for="item in EuropeSinger" :key="item.cat" @click="jumpSingerList(item)">
        {{item.name}}
      </div>
    </div>
    <div class="content">
      <div class="item" v-for="item in JapaneseSinger" :key="item.cat"
           @click="jumpSingerList(item)">
        {{item.name}}
      </div>
    </div>
    <div class="content">
      <div class="item" v-for="item in KoreaSinger" :key="item.cat" @click="jumpSingerList(item)">
        {{item.name}}
      </div>
    </div>
    <div class="content">
      <div class="item" v-for="item in OtherSinger" :key="item.cat" @click="jumpSingerList(item)">
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SingerTypeContent',
  data() {
    return {
      text: ' - 热门歌手',
      ChineseSinger: [
        {
          cat: '1001',
          name: '华语男歌手',
        },
        {
          cat: '1002',
          name: '华语女歌手',
        },
        {
          cat: '1003',
          name: '华语组合/乐队',
        },
      ],
      EuropeSinger: [
        {
          cat: '2001',
          name: '欧美男歌手',
        },
        {
          cat: '2002',
          name: '欧美女歌手',
        },
        {
          cat: '2003',
          name: '欧美组合/乐队',
        },
      ],
      JapaneseSinger: [
        {
          cat: '6001',
          name: '日本男歌手',
        },
        {
          cat: '6002',
          name: '日本女歌手',
        },
        {
          cat: '6003',
          name: '日本组合/乐队',
        },
      ],
      KoreaSinger: [
        {
          cat: '7001',
          name: '韩国男歌手',
        },
        {
          cat: '7002',
          name: '韩国女歌手',
        },
        {
          cat: '7003',
          name: '韩国组合/乐队',
        },
      ],
      OtherSinger: [
        {
          cat: '4001',
          name: '其他男歌手',
        },
        {
          cat: '4002',
          name: '其他女歌手',
        },
        {
          cat: '4003',
          name: '其他组合/乐队',
        },
      ],
    };
  },
  methods: {
    jumpSingerList(item) {
      const str = item.name + this.text;
      this.$store.commit('GET_HEADER_TEXT', str);
      this.$router.push('/hotSingers');
      this.$store.dispatch('get_singerList', { cat: item.cat });
    },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    width 100%
    position relative
    top 43px
    .content
      width 100%
      margin-top 10px
      background-color white
      display flex
      flex-direction column
      .item
        width 97%
        height 40px
        display flex
        align-items center
        margin-left 10px
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        border-bottom  1px solid #ebeaee
</style>
