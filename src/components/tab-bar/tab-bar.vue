<template>
  <div class="tab-bar">
    <!-- <template v-for="(item,index) in tabbarData">
      <div class="tab-bar-item"
     :class="{active:currentIndex===index}"
    @click="itemClick(index,item)"
    >
       <img v-if="currentIndex!==index" :src="getAssetURL(item.image)" alt="">
       <img v-else :src="getAssetURL(item.imageActive)" alt="">
       <span class="text">{{item.text}}</span> 
    </div>
   </template> -->
    <div class="tab-bar">
      <van-tabbar v-model="currentIndex">
        <template v-for="(item,index) in tabbarData">
        <van-tabbar-item :to="item.path">
         <span>{{item.text}}</span>
         <template #icon>
       <img v-if="currentIndex!==index" :src="getAssetURL(item.image)" alt="">
       <img v-else :src="getAssetURL(item.imageActive)" alt="">
         </template>
        </van-tabbar-item>
        </template>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetURL } from '@/utils/get-assets-img.js'
const currentIndex = ref(0)
</script>
<style scoped lang="less">
.tab-bar {
//     //局部定义
  --van-tabbar-item-font-size:16px!important;
// :deep(.van-tabbar-item__icon){
//     font-size: 120px;
// }
    img{
        height: 30px;
    }
}
</style>
