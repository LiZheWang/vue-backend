import cookie from '@tools/cookie'


//获取i18n的对应文字 ， 用于在js文件中使用
export function getI18n(text){
    return global.wlzVue.$t(text) ; ;
}
//设置语言,  需要传入vue的this 实例
export function setI18nLocale(lacale){
    global.wlzVue.$i18n.locale = lacale ;
    setLocale(lacale);
}

export function getLastRoute(){
    return cookie.get("wlz_lastRoute") ;
}
export function setLastRoute(route){
    return cookie.set("wlz_lastRoute",route) ;
}
export function removeLastRoute(){
    return cookie.remove("wlz_lastRoute") ;
}

export function getUser(){
    return cookie.get("wlz_user") ;
}
export function setUser(user){
    return cookie.set("wlz_user",user) ;
}
export function removeUser() {
    return cookie.remove("wlz_user") ;
}

export function getLocale(){
    return cookie.get("wlz_locale") || "cn" ;
}
export function setLocale(locale){
    return cookie.set("wlz_locale",locale) ;
}
//登录处理
export function signin(user){
    setUser(user) ;
    //访问一个地址，没有登录被跳转到了登录页面。那么登录成功以后，应该直接到这个页面
    var lastRoute = getLastRoute() ;
    if (lastRoute) {
        global.wlzVue.$router.push(lastRoute.fullPath);
        removeLastRoute() ;
    } else {
        global.wlzVue.$router.push({name: "Home"});
    }
}
//退出登录
export function signout(){
    removeUser() ;
    global.wlzVue.$router.push('/signin') ;
}


