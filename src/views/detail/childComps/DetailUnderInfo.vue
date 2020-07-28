<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="good-info">
    <div class="info-dec clear-fix">
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list"  v-for="(items,index) in detailInfo.detailImage[0].list">
      <img :key="index"
           :src="items"
           alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailUnderInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }, data() {
      return {
        counter: 0,
        imagesLength: 0,
      }
    },
    methods: {
      imgLoad() {
        //所有图片都加载完成进行一次回调就可以了
        if (++this.counter === this.imagesLength) { //++this.counter先加再对比
          this.$emit('imageLoad')
        }
      }
    },
    watch: { //监听一个属性的变化
      detailInfo() {
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .good-info {
    padding: 0 5px;
    border-bottom: 10px solid #d2d2d2;
  }
  .desc {
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    font-size: 16px;
  }
  .info-key {
    height: 44px;
    line-height: 44px;
    font-size: 16px;
  }
  .info-list img{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>


