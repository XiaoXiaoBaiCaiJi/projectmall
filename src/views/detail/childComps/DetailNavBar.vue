<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(items,index) in titles"
             class="title-item"
             :class="{active: index === currentIndex}"
             @click="titleClick(index)">
          {{items}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0,
      }
    },
    components: {
      NavBar,
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick',index);
      },
      backClick() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
    font-size: 17px;
    margin-top: 1px;
  }
  .active {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 6px;
  }
</style>
