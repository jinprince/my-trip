import { gethotSuggests,getcategories, gethouseList } from "@/services";
import { defineStore } from "pinia";

const useHomeStore=defineStore("home",{
    state:()=>({
       hotSuggests:[],
       categories:[],
       houseList:[],
       currentPage:1
    }),
    actions:{
        async fetchhotSuggestsData(){
            const res=await gethotSuggests()
            this.hotSuggests=res.data
        },
        async fetchcategoriesData(){
            const res=await getcategories()
            this.categories=res.data
        },
        async fetchhouseList(){
            const res=await gethouseList(this.currentPage)
            this.houseList.push(...res.data)
            this.currentPage++
        }
    }
})
export default useHomeStore