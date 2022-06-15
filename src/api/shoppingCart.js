import request from '@/utils/request'
//查询用户购物车商品
export function queryAllShoppingCart(){
    return request({
        url:'/trolley/queryTrolley',
        method:'GET'
    })
}
//加购用户购物车
export function addShoppingCart(data){
    return request({
        ulr:'/behavior/increaseOrDecreaseCommodityToTrolley',
        method:'POST',
        data
    })
}