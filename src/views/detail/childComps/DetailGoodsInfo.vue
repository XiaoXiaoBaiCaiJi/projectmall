<template>
  <div v-if="Object.keys(goodsInfo).length!==0" class="goodsinfo">
    <div class="title">{{goodsInfo.title}}</div>
    <div class="price">
      <div class="newprice">{{goodsInfo.newPrice}}</div>
      <div class="oldprice">{{goodsInfo.oldPrice}}</div>
      <div class="iconprice">{{goodsInfo.discount}}</div>
    </div>
    <div class="sales_volume">
      <div class="sales_volume_item1">{{goodsInfo.columns[0]}}</div>
      <div class="sales_volume_item2">{{goodsInfo.columns[1]}}</div>
      <div class="sales_volume_item3">
        {{goodsInfo.services[goodsInfo.services.length-1].name}}
      </div>
    </div>
    <div class="info_service">
      <div v-for="index in goodsInfo.services.length-1" :key="index" class="info_service_item">
        <img :src="goodsInfo.services[index-1].icon" alt="">
        {{goodsInfo.services[index-1].name}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>

<style scoped>
  .goodsinfo {
    border-bottom: 2px solid #ddd;
  }
  .title{
    margin-top: 10px;
    padding: 0 5px;
    font-size: 16px;
  }
  .price{
    display: flex;
    margin:15px 5px 0 ;
  }
  .newprice{
    color: var(--color-high-text);
    font-size: 16px;
    line-height: 23px;
  }
  .oldprice{
    margin:0 5px;
    position: relative;
    color: #d4d2d4;
    font-size: 10px;
    line-height: 25px;


  }
  .oldprice::after{
    content: '———';
    position: absolute;
    top: 0;
    left: 0;
  }
  .iconprice{

    border: 1px solid red;
    border-radius: 20px;
    color: white;
    font-size: 14px;
    height: 18px;
    background-color: var(--color-high-text);
  }
  .sales_volume{
    margin: 0 5px;
    display: flex;
    border-bottom: 1px solid #d4d2d4;
    font-size: 14px;
    color: #d4d2d4;
    line-height: 30px;
  }
  .sales_volume_item1{
    flex: 1;
    text-align:left ;
  }
  .sales_volume_item2{
    flex: 1;
    text-align:center ;
  }
  .sales_volume_item3{
    flex: 1;
    text-align:right ;
  }
  .info_service{
    display: flex;
    font-size: 12px;
    height: 30px;
    line-height: 15px;
    margin-top: 10px;
  }
  .info_service img{
    width: 12px;
    height: 12px;
  }
  .info_service_item{
    flex: 1;
    text-align: center;
  }
</style>
