<template>
  <div class="cart-bottom">
    <div>
      <check-button/>
      <span>全选</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkbutton/CheckButton";

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    }
  }
</script>

<style scoped>
  .cart-bottom {
    background-color: deeppink;
    height: 40px;
    bottom: 51px;
    position: fixed;
    left: 0;
    right: 0;
  }
</style>
