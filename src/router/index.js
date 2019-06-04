import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../view/layout'
// const iconList = () => import('../components/icons').then(m => m.default);
const taoChat = () => import('../view/taojijiChat').then(m => m.default)
const chatPanel = () => import('../view/taojijiChat/Message').then(m => m.default)
const chatList = () => import('../view/taojijiChat/chatingList').then(m => m.default)
// const demo = resolve => require(['../view/demo'], resolve);

Vue.use(Router)

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    // welcome page
    {
      path: '/',
      component: Layout,
      redirect: '/',
      name: '',
      hidden: true,
      // meta: {
      //     role: ['admin,developer'],
      // },
      children: [{
        path: '',
        component: taoChat
        // meta: {
        //     role: ['admin', 'developer', 'editor']
        // },
      }]
    },
    // chatPanel
    {
      path: '/chatPanel',
      component: Layout,
      name: '',
      hidden: true,
      // meta: {
      //     role: ['admin,developer'],
      // },
      children: [{
        path: '',
        component: chatPanel
        // meta: {
        //     role: ['admin', 'developer', 'editor']
        // },
      }]
    },
    // chatList
    {
      path: '/chatList',
      component: Layout,
      name: '',
      hidden: true,
      // meta: {
      //     role: ['admin,developer'],
      // },
      children: [{
        path: '',
        component: chatList
        // meta: {
        //     role: ['admin', 'developer', 'editor']
        // },
      }]
    }
    // ,
    // {
    //   path: '/iconList',
    //   component: Layout,
    //   name: '',
    //   hidden: true,
    //   // meta: {
    //   //     role: ['admin,developer'],
    //   // },
    //   children: [{
    //     path: '',
    //     component: iconList,
    //     // meta: {
    //     //     role: ['admin', 'developer', 'editor']
    //     // },
    //   }]
    // }
  ]
})
