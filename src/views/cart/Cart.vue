<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import {mapGetters} from "vuex";

  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartLength'])
    },
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 800;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
  }
</style>
