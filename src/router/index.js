import Vue from 'vue'
import Router from 'vue-router'
import * as views from './view'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router);

NProgress.configure({ showSpinner: false }) ;

const router = new Router({
    mode: 'history',
    routes : [
        {path:"*", component: views.NotFound},
        {path:"/",name:"Home",component: views.Home},
        {path:"/store",name:"Store",component: views.Store},
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