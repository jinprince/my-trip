<template>
<div class="search-box">
    <!-- 位置信息 -->
 <div class="location">
       <div class="city" @click="cityClck">{{cityStore.currentCity.cityName}}</div>
       <div class="position" @click="positionClcik">
           <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
       </div>
 </div>
 <!-- 日期 -->
 <div class="section date-range" @click="showCalendar=true">
    <div class="start">
     <div class="date">
        <span class="tip">入住</span>
        <span class="time">{{startDate}}</span>
     </div>
    </div>
    <div class="stay">共一晚</div>
    <div class="end">
        <div class="date">
        <span class="tip">离店</span>
        <span class="time">{{endDate}}</span>
        </div>
    </div>
 </div>
<van-calendar 
v-model:show="showCalendar"
  type="range"
  @confirm="onConfirm"
  color='#ff9854'
  :round="false"
  :show-confirm='false'
   />
</div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import useCityStore from '@/store/modules/city'
import {formateDate} from '@/utils/format-date'
const router=useRouter();
const cityStore=useCityStore()
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
//  日期转化
const nowDate=new Date()
const newDate=nowDate.setDate(nowDate.getDate()+1)

const startDate=ref(formateDate(nowDate));
const endDate=ref(formateDate(newDate))

const showCalendar=ref(false)
const onConfirm=(value)=>{
const selecttStartDate=value[0];
const selectEndDate=value[1];
console.log(selecttStartDate,selectEndDate)
startDate.value=formateDate(selecttStartDate);
endDate.value=formateDate(selectEndDate);
showCalendar.value=false;
}

 </script>
<style scoped lang="less">
.search-box{
    --van-calendar-popup-height:100%;
}
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
.section{
     display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}


.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
</style>
