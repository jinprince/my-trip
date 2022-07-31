import hYRequest from '../request' 

export function getCityAll(){
    return hYRequest.get({
        url:'/city/all'
      })
};