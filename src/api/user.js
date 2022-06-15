import request from '@/utils/request'
export function register(data) {
    return request({
        url: 'register',
        method: 'POST',
        data,
    })
}
//登录用户
export function login(data) {
    return request({
        url: 'login',
        method: 'POST',
        data,
    })
}
//登出用户
export function logout() {
    return request({
        url: '/logout',
        method: 'get',
    })
}
//获取当前用户登录信息
export function getUserInfo(){
    return request({
        url:'getCurrentLoginCustomer',
        method:'GET',
    })
}
//更换用户头像
export function changeIcon(data){
    return request({
        url:'changeIcon',
        method:'POST',
        data
    })
}
//更换用户密码
export function changePasswd(data){
    return request({
        url:'changePasswd',
        method:'POST',
        data
    })
}