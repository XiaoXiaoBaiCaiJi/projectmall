<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(items,index) in cartList"
        :key="index"
        :product="items"/>
    </Scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  import Scroll from "components/common/scroll/Scroll";

  import CartListItem from "./CartListItem";
  export default {
    name: "CartList",
    computed: {
      ...mapGetters(['cartList'])
    },
    components: {
      Scroll,
      CartListItem,
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list {
    height: 100vh;
    position: relative;
  }
  .content {
    height: calc(100% - 44px - 51px - 40px);
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 51px;
    overflow: hidden;
  }
</style>
