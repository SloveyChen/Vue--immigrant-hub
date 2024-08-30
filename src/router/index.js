import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import MainUser from '../views/MainUser.vue'
import MainAdmin from '../views/MainAdmin.vue'
import Reg from '../views/Reg.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/reg',
            name: 'reg',
            component: Reg
        },
        {
            path: '/mainuser',
            name: 'mainuser',
            component: MainUser
        },
        {
            path: '/mainadmin',
            name: 'mainadmin',
            component: MainAdmin
        }
    ]
})

export default router