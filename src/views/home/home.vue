<template>
  <div class="home">
   <home-nav-bar/>
   <div class="banner">
       <img src="@/assets/img/home/banner.webp" alt="">
   </div>
   <home-search-box :hot-suggests="hotSuggests" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HomeNavBar from './cpns/home-nav-bar.vue'
  import HomeSearchBox from './cpns/home-search-box.vue'
  import useHomeStore from '@/store/modules/home'
  import {storeToRefs} from 'pinia'

  // 发送网络请求
  //1、热门建议
 const homeStore=useHomeStore();
 homeStore.fetchhotSuggestsData()
 homeStore.fetchcategoriesData()
 const {hotSuggests,categories}=storeToRefs(homeStore)
</script>
<style scoped lang="less">
.home{
   img{
       width: 100%;
   }

}
</style>
