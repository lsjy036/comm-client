import request from '@/utils/request'
export function getTypeNav(){
    return request({
        url:'category/queryMap',
        method:'GET',
    })
}
//根据条件查询商品
export function getCommodity(data){
    return request({
        url:'commodity/queryCommodityByConditionByPage',
        method:'POST',
        data,
    })
}
//根据品类id查属性
export function getCategoryProps(data){
    return request({
        url:'commodity/queryPropsByCategoryId',
        method:'GET',
        params:data
    })
}
//根据品类id查询品牌
export function getBrandsByCategory(data){
    return request({
        url:'commodity/queryBrandsByCategoryId',
        method:'GET',
        params:data,
    })
}
//根据品类id查询父类
export function getParentCategoryID(data){
    return request({
        url:'category/queryParentById',
        method:'GET',
        params:data,
    })
}
//请求商品主图
export function getPicOfCom(data){
    return request({
        url:'commoditypic/queryMainPicByCommodityId',
        method:'GET',
        params:data,
    })
}