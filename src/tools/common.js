//获取i18n的对应文字 ， 用于在js文件中使用
export function getI18n(text){
    if( global.i18n && global.i18n.t ){
        return global.i18n.t(text) ;
    }
    return null ;
}


