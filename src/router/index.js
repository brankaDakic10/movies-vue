import Vue from 'vue'
import VueRouter from 'vue-router'

import AppMovies from '../pages/AppMovies'
import AddMovie from '../pages/AddMovie'
import AppLogin from '../pages/AppLogin'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/movies',
    name:'home'
},
{
    path: '/movies',
    component: AppMovies,
    name: 'movies'
    
},
{
    path: '/add',
    component: AddMovie,
    name: 'add'
    
},
{
    path: '/login',
    component: AppLogin,
    name: 'login'
    
}]

export const router = new VueRouter({
    mode: 'history',
    routes
})