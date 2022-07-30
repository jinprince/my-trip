<template>
<div class="tab-bar">
    <template v-for="(item,index) in tabbarData">
    <div class="tab-bar-item"
     :class="{active:currentIndex===index}"
    @click="itemClick(index,item)"
    >
       <img v-if="currentIndex!==index" :src="getAssetURL(item.image)" alt="">
       <img v-else :src="getAssetURL(item.imageActive)" alt="">
       <span class="text">{{item.text}}</span> 
    </div>
   </template>
</div>
</template> 

<script setup>
 import {ref} from 'vue'
 import tabbarData from '@/assets/data/tabbar.js'
 import {getAssetURL} from '@/utils/get-assets-img.js'
 import {useRouter} from 'vue-router'
 const router=useRouter();
 const currentIndex=ref(0);
 const itemClick=(index,item)=>{
     currentIndex.value=index
     router.push(item.path)
 }
 </script>
<style scoped lang="less">
.tab-bar{
    position: fixed;
    bottom:0;
    left:0;
    right: 0;
    height: 50px;
    display:flex;

.tab-bar-item{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &.active{
        color:var(--primary-color )
    }
    
    .text{
        font-size: 12px;
    }
    img{
        width: 36px;
    }
}
}

</style>
