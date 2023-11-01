import { defineStore } from 'pinia'
import {  getInfo } from '~/api/manager.js'

// pinia 使用教程 https://juejin.cn/post/7207848485856100410
export const useUserStore = defineStore('userInfo',{
    state: () => {
        return {
            userInfo:{},
        }
    },
    actions: {
        setUser(newUser) {
            this.userInfo = newUser
        },
        getUserInfo(){
            return new Promise((resolve,reject)=>{
                getInfo().then((res)=>{
                    this.userInfo = res
                    resolve(res)
                }).catch((err)=>{
                    reject(err)
                })
            })
        }
    }
})

export const useFormInfo = defineStore('formInfo',{
    state: () => {
        return {
            name:"dong",
            age:19
        }
    },
    actions: {
        
    }
})