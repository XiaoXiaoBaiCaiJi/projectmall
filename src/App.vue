<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <mainTabbar/>

  </div>
</template>

<script>
import mainTabbar from 'components/content/maintabbar/mainTabBar'

export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
