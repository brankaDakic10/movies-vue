import Vue from 'vue'
import VueRouter from 'vue-router'

import AppMovies from '../pages/AppMovies'
import AddMovie from '../pages/AddMovie'
import AppLogin from '../pages/AppLogin'
import AppRegister from '../pages/AppRegister'
import AppSingleMovie from '../pages/AppSingleMovie'

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
    path: '/movies/:id',
    component: AppSingleMovie,
    name: 'single-movie'
    
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
    
},
{
    path: '/register',
    component: AppRegister,
    name: 'register'
    
}]

export const router = new VueRouter({
    mode: 'history',
    routes
})