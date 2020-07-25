<template>
  <div class="recommend">
    <div class="recommend-item" v-for="items in recommends">
      <a :href="items.link">
        <img :src="items.image" alt="">
        <div>{{items.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 15px;
    border-bottom: 6px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 68px;
    height: 70px;
    margin-bottom: 5px;
    border-radius: 100%;
  }
</style>
