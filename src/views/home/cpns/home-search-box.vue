<template>
<div class="search-box">
    <!-- 位置信息 -->
 <div class="location">
       <div class="city" @click="cityClck">{{cityStore.currentCity?.cityName}}</div>
       <div class="position" @click="positionClcik">
           <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
       </div>
 </div>
 <!-- 日期 -->
 <div class="section date-range bottom-gray-line" @click="showCalendar=true">
    <div class="start">
     <div class="date">
        <span class="tip">入住</span>
        <span class="time">{{startDate}}</span>
     </div>
    </div>
    <div class="stay">共{{stayCount}}晚</div>
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
 <div class="section price-counter botttom-gray-line">
   <div class="start">价格不限</div>
   <div class="start">人数不限</div>
 </div>
 <div class="section keyword bottom-gray-line">关键字/位置/名宿名</div>
 <!-- 热门建议 -->
 <div class="section hot-suggests">
   <template v-for="(item,index) in hotSuggests" :key="index">
     <div class="item"
    :style="{color:item.tagText.color,background:item.tagText.background.color}"
     >{{item.tagText.text}}</div>
   </template>

 </div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import useCityStore from '@/store/modules/city'
import {formateDate,getDiffDate} from '@/utils/format-date'
const router=useRouter();
// 定义props
defineProps({
  hotSuggests:{
    type:Array,
    default:()=>[]
  }
})
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
const newDate=new Date()
nowDate.setDate(nowDate.getDate()+1)

const startDate=ref(formateDate(nowDate));
const endDate=ref(formateDate(newDate))
const stayCount=ref(getDiffDate(nowDate,newDate))

const showCalendar=ref(false)
const onConfirm=(value)=>{
const selecttStartDate=value[0];
const selectEndDate=value[1];
console.log(selecttStartDate,selectEndDate)
startDate.value=formateDate(selecttStartDate);
endDate.value=formateDate(selectEndDate);
stayCount.value=getDiffDate(selecttStartDate,selectEndDate)
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
price-counter {
  height: 44px;
  .start {
    border-right: 1px solid f8f9f9;
  }
}

.keyword {
  height: 44px;
}
.hot-suggests {
  margin: 10px 0;

  .item {
    font-size: 12px;
    padding: 4px 8px;
    margin: 3px;
    border-radius: 14px;
    color: #3f4954;
    background-color: #f1f3f5;
  }
}

</style>
