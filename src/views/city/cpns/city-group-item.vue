<template>
<div class="city-group">
<!-- <template v-for="(group,index) in groupData.cities" :key="index">
   <div class="group-item">
       <h2 class="title">标题:{{group.group}}</h2>
       <div class="list">
      <template v-for="(city,index) in group.cities" :key="index">
        <div class="city">{{city.cityName}}</div>
      </template>
       </div>
     </div>
</template> -->
<van-index-bar :index-list="indexList">
    <!-- 热门 -->
    <van-index-anchor index="热门" />
    <div class="list">
        <template v-for="(city,index) in groupData.hotCities">
            <div class="city" @click="cityClick(city)">{{city.cityName}}</div>
        </template>
    </div>

  <template v-for="(group,index) in groupData.cities" :key="index">
      <van-index-anchor :index="group.group" />
        <template v-for="(city,index) in group.cities" :key="index">
            <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
  </template>
</van-index-bar>
</div>
</template>

<script setup>
import {computed} from 'vue'
import {useRouter} from 'vue-router'
import useCityStore from '@/store/modules/city'
const router=useRouter()
const props=defineProps({
    groupData:{
        type:Object,
        default:()=>({})
    }
})
const indexList=computed(()=>{
    const list=props.groupData.cities.map(item => item.group)
    list.unshift("#");
    return list
})
// 监听城市的点击
const cityStore=useCityStore();
const cityClick=(city)=>{
    console.log(city)
    cityStore.currentCity=city
    // 返回上一级
    router.back()


}


 </script>
<style scoped lang="less">
.list{
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    flex-wrap: wrap;
    padding-right: 25px;
}
.city{
    width:70px;
    height: 28px;
    border-radius:14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 10px 0;
}

</style>
