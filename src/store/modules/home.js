import { gethotSuggests,getcategories } from "@/services";
import { defineStore } from "pinia";

const useHomeStore=defineStore("home",{
    state:()=>({
       hotSuggests:[],
       categories:[]
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
    }
})
export default useHomeStore