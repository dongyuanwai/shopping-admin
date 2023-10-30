import { useCookies } from '@vueuse/integrations/useCookies'
const cookies = useCookies()
const tokenKey = 'user-token'
// 设置token
export const setToken = (token)=>{
    return cookies.set(tokenKey, token)
}
export const getToken = ()=>{
    return cookies.get(tokenKey)
}
export const removeToken = ()=>{
    return cookies.remove(tokenKey)
}

