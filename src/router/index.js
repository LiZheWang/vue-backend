import Vue from 'vue'
import Router from 'vue-router'
import * as views from './view'
import {getUser , setLastRoute} from '@tools/common'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router);

NProgress.configure({showSpinner: false});

/*
* 首页不显示
* name必须是唯一的  不然不能定位，跳转也会有问题
*
* */

const router = new Router({
    mode: 'history',
    routes: [
        {path: "*", name: "NotFound", component: views.NotFound, meta: {title: "not found"}, hidden: true},
        {path: "/signin", name: "Signin", component: views.Signin, meta: {title: "登录"}, hidden: true},

        {path: "/", name: "Home", meta: {title: "系统概况"}, component: views.Home, hidden: true},

        {
            path: "/weixin",
            name: "Weixin",
            redirect: {name: "Revert"},
            icon: "fa fa-comments-o",
            meta: {title: "公众号管理"},
            component: views.EmptyIndex ,
            children : [
                {path: "revert", name: "Revert", meta: {title: "微信回复管理"}, component: views.Revert},
            ]
        },


    ]
});

function anth_signin(to, from, next) {
    var user = getUser();
    var name = to.name;
    //不需要登录的路由name
    var notSigninName = ['Signin', 'NotFound'];
    var isSignin = notSigninName.indexOf(name) == -1; //要登录?
    //需要登录又没有用户信息的，直接退出到登录页面 。 并且记录访问的页面，登录成功以后直接跳转到未完成的页面
    if (isSignin && !user) {
        setLastRoute(to);
        next("/signin") ;
        return false;
    }
    //如果登录过了，那么在访问登录页面，就直接转到首页
    if( name == "Signin" && user ){
        next("/") ;
    }
    return true;
}


//前置
router.beforeEach((to, from, next) => {

    //登录权限控制
    var validSignin = anth_signin(to, from, next);

    NProgress.start();
    setTimeout(next, 300);
});
//后置
router.afterEach((to, from) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    NProgress.done();
});

export default router;
