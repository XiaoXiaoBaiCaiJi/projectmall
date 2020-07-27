<template>
  <div class="detail-swiper">
    <swiper class="swiper-item1">
      <swiper-item class="swiper-item" v-for="items in topImages">
        <img :src="items" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem,
    },
    methods:{

    }
  }
</script>

<style scoped>
  .swiper-item1 {
    height: 300px;
    overflow: hidden;
  }
</style>
