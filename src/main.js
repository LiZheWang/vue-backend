// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import dialog from '@tools/dialog'
import i18n from './lang'
//定义全局变量
global.i18n = i18n ;


//全局混入页面初始化组件
import Childpage from '@views/layou/Childpage'
Vue.mixin({
  components : {Childpage},
  computed : {
    routes(){
      if( this.$route.matched && this.$route.matched.length ){
        return this.$route.matched ;
      }
      return [] ;
    },
    routers(){
      if( this.$router.options && this.$router.options.routes && this.$router.options.routes.length ){
          return this.$router.options.routes ;
      }
      return [] ;
    }
  }
});

import 'element-ui/lib/theme-chalk/index.css';

//生成地址:https://elementui.github.io/theme-chalk-preview/#/zh-CN
//import './theme/demo/index.css';

//import animate from 'animate.css'

//https://9iphp.com/fa-icons  图标库地址
import 'font-awesome/css/font-awesome.css'


import '@style/style.css'

import 'font-awesome/css/font-awesome.css'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false ;


//store.state.route被激活
sync(store, router);



new Vue({
  el: '#app',
  router,
  store ,
  i18n ,
  components: { App },
  template: '<App/>'
});
