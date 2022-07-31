<template>
<div class="city top-page">
 <div class="top">
   <van-search v-model="searchValue"
  placeholder="城市/区域/位置 " 
  shape="round"
  show-action
  @cancel="cancelClick"
  />
<!-- tab切换 -->
  <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3px">
  <!-- <van-tab :title="allCity?.cityGroup.title"></van-tab>
  <van-tab :title="allCity?.cityGroupOverSea.title"></van-tab> -->
  <template v-for="(value,key,index) in allCities" :key="index">
   <van-tab :title="value.title" :name="key"></van-tab>
  </template>
</van-tabs>
 </div>
 <!-- content -->
 <div class="content">
    <!-- <city-group-item :group-data="currentGroup"/> -->
    
<template v-for="(value,key,index) in allCities">
   <city-group-item :group-data="value" v-show="tabActive===key"/>
</template>
 </div>
</div>
</template>

<script setup>
import CityGroupItem from './cpns/city-group-item.vue'
import useCityStore from '@/store/modules/city'
import {storeToRefs} from 'pinia'
import {computed, ref} from 'vue'
import {useRouter} from 'vue-router'
import cityGroupItem from './cpns/city-group-item.vue'
const router=useRouter()
const searchValue=ref('')
const cancelClick=()=>{
  router.back()
}
// tab切换
const tabActive=ref();
// const allCity=ref({});
// getCityAll().then(res=>{
//   console.log(res)
//   allCity.value=res.data;
// })

// 存储在pinia
const cityStore=useCityStore()
cityStore.fetchAllCitiesData()
const {allCities} =storeToRefs(cityStore)

const currentGroup=computed(()=>allCities.value[tabActive.value])
console.log(currentGroup)


</script>
<style scoped lang="less">
.city{


  // .top{
  //   position: fixed;
  //   left:0;
  //   top:0;
  //   right:0;
  // }
  // .content{
  //   margin-top: 98px;
  // }

  // 布局滚动
  .content{
    height:calc(100vh - 98px);
    overflow-y:auto;
  }
}
</style>
