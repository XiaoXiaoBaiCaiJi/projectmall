<template>
  <div class="cart-bottom">
    <div class="checked-content" @click="checkClick">
      <check-button class="checked-button"
                    :is-checked="isSelectAll"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="paymoney" @click="payClick">
      结算：{{payMoney}}
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkbutton/CheckButton";
  import {itemListenerMixin} from "../../../common/mixin";

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return '￥' + this.$store.getters.cartList.filter(items => {
          return items.checked
        }).reduce((preValue,items) => {
          return preValue + items.price * items.count
        },0).toFixed(2)
      },
      payMoney() {
        return this.$store.getters.cartList.filter(items => items.checked).length
      },
      isSelectAll() {
        if (this.$store.getters.cartList.length === 0) return false
        // return !(this.$store.getters.cartList.filter(items => !items.checked).length)
        return !this.$store.getters.cartList.find(items => !items.checked)
      }
    },
    methods: {
      checkClick() {
        if (this.$store.getters.cartList.length === 0) {
          this.$toast.show('购物车为空！', 1500)
        }
        if (this.isSelectAll) {
          this.$store.getters.cartList.forEach(items => items.checked = false)
        } else {
          this.$store.getters.cartList.forEach(items => items.checked = true)
        }
      },
      payClick() {
        if (!this.payMoney) {
          this.$toast.show('您还未选中商品！', 1500)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom {
    position: fixed;
    background-color: #eee;
    height: 40px;
    bottom: 51px;
    left: 0;
    right: 0;
    line-height: 40px;
    display: flex;
  }
  .checked-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 70px;
  }
  .price {
    flex: 1;
    text-align: center;
  }
  .checked-button {
    width: 21px;
    height: 21px;
    line-height: 20px;
    margin-right: 8px;
  }
  .paymoney {
    width: 90px;
    text-align: center;
    background-color: var(--color-tint);
    color: white;
  }
</style>
