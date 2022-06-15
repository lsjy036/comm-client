import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getCookie } from '@/utils/auth' 

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whiteList = ['/login','/register','/home','/commodity'] // no redirect whitelist
router.beforeEach(async(to, from, next) => {
    NProgress.start()
    let cookie = getCookie()
    if(cookie){
      console.log(to.path,whiteList.indexOf(to.path))
      next()
    }
    else{
      console.log(to.path,whiteList.indexOf(to.path))
      if (whiteList.indexOf(to.path) !== -1) {
        // in the free login whitelist, go directly
        console.log('ok!')
        next()
      }
      else{
        next('/login')
      }
    }
})
router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})