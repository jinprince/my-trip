import hYRequest from '../request' 

export function gethotSuggests(){
    return hYRequest.get({
        url:'/home/hotSuggests'
      })
};
export function getcategories(){
    return hYRequest.get({
        url:'/home/categories'
      })
};
export function gethouseList(currentPage){
  return hYRequest.get({
      url:'home/houselist',
      params:{
        page:currentPage
      }
    })
};