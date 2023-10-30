import { defineStore } from 'pinia'
import {  getInfo } from '~/api/manager.js'

export const useUserStore = defineStore('user',{
    state: () => ({}),
    actions: {
        setUser(newUser) {
            console.log("🚀 ~ file: index.js:7 ~ setUser ~ newUser:", newUser)
            this.user = newUser
        },
        getUserInfo(){
            return new Promise((resolve,reject)=>{
                getInfo().then((res)=>{
                    console.log("shuju-=-=",res)
                    this.user = res
                    resolve(res)
                }).catch((err)=>{
                    reject(err)
                })
            })
        }
    }
})