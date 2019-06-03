// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store';
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import commonMethods from './utils/common'
import common from './utils/commonMethods'
import '@mdi/font/css/materialdesignicons.css'
import socketAgent from '@/api/socketAgent'
import VueFullpage from 'vue-fullpage'
import $ from 'jquery';
import * as _ from "lodash";
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
// Vue.use(Vuetify)
window.jQuery = $;
Vue.prototype.$_ = _;
Vue.use(VueFullpage)
Vue.mixin(common)
Vue.config.productionTip = false
Vue.prototype.commonMethods = commonMethods;
var socketObj =null;
// Vue.use(VueMaterial)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
router.beforeEach((to, from, next) => {
  store.commit('SET_CURPATH', to.fullPath)
  store.commit('SET_PAGE_LOADED', false)
  store.commit('SET_SOCKET_STATUS', { message:'', show: false })
  // Vue.prototype.socketAgent=socketAgent;
  if (!Vue.prototype.socketAgent && store.getters.curUser.userId) {
    socketObj = new socketAgent();
    // socketAgent.init();
    socketObj.init({
      id: store.getters.curUser.userId,
      nickname: store.getters.curUser.nickname,
    });
    Vue.prototype.socketAgent = socketObj;
  }
  if (to.fullPath != '/') void((to.fullPath == '/chatPanel' || to.fullPath == '/chatList') && !store.getters.curUser.userId ? (() => {
    store.commit('SET_CURPATH', '/')
    store.commit('SET_SIDE_SHOW', false)
    next('')
    store.commit('SET_PAGE_LOADED', true)
  })() : next())
  else if (store.getters.curUser.userId) {
    store.commit('SET_CURPATH', '/chatList');
    store.commit('SET_PAGE_LOADED', true);
    router.push('/chatList')
  } else {
    // Vue.prototype.socketAgent = socketAgent({
    //   id: store.getters.curUser.userId,
    //   nickname: store.getters.curUser.nickname,
    // })
    next()
  }
})
router.afterEach((to, from, next) => {
  setTimeout(() => {
    store.commit('SET_PAGE_LOADED', true)
  }, 500)
  // NProgress.done(); // 结束Progress
})
/* global __APIHOST__:false  __SOCKETHOST__:false */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
