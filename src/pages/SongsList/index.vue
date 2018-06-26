<template>
  <div class="wrapper">
    <div class="header">
      <img @click="handleBackPage" class="img" src="../../assets/icon/jiantouzuo.svg"/>
      <span class="span">{{headerText}}</span>
    </div>
    <scroll ref="scroll">
      <div class="scroll-content" slot="content">
        <div class="header-info">
          <img id="image" class="img" :src="headerSong.coverImgUrl"/>
          <div class="figure">
            <div class="figure-content">
              <span>精品歌单</span>
              <img class="figure-img" src="../../assets/icon/arrow_white.svg"/>
            </div>
            <div class="figure-name">
              <span>{{headerSong.name}}</span>
            </div>
          </div>
        </div>
        <div class="tag-wrapper">
          <button class="btn" @click.stop="handleJumpPage">{{btnName}}
            <img class="btn-img" src="../../assets/icon/arrow_black.svg"/>
          </button>
          <div class="tags-list">
            <div class="tags" v-for="tag in tags"
                 :key="tag.id" @click.stop="handleChangeType(tag)">
              {{tag.name}}
            </div>
          </div>
        </div>
        <div class="list-wrapper">
          <div class="row">
            <div class="item" v-for="item in listData" :key="item.id"
                 @click.stop="handleGetDetails(item)">
              <img class="img" :src="item.coverImgUrl"/>
              <div class="img-text">{{item.name}}</div>
              <div class="playCount">
                <img class="play-img" src="../../assets/icon/headset.svg"/>
                <span>{{item.playCount}}</span>
                <div class="user">
                  <img class="play-img" src="../../assets/icon/user.svg"/>
                  <span>{{item.creator.nickname}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import VHeader from '../../components/header/VHeader';
import Scroll from '../../components/scroll/scroll';

export default {
  name: 'SongsList',
  components: {
    VHeader,
    Scroll,
  },
  data() {
    return {
      headerSong: {},
      unit: '万',
      headerText: '歌单',
      tags: [
        {
          id: 10,
          name: '欧美',
        },
        {
          id: 20,
          name: '影视原声',
        },
        {
          id: 30,
          name: '电子',
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch('get_highQualitySong', { limit: 20 }).then(() => {
      this.headerSong = this.songsData[0];
    });
  },
  computed: {
    ...mapState({
      songsData: state => state.songList.songsList,
      btnName: state => state.songList.btnName,
    }),
    listData() {
      const data = this.songsData;
      const obj = {
        playCount: 0,
      };
      data.forEach((itemData) => {
        if (itemData.playCount > 100000) {
          obj.playCount = (Math.ceil(itemData.playCount / 10000) - 1) + this.unit;
          Object.assign(itemData, obj);
        }
      });
      return data;
    },
  },
  methods: {
    handleBackPage() {
      this.$router.go(-1);
    },
    handleJumpPage() {
      this.$router.push('/songsType');
    },
    handleChangeType(item) {
      this.$store.dispatch('get_songByType', { tag: item.name, limit: 10 });
    },
    handleGetDetails(item) {
      this.$store.dispatch('get_listDetails', { id: item.id }).then(() => {
        this.$router.push('/listDetails');
      });
    },
  },
};
</script>
<style scoped lang="stylus">
  .wrapper
    .header
      width 100%;
      height 44px;
      background-color :#d43c33;
      position relative;
      .img
        width 30px;
        height 30px;
        position absolute;
        left 15px;
        top 7px;
      .span
        color :white;
        position :absolute;
        top:10px;
        left :60px;
    .scroll-content
      .header-info
        width 100%;
        height 115px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display flex;
        align-items flex-start;
        background-color #d9d9d7;
        .img
          width 90px;
          height 90px;
          margin 15px 10px 10px 10px;
          border-radius 5px;
        .figure
          flex 1;
          height 115px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          position relative;
          .figure-content
            margin-top 20px;
            color white;
          .figure-img
            position relative;
            top 3px;
            width 15px;
            height 15px;
          .figure-name
            margin-top 10px;
            color white;
      .tag-wrapper
        width 100%;
        height 53px;
        position relative;
        .btn
          outline none;
          background-color white;
          border: 1px solid rgba(182,183,181,0.83);
          border-radius 10px;
          line-height 20px;
          position absolute;
          top 15px;
          left 10px;
          .btn-img
            position relative;
            top 2px;
            right  0;
        .tags-list
          color rgba(78,79,77,0.83);
          position absolute;
          top 15px;
          left 200px;
          .tags
            display inline;
            text-align center;
            border-right 1px solid rgba(182,183,181,0.83);
            font-size 14px;
            padding 0 6px;
            line-height 20px;
      .list-wrapper
        width 100%;
        .row
          display flex;
          flex-flow row wrap;
          margin-left 8px;
          .item
            position relative;
            -webkit-box-sizing: border-box
            -moz-box-sizing: border-box
            box-sizing: border-box
            width 48%;
            height 200px;
            margin-right 5px;
            margin-bottom 10px;
            font-size 12px;
            color rgba(67,68,66,0.83);
            .img
              width 100%;
              height 160px;
            .img-text
              padding-left 3px;
            .playCount
              width 94%;
              height 160px;
              padding-right 10px;
              box-shadow inset 0 2px 50px #000;
              color white;
              text-align right;
              position absolute;
              top 0;
              left 0;
              .play-img
                position relative;
                top 3px;
              .user
                position absolute;
                top 135px;
                left 5px;
</style>
