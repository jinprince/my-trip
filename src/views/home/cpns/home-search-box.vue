<template>
 <div class="location">
       <div class="city" @click="cityClck">广州</div>
       <div class="position" @click="positionClcik">
           <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
       </div>
   </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router=useRouter();
 const positionClcik=()=>{
     navigator.geolocation.getCurrentPosition((res)=>{
         console.log("获取成功",res)
     },err=>{
         console.log("获取失败",err)
     },{
         enableHighAccuracy:true,
         timeout:1000,
         maximumAge:0
     })
 }
 const cityClck=()=>{
     router.push('/city')

 }
 </script>
<style scoped lang="less">
.location{
    display:flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    .city{
        flex:1;
        color:#333;
    }
    .position{
        width:74px;
        display: flex;
        align-items:center;
    }
    .text{
        position: relative;
        top:2px;
        font-size: 12px;

    }
    img{
       width:18px;
       height: 18px; 
    }
}
</style>
