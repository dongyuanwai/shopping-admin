import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
    state: () => ({}),
    actions: {
        setUser(newUser) {
            console.log("🚀 ~ file: index.js:7 ~ setUser ~ newUser:", newUser)
            
            this.user = newUser
        }
    }
})