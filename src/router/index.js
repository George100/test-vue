import Vue from 'vue'
import Router from 'vue-router'
import Explore from '@/components/explore'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
