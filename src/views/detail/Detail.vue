<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"/>
    <Scroll class="content" ref="scroll"
            @scroll="contentScroll"
            :probe-type="3">
      <detail-swiper :top-images="topImages"/>
      <detail-show-goods-info :goods-info="goods"/>
      <detail-shop-info :shop-info="shop"/>
      <detail-under-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-params-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </Scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailShowGoodsInfo from "./childComps/DetailShowGoodsInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailUnderInfo from "./childComps/DetailUnderInfo";
  import DetailParamsInfo from "./childComps/DetailParamsInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from "components/content/goods/GoodsList";
  import {debounce} from "common/utils"
  // import {itemListenerMixin} from "common/mixin";

  import {getDetail, Goods, Shop, GoodsParams, getRecommend} from 'network/Detail'

  export default {
    name: "Detail",
    // mixins:[itemListenerMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        // itemImgListener: null,
        getThemeTopYs: null,
      }
    },
    created() {
      //保存传入的iid
      this.iid = this.$route.params.iid;

      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data =res.result;
        this.topImages = data.itemInfo.topImages;
        // console.log(this.topImages);

        //请求推荐数据
        getRecommend().then(res => {
          // console.log(res);
          this.recommends = res.data.list
        })
        this.getThemeTopYs = debounce(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44);
          console.log(this.themeTopYs);
        })

        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        //获取商品详细信息
        this.detailInfo = data.detailInfo

        //获取参数信息
        this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)

        //取出评论信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }

        /*this.$nextTick(() => { //当DOM渲染完成后会执行这个函数
          this.themeTopYs = []

          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44);
          // console.log(this.themeTopYs);
        })*/
      })
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailShowGoodsInfo,
      DetailShopInfo,
      DetailUnderInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      Scroll,
      GoodsList
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh();
        /*this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44);
        // console.log(this.themeTopYs);*/
        this.getThemeTopYs();
      },
      titleClick(index) {
        // console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
      },
      contentScroll(position) {
        // console.log(position);
      }
    },
    mounted() {
      let refresh = debounce(this.$refs.scroll.refresh, 100)
      this.itemImgListener = () => {
        refresh()
      }
      this.$bus.$on('itemImgLoad', this.itemImgListener)
    },
    destroyed() {
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    /*position: relative;*/
    /*z-index: 11;*/
  }
  .content {
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>
