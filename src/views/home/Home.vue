<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">Fshop</div></NavBar>
      <Scroll class="content"
              ref="scroll"
              :probe-type="3"
              @scroll="scrollEvent"
              :pull-up-load="true" @pullingUp="pullingUpEvent">
        <home-swiper :banners="banners" />
        <recommend-view :recommends="recommends"/>
        <Featureview/>
        <tab-control :titles="['流行','新款','精选']"
                     @tabClick="tabClick"
                     class="tab-control"/>
        <goods-list :goods="showgoods"/>
      </Scroll>
    <back-top @click.native="backClick" v-show="isShowbackTop"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import GoodsListItem from "components/content/goods/GoodsListItem";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import Featureview from "./childComps/Feature";

  import {getHomeMultidata, getHomeGoods} from 'network/home';

  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      RecommendView,
      Featureview,
      GoodsList,
      GoodsListItem,
      Scroll,
      BackTop,
    },
    data() {
      return {
        // result: null
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []},
        },
        currentType: 'pop',
        isShowbackTop: false
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听相关方法
       * */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      backClick() {
        // console.log('组件点击了');
        this.$refs.scroll.scrollTo(0,0)
      },
      scrollEvent(position) {
        // console.log(position);
        this.isShowbackTop = (-position.y) > 800
      },
      pullingUpEvent() {
        // console.log('上拉加载更多');
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.scroll.refresh();
      },

      /**
       * 网络请求相关方法
       * */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        // getHomeGoods(type,1).then(res => {
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
      }
    },
    computed: {
      showgoods() {
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  /*  vh是视口的意思可视的窗口*/
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
