<template>
  <div class="app">
    <router-view />
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->
    <TabBar v-if="!route.meta.hideTabBar"/>
    
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
import {useRoute} from 'vue-router'
const route=useRoute()
</script>

<style scoped></style>
