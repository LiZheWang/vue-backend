import Vue from 'vue'
import Router from 'vue-router'
import * as views from './view'
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
        {path:"*", component: views.NotFound,hidden:true},
        {path:"/",name:"Home",meta:{title:"系统概况"},component: views.Home,hidden:true},
        {path:"/store",name:"Store", redirect:{name:"Store1"} , icon:"fa fa-user", meta:{title:"store管理"}, component:views.EmptyIndex , children:[
            {path:"store1",name:"Store1",meta:{title:"store管理1"},component: views.Store1},
            {path:"store2",name:"Store2",meta:{title:"store管理2"},component: views.Store2},
          ]},
    ]
});

//前置
router.beforeEach((to, from, next) => {
	NProgress.start() ;
	setTimeout(next,500);
});
//后置
router.afterEach((to, from) => {
	NProgress.done() ;
});

export default router ;
