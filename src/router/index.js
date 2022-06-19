import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
const routes = [
    {
        path:"/",
        component:Index
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound 
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})

export default router
