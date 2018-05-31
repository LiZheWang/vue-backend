import cookie from '@tools/cookie'

//获取i18n的对应文字 ， 用于在js文件中使用
export function getI18n(text){
    if( global.i18n && global.i18n.t ){
        return global.i18n.t(text) ;
    }
    return null ;
}

export function setI18nLocale(lacale){
    this.$i18n.locale = lacale ;
    cookie.set("locale",lacale);
}

