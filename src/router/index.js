import Vue from 'vue'
import Router from 'vue-router'
import addStudents from '@/components/addStudents'
import Navbar from '@/components/Navbar'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/addstudents',
      name:'addStudents',
      component:addStudents
    },
    {
      path:'/navbar',
      name:'navbar',
      component:Navbar
    },
    {
      path:'/',
      name:'home',
      component:Home
    }
  ]
})
