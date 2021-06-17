import Vue from 'vue'
import VueRouter from 'vue-router'

import Users from '../views/Users'
import UserSave from '../views/Users/UserSave'
import UserUpdate from '../views/Users/UserUpdate'

Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Users', // 命名路由
      path: '/users', // 路由路径
      component: Users, // 路由组件
    },
    {
      name: 'UserSave', // 命名路由
      path: '/users/save', // 路由路径
      component: UserSave, // 路由组件
    },
    {
      name: 'UserUpdate', // 命名路由
      path: '/users/update', // 路由路径
      component: UserUpdate, // 路由组件
    },
    {
      path: '*',
      redirect: '/users',
    }
  ]
})