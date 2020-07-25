<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" activeColor="blue">
<!--这里的路径已经在webpack.base.conf.js配置过所以此处路径可以直接写-->
        <img slot="icon" src="~assets/icon/shouye.png" alt="">
        <img slot="icon-active" src="~assets/icon/img/shouye.png" alt="">
        <div slot="text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="blue">
        <img slot="icon" src="~assets/icon/fenlei.png" alt="">
        <img slot="icon-active" src="~assets/icon/img/fenlei.png" alt="">
        <div slot="text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="blue">
        <img slot="icon" src="~assets/icon/gouwu.png" alt="">
        <img slot="icon-active" src="~assets/icon/img/gouwuche.png" alt="">
        <div slot="text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="blue">
        <img slot="icon" src="~assets/icon/wode.png" alt="">
        <img slot="icon-active" src="~assets/icon/img/wode.png" alt="">
        <div slot="text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>


<script>

  import TabBar from 'components/common/tabbar/tabbar'
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "mainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
