import { getParentCategoryID } from "@/api/index";
const state = {
}
const mutations = {
}
const actions = {
    async setcategoryCurView({ }, objOfcategory) {
        sessionStorage.clear()
        sessionStorage.setItem('categoryCur', JSON.stringify(objOfcategory))
        if (objOfcategory.level == 2) {
            let res1 = await getParentCategoryID({ id: objOfcategory.id })
            if (res1.code == 0) {
                sessionStorage.setItem('parentLevelOne', JSON.stringify(res1.result))
                return Promise.resolve()
            }
            else {
                return Promise.reject(res1.message || 'error')
            }
        }
        else if (objOfcategory.level == 3) {
             await Promise.all([getParentCategoryID({ id: objOfcategory.id }), getParentCategoryID({ id: objOfcategory.parentCategoryID })]).then((res) => {
                sessionStorage.setItem('parentLevelTWO', JSON.stringify(res[0].result))
                sessionStorage.setItem('parentLevelOne', JSON.stringify(res[1].result))
            }).catch((error) => {
                console.log(error)
            })
        }
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}