import Vue from 'vue'
import Router from 'vue-router'
import * as views from './view'
import cookie from '@tools/cookie'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router);

NProgress.configure({ showSpinner: false }) ;

/*
* 首页不显示
* name必须是唯一的  不然不能定位，跳转也会有问题
*
* */

const router = new Router({
    mode: 'history',
    routes : [
        {path:"*", component: views.NotFound,meta:{title:"not found"},hidden:true},
        {path:"/",name:"Home",meta:{title:"系统概况"},component: views.Home,beforeEnter:signinValid ,hidden:true},
        {path:"/signin", component: views.Signin,meta:{title:"登录"},hidden:true},
        {path:"/store",name:"Store", redirect:{name:"Store1"} , icon:"fa fa-user", meta:{title:"store管理"}, beforeEnter:signinValid ,component:views.EmptyIndex , children:[
            {path:"store1",name:"Store1",meta:{title:"store管理1"},component: views.Store1},
            {path:"store2",name:"Store2",meta:{title:"store管理2"},component: views.Store2},
            ]},
    ]
});

function signinValid(to, from, next){
  var user = cookie.get("user") ;
  console.log(user) ;
  if( !user ){
    next('/signin');
  }
  next();
}

//前置
router.beforeEach((to, from, next) => {
	NProgress.start() ;
	setTimeout(next,300);
});
//后置
router.afterEach((to, from) => {
    if( to.meta && to.meta.title ){
        document.title = to.meta.title ;
    }
	NProgress.done() ;
});

export default router ;
