import { login, register, logout } from '@/api/user'
import { setCookie,removeCookie } from '@/utils/user'
const state = {
    name: '',
    current_user: '',
}
const actions = {
    async login({ commit }, userInfo) {
        const { name, password } = userInfo
        console.log('hhh',userInfo)
        let result = await login({ name: name, password: password })
        if (result.code == 0) {
            commit('SET_CURRENT_USER', name)
            setCookie(name)
            return Promise.resolve(result)
        } else {
            return Promise.reject(result.message || 'error')
        }
    },
    async register({},userInfo) {
        let result = await register(userInfo)
        if (result.code == 0) {
            return Promise.resolve(result)
        }
        else {
            return Promise.reject(result.message || 'error')
        }
    },
    async logout() {
        let result = await logout()
        if (result.code == 0) {
            removeCookie()
            return Promise.resolve(result)
        }
        else {
            return Promise.reject(result)
        }
    }
}
const mutations = {
    SET_CURRENT_USER: (state, username) => {
        state.current_user = username
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}