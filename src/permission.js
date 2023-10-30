// 权限管理控制
import router from '~/router'
import { getToken } from '~/composables/auth'
import { toast } from './composables/utils'
// 全局路由前置守卫
router.beforeEach((to,from,next)=>{
    console.log("to",to,from)
    const token = getToken()
    // 没有登录就跳转到登录页
    if(!token && to.path != "/login"){
        toast("error","请先登录！")
        next({path:"/login"})
    }

    // 防止重复登录
    if(token && to.path == "/login"){
        toast("error","请勿重复登录！")
        return next({path:from.path?from.path:'/'})
    }

    next()
})
