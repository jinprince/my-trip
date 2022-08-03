<template>
  <div class="home">
   <home-nav-bar/>
   <div class="banner">
       <img src="@/assets/img/home/banner.webp" alt="">
   </div>
   <home-search-box :hot-suggests="hotSuggests" />
   <home-categories :categories="categories"/>
   <!-- content -->
   <home-content/>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HomeNavBar from './cpns/home-nav-bar.vue'
  import HomeSearchBox from './cpns/home-search-box.vue'
  import HomeCategories from './cpns/home-categories.vue'
  import HomeContent from './cpns/home-content.vue'
  import useHomeStore from '@/store/modules/home'
  import {storeToRefs} from 'pinia'

  // 发送网络请求
  //1、热门建议
 const homeStore=useHomeStore();
 homeStore.fetchhotSuggestsData()
 homeStore.fetchcategoriesData()
 const {currentPage}=storeToRefs(homeStore)
 homeStore.fetchhouseList()
 const {hotSuggests,categories}=storeToRefs(homeStore)

 //监听window创建的滚动
 window.addEventListener("scroll",()=>{
   const clientHeight=document.documentElement.clientHeight
   const scrollTop=document.documentElement.scrollTop
   const scrollHeight=document.documentElement.scrollHeight
   if(clientHeight+scrollTop>=scrollHeight){
     homeStore.fetchhouseList()
   }

 })
</script>
<style scoped lang="less">
.home{
   img{
       width: 100%; 
   }

}
</style>
