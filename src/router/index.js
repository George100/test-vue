import Vue from 'vue'
import Router from 'vue-router'
import Explore from '@/components/explore'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import UsersReport from '@/components/user/UsersReport'
import Report from '@/components/user/Report'
import Test from '@/components/test';

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
    },
    {
      path: '/usersreport',
      name: 'UsersReport',
      component: UsersReport
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
