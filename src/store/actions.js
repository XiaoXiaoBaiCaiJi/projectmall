export default  {
  addCart(context,payload) {
    return new Promise((resolve,reject) => {
      //payload新添加的商品
      /* let oldProduct = null;
       for(let item of state.cartList) {
         if (item.iid === payload.iid) {
           oldProduct = item;
         }
       }*/

      //查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      //判断oldProduct
      if(oldProduct) {
        context.commit('addCounter',oldProduct)
        resolve('商品数量+1')
      } else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('商品加入到购物车')
      }
    })
  }
}
