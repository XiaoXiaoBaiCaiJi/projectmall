<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <Scroll class="content">
        <detail-swiper :top-images="topImages"/>
        <detail-goods-info :goods-info="goods"/>
        <detail-shop-info :shop-info="shop"/>
    </Scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail,Goods,Shop} from 'network/Detail'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
      }
    },
    created() {
      //保存传入的iid
      this.iid = this.$route.params.iid;

      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // console.log(res);
        const data =res.result;
        this.topImages = data.itemInfo.topImages;
        // console.log(this.topImages);

        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)
      })
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailGoodsInfo,
      DetailShopInfo,
      Scroll,
    },
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
